import crypto from "crypto";
import { NextResponse } from "next/server";
type PaymentEvent = {
  meta: {
    custom_data: {
      user_id: string;
    };
    event_name: "order_created" | "order_refunded";
  };
  data: {
    attributes: {
      status: "paid" | "failed";
    };
  };
};

export default async function POST(request: Request) {
  const body = (await request.json()) as PaymentEvent;
  const sigString = request.headers.get("x-signature");
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
  const hmac = crypto.createHmac("sha256", secret as string);
  const digest = Buffer.from(
    hmac.update(JSON.stringify(body)).digest("hex"),
    "utf8"
  );

  const signature = Buffer.from(
    Array.isArray(sigString) ? sigString.join("") : sigString || "",
    "utf8"
  );
  if (!crypto.timingSafeEqual(digest, signature)) {
    throw new Error("Invalid signature");
  }
  console.log(body);

  const eventName = body.meta.event_name;

  if (eventName === "order_created") {
    const user_id = body.meta.custom_data.user_id;
    const isSucessful = body.data.attributes.status === "paid";
    if (isSucessful) {
      console.log("order created", user_id);
    } else {
      console.log("order failed", user_id);
    }
  }
  return NextResponse.json({ result: true }, { status: 200 });
}

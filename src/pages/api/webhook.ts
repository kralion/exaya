import crypto from "crypto";

type PaymentEvent = {
  meta: {
    custom_data: {
      user_id: string;
    };
  };
  data: {
    attributes: {
      status: "paid" | "failed";
    };
  };
};

export async function POST(req: Request) {
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body: PaymentEvent = (await req.json()) as PaymentEvent;

    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    const hmac = crypto.createHmac("sha256", secret as string);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);

    if (eventType === "order_created") {
      const isSuccessful = body.data.attributes.status === "paid";
    }

    return Response.json({ message: "Webhook received" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

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
    const eventType = req.headers.get("X-Event-Name");
    const body: PaymentEvent = (await req.json()) as PaymentEvent;

    // Verify signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    const hmac = crypto.createHmac("sha256", secret as string);
    const digest = Buffer.from(
      hmac.update(await req.clone().text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      return Response.json({ message: "Invalid signature" }, { status: 400 });
    }

    if (eventType === "order_paid" && body.data.attributes.status === "paid") {
      // Payment is successful
      console.log("Payment successful for order");

      return Response.json({ message: "Payment successful" }, { status: 200 });
    }

    // For other events or failed payments
    console.log("Event received or payment not successful");
    return Response.json({ message: "Event received" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

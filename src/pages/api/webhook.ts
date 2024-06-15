import crypto from "crypto";
export default async function POST(request: Request) {
  if (!process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
    return new Response("Lemon Squeezy Webhook Secret not set in .env", {
      status: 500,
    });
  }
  const body = await request.text();
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(
    hmac.update(JSON.stringify(body)).digest("hex"),
    "utf8"
  );

  const signature = Buffer.from(
    request.headers.get("X-Signature") ?? "",
    "utf8"
  );

  if (!crypto.timingSafeEqual(digest, signature)) {
    return new Response("Invalid signature", { status: 400 });
  }
  const eventName = JSON.parse(body) as unknown;

  if (eventName === "order_created") {
    return new Response("OK", { status: 200 });
  }
  return new Response("Data invalid", { status: 400 });
}

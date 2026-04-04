import LandingLayout from "@/components/landing/landing-layout";
import ContactForm from "@/components/landing/contact-form";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <LandingLayout>
      <Typography.Title level={2}>Contacto</Typography.Title>
      <div className="mx-auto flex justify-center pb-16">
        <ContactForm />
      </div>
    </LandingLayout>
  );
}

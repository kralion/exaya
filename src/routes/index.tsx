import LandingLayout from "@/components/landing/landing-layout";
import DevicesVersionSteps from "@/components/ui/landingpage/steps";
import VideoBackground from "@/components/common/video-background";
import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "antd";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LandingLayout>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="z-10 space-y-6 text-left">
          <Typography.Title level={1} className="!mb-0 max-w-xl !text-3xl lg:!text-5xl">
            Gestión integral de transporte para tu empresa
          </Typography.Title>
          <Typography.Paragraph className="max-w-xl text-lg">
            Exaya centraliza ventas, encomiendas y operaciones en una sola
            plataforma.
          </Typography.Paragraph>
        </div>
        <VideoBackground />
      </div>
      <div className="mx-auto max-w-4xl px-4 pb-24">
        <DevicesVersionSteps />
      </div>
    </LandingLayout>
  );
}

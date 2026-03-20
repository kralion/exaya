import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">Exaya</h1>
      <p>Landing page coming soon.</p>
    </div>
  );
}

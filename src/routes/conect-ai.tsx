import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/conect-ai")({
  component: () => <Outlet />,
});

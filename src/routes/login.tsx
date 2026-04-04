import {
  createFileRoute,
  Navigate,
  useNavigate,
} from "@tanstack/react-router";
import { Button, Form, Input, message, Typography } from "antd";
import { useState } from "react";

import { useSupabaseBrowser } from "@/contexts/SupabaseAuthContext";
import { useSession } from "@/hooks/use-session";
import { usernameToAuthEmail } from "@/shared/auth/auth-email";
import { api } from "@/utils/api";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const supabase = useSupabaseBrowser();
  const utils = api.useUtils();
  const { status } = useSession();
  const [loading, setLoading] = useState(false);

  if (status === "loading") {
    return null;
  }
  if (status === "authenticated") {
    return <Navigate to="/dashboard" />;
  }

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: usernameToAuthEmail(values.username),
      password: values.password,
    });
    setLoading(false);
    if (error) {
      void message.error(error.message);
      return;
    }
    await utils.auth.session.invalidate();
    await navigate({ to: "/dashboard" });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <Typography.Title level={3}>Iniciar sesión</Typography.Title>
      <Form
        className="w-full max-w-sm"
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: "Ingresa tu usuario" }]}
        >
          <Input autoComplete="username" />
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Ingresa tu contraseña" }]}
        >
          <Input.Password autoComplete="current-password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

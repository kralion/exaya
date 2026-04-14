import LandingLayout from "@/components/landing/landing-layout";
import { api } from "@/utils/api";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";

export const Route = createFileRoute("/encomiendas/rastreo")({
  component: RastreoPage,
});

function RastreoPage() {
  const [codigo, setCodigo] = useState<string | null>(null);

  const { data, isFetching, isError } = api.encomiendas.getEncomiendaByTrackingCode.useQuery(
    { codigoRastreo: codigo ?? "" },
    { enabled: Boolean(codigo && codigo.length > 0) }
  );

  const onFinish = (values: { codigo: string }) => {
    setCodigo(values.codigo.trim());
  };

  const enc = data?.status === "success" ? data.response : null;

  return (
    <LandingLayout>
      <Typography.Title level={2}>Rastreo de encomienda</Typography.Title>
      <Form layout="inline" onFinish={onFinish} className="mb-8">
        <Form.Item
          name="codigo"
          rules={[{ required: true, message: "Ingresa el código" }]}
        >
          <Input placeholder="Código de rastreo" className="min-w-[220px]" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isFetching}>
            Consultar
          </Button>
        </Form.Item>
      </Form>
      {isError && (
        <Typography.Paragraph type="danger">
          No se pudo consultar. Intenta de nuevo.
        </Typography.Paragraph>
      )}
      {codigo && data?.status === "success" && !enc && (
        <Typography.Paragraph>
          No hay resultados para ese código.
        </Typography.Paragraph>
      )}
      {enc && (
        <Typography.Paragraph>
          Estado del envío: datos encontrados (origen / destino en sistema).
          Código: <code>{enc.codigoRastreo}</code>
        </Typography.Paragraph>
      )}
    </LandingLayout>
  );
}

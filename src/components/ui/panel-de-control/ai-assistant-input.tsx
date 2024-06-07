import { useMessageContext } from "@/context/MessageContext";
import { Button, Flex, Input, Space, type InputRef } from "antd";
import { useRef, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { useHotkeys } from "react-hotkeys-hook";
import { BsStars } from "react-icons/bs";
import { IoMic, IoMicOutline } from "react-icons/io5";

export const AIAssistantInput = () => {
  const inputRef = useRef<InputRef>(null);
  useHotkeys("ctrl+enter", () => {
    inputRef.current?.focus();
  });
  const { openMessage } = useMessageContext();
  const [audioRecorded, setAudioRecorded] = useState<Blob | null>(null);
  const { startRecording, stopRecording, recordingBlob, isRecording } =
    useAudioRecorder();
  const [generating, setGenerating] = useState(false);

  //TODO: Implementar la lógica de generación de boleto con manejador de errores para cuando el input (audio o texto) no sea válido o no se pueda generar el boleto por cuestiones de lógica de negocio o de validación Ej. "No se puede generar un boleto para un asiento que ya está ocupado", etc.
  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      openMessage({
        content: "Operación exitosa",
        type: "success",
        duration: 3,
      });
    }, 3000);
  };

  const handleStopRecording = () => {
    stopRecording();
    setAudioRecorded(recordingBlob || null);
    handleGenerate();
  };

  const handleStartRecording = () => {
    setAudioRecorded(null);
    startRecording();
  };

  return (
    <Flex align="center" gap={8}>
      <Space.Compact>
        <Input
          title="También puedes usar Ctrl + Enter para enfocar el input"
          onPressEnter={handleGenerate}
          allowClear
          ref={inputRef}
          style={{ width: 700 }}
          defaultValue="Boleto para el asiento 7 para 74845147 el día 15/10/2023 a 50 soles en el turno de las 20:30"
        />
        <Button
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          icon={
            isRecording ? (
              <IoMic
                className="animate-pulse text-zinc-500 dark:text-zinc-400"
                size={20}
              />
            ) : (
              <IoMicOutline
                className="text-zinc-500 dark:text-zinc-400"
                size={20}
              />
            )
          }
        />
      </Space.Compact>
      <Button
        type="primary"
        iconPosition="end"
        icon={<BsStars size={20} />}
        onClick={handleGenerate}
        loading={generating}
      >
        Generar
      </Button>
    </Flex>
  );
};

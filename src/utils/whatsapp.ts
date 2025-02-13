type MessageProps = {
  origin: string;
  destination: string;
  date: Date;
  dni: string;
  seatNumber: number;
};

export const createWhatsappMessage = ({
  origin,
  destination,
  date,
  dni,
  seatNumber,
}: MessageProps) => {
  const phoneNumber = "+51914019629";
  const message = `Hola, Me gustar a comprar el boleto desde "${origin}" hasta "${destination}" para el ${date.toLocaleString(
    "es-PE",
    { day: "numeric", month: "long" }
  )} a las ${date.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
  })}. Mi DNI es: ${dni}. Asiento ${seatNumber}. Espero alguna respuestar. Gracias!`;
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  return url;
};

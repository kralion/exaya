import boletoThumbnail from "../assets/boleto.png";
import facturaThumbnail from "../assets/factura.png";
import Image from "next/image";

function Boletos_Card() {
  return (
    <div className="text-white pl-7  py-7 rounded-xl  group flex flex-col bg-[#0F1322] hover:scale-105 drop-shadow-lg  ease-out duration-300 cursor-pointer  shadow-xl ">
      <h3 className="font-MPLUS2  font-semibold text-[32px] text-left">
        BOLETOS
      </h3>

      <div className="flex gap-16 items-center justify-center">
        <Image
          className="mx-auto block w-[115px] h-[116px] mt-12 rounded-lg"
          alt="pasajeThumbnail"
          loading="lazy"
          src={boletoThumbnail}
        />
        <div className="">
          <div className=" mb-12 font-MPLUS1">
            <div className="space-y-1.5">
              <h4 className="text-md text-justify">BOLETA B003</h4>

              <div className="flex items-center space-x-2">
                <Image src={boletoThumbnail} alt="boleto" className=" h-8 w-8" />
                <span className="text-md font-semibold tracking-wider">31190</span>
              </div>
            </div>
          </div>
          <div className="  pr-10 font-MPLUS1">
            <div className="space-y-1.5">
              <h4 className="text-md text-justify">FACTURA F003</h4>

              <div className="flex items-center space-x-2">
                <Image src={facturaThumbnail} alt="factura" className=" h-8 w-8" />
                <span className="text-md font-semibold tracking-wider">1580 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boletos_Card;

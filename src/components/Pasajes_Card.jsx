
import seat from "../assets/seat.png";
import Image from "next/image";

function Pasajes_Card() {
  return (
    <div className="text-white w-[450px] h-[307px] rounded-xl ml-[78px] mt-[64px] group flex flex-col bg-[#0F1322] hover:scale-105 drop-shadow-lg  ease-out duration-300 cursor-pointer  shadow-xl ">
      <h3 className="font-MPLUS2 pl-7 pt-2 font-semibold text-[32px] text-left">
        PASAJES
      </h3>

      <div className="flex gap-16 pl-10 items-center justify-center">
        <Image
          className="mx-auto block w-[115px] h-[116px] mt-12 rounded-lg"
          alt="pasajeThumbnail"
          loading="lazy"
          src={seat}
        />
        <div className="">
          <div className=" mb-12 pr-10 font-MPLUS1">
            <div className="space-y-1.5">
              <h4 className="text-md text-justify">Huancayo-Ayacucho</h4>

              <div className="flex items-center space-x-2">
                <Image src={seat} alt="seat" className="rounded-full h-8 w-8" />
                <span className="text-md font-semibold tracking-wider">
                  27 ASIENTOS
                </span>
              </div>
            </div>
          </div>
          <div className="  pr-10 font-MPLUS1">
            <div className="space-y-1.5">
              <h4 className="text-md text-justify">Ayacucho-Huancayo</h4>

              <div className="flex items-center space-x-2">
                <Image src={seat} alt="seat" className="rounded-full h-8 w-8" />
                <span className="text-md font-semibold tracking-wider">
                  32 ASIENTOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pasajes_Card;

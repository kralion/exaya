import busThumbnail from "../assets/bus.png";
import Image from "next/image";

function Viajes_Card() {
  return (
    <div className="text-white pl-7 py-8 rounded-xl  group flex flex-col bg-[#0F1322] hover:scale-105 drop-shadow-lg  ease-out duration-300 cursor-pointer  shadow-xl ">
      <h3 className="font-MPLUS2   font-semibold text-[32px] text-left">
        VIAJES
      </h3>

      <div className="flex gap-16  items-center justify-center">
        <Image
          className="mx-auto block w-[115px] h-[116px] mt-12 rounded-lg"
          alt="pasajeThumbnail"
          loading="lazy"
          src={busThumbnail}
        />
        <div className="">
          <div className=" mb-12  font-MPLUS1">
            <div className="space-y-1.5">
              <h4 className="text-md text-justify">Huancayo-Ayacucho</h4>

              <div className="flex items-center space-x-2">
                <Image src={busThumbnail} alt="bus" className=" h-6 w-8" />
                <span className="text-sm font-semibold tracking-wider">
                  {" "}
                  CV2-544 SCANIA
                </span>
              </div>
            </div>
          </div>
          <div className="  pr-10 font-MPLUS1">
            <div className="space-y-1.5">
              <h4 className="text-md text-justify">Ayacucho-Huancayo</h4>

              <div className="flex items-center space-x-2">
                <Image src={busThumbnail} alt="bus" className=" h-8 w-8" />
                <span className="text-sm font-semibold tracking-wider">
                  {" "}
                  BG8-875 SCANIA{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viajes_Card;

import React from "react";
import { CheckOutlined } from "@ant-design/icons";
type PlanesCardProps = {
  planTitle: string;
  planPrice: string;
  planTimeCharger: string;
  planDescription: string;
  planFeatures: string[];
};
export default function PlanesCard({
  planTitle,
  planPrice,
  planTimeCharger,
  planDescription,
  planFeatures,
}: PlanesCardProps) {
  {
    return (
      <div className="w-80  space-y-3.5 rounded-2xl  border-1 bg-gradient-to-l from-orange-200 to-yellow-200  p-7 text-left shadow-md  duration-200 hover:shadow-xl   ">
        <h1 className="font-semibold">{planTitle}</h1>
        <h3 className="text-3xl font-bold ">{planPrice}</h3>
        <h4 className=" lowercase text-zinc-500">{planTimeCharger}</h4>
        <p className="text-zinc-500">{planDescription}</p>

        <ul>
          {planFeatures.map((feature) => (
            <div>
              <li className="  flex items-center gap-2">
                <CheckOutlined />
                {feature}
              </li>
              <hr className="my-3 border-orange-300" />
            </div>
          ))}
        </ul>
        <div className="text-center">
          <button className=" mt-7 w-full cursor-pointer rounded-full bg-gradient-to-r  from-orange-500 to-yellow-500 py-3 font-semibold text-white duration-200 hover:scale-105">
            Adquirir
          </button>
        </div>
      </div>
    );
  }
}

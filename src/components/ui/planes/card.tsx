import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "./planes.module.css";
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
      <div className="w-80  space-y-3.5 rounded-2xl  border-1 bg-gradient-to-l from-orange-200  to-yellow-200  p-7 text-left shadow-md  duration-200 hover:shadow-xl   ">
        <h1 className="font-semibold">{planTitle}</h1>
        <h3 className="text-3xl font-bold ">{planPrice}</h3>
        <h4 className=" lowercase text-zinc-700">{planTimeCharger}</h4>
        <p className=" text-zinc-700">{planDescription}</p>

        <ul className="py-7">
          {planFeatures.map((feature) => (
            <div key={feature.length}>
              <li className="  flex items-center gap-2">
                <CheckCircleOutlined className=" w-7 text-orange-800" />
                {feature}
              </li>
              <hr className="my-3 border-orange-400/50" />
            </div>
          ))}
        </ul>
        <button className={styles.button}>
          <span className="text">Adquirir</span>
        </button>
      </div>
    );
  }
}

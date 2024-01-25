import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./planes.module.css";
import "animate.css";
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
      <div className="realtive w-80 space-y-3.5 rounded-2xl  border-1 bg-gradient-to-r from-orange-300  to-yellow-100  p-7 text-left   duration-200 hover:shadow-2xl   ">
        <h3 className="font-semibold ">{planTitle}</h3>
        <h2 className="animate__animated animate__flipInX animate__delay-1s text-3xl font-bold ">
          {planPrice}
        </h2>
        <h4 className=" lowercase text-zinc-700">{planTimeCharger}</h4>
        <p className="  text-sm">{planDescription}</p>

        <ul className="py-7">
          {planFeatures.map((feature) => (
            <div key={feature.length}>
              <li className="  flex items-center gap-2">
                <AiFillCheckCircle className=" w-7 text-orange-500" />
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

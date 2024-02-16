import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./planes.module.css";
import "animate.css";
import { PricingModal } from "@/components/pricing-modal";
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
      <div className=" w-80 space-y-3.5 rounded-2xl bg-gradient-to-b  from-orange-400 from-10% to-yellow-200  p-7  text-left shadow-md   duration-200 hover:shadow-2xl   ">
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

        <PricingModal
          trigger={
            <button className={styles.button}>
              <span>Adquirir</span>
            </button>
          }
        />
      </div>
    );
  }
}

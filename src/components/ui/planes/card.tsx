import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./planes.module.css";
import { PricingModal } from "@/components/landing/pricing-modal";
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
      <div className=" w-80 space-y-3.5 rounded-2xl bg-gradient-to-b from-orange-400  from-10% to-yellow-200 p-7  text-left  text-zinc-900 shadow-md   duration-200 hover:shadow-2xl   ">
        <h3 className="font-semibold ">{planTitle}</h3>
        <h3
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-duration="500"
          className="text-3xl font-bold "
        >
          {planPrice}
        </h3>
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

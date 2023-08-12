import React from "react";
import { styles } from "../styles";
export default function Card({ type, title, price, offers }) {
  if (type === "special") {
    return (
      <div className="rounded-lg p-6 primary-gradient-diagonal text-white flex flex-col gap-9 text-center md:py-14 md:shadow-special-card md:px-8 md:min-w-[24rem]">
        <h2>{title}</h2>
        <div className={`flex items-center justify-center font-bold`}>
          {" "}
          <span className="text-4xl">&#36;</span>
          <span className={`${styles.displayText}`}>{price}</span>
        </div>
        <ul className="text-center font-bold [&>*]:border-t [&>*]:border-neutral-light [&>*]:py-4 [&>*:last-child]:border-b">
          {offers.map((offer, i) => (
            <li key={i}>{offer}</li>
          ))}
        </ul>
        <button className="rounded-md bg-white py-3 border border-transparent duration-200 ease-in-out hover:bg-transparent hover:border-white group">
          <span className="text-gradient font-bold uppercase tracking-widest group-hover:text-white">
            learn more
          </span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="rounded-lg p-6 bg-white text-neutral flex flex-col gap-9 text-center shadow-card md:p-8 md:min-w-[24rem]">
        <h2>{title}</h2>
        <div
          className={`flex items-center justify-center font-bold text-neutral-dark`}
        >
          {" "}
          <span className="text-4xl">&#36;</span>
          <span className={`${styles.displayText}`}>{price}</span>
        </div>
        <ul className="text-center font-bold [&>*]:border-t [&>*]:border-neutral-light [&>*]:py-4 [&>*:last-child]:border-b">
          {offers.map((offer, i) => (
            <li key={i}>{offer}</li>
          ))}
        </ul>
        <button className="rounded-md primary-gradient border border-transparent py-3 duration-200 ease-in-out hover:bg-gradient-to-r hover:border-neutral group">
          <span className="text-white font-bold uppercase tracking-widest group-hover:text-gradient">
            learn more
          </span>
        </button>
      </div>
    );
  }
}

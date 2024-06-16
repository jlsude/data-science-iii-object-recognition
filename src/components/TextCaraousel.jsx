import React from "react";
import { mammals } from "./../assets/mammal-classes.json";
export default function TextCaraousel({ className }) {
  return (
    <div className={`${className} flex overflow-hidden space-x-16 `}>
      <div className={`flex items-center space-x-12 animate-loop-scroll`}>
        {mammals.map((item, index) => {
          return (
            <h3 key={index} className="max-w-none whitespace-nowrap">
              {item}
            </h3>
          );
        })}
      </div>
      <div className={`flex items-center space-x-12 animate-loop-scroll`}>
        {mammals.map((item, index) => {
          return (
            <h3 key={index} className="max-w-none whitespace-nowrap">
              {item}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

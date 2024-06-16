import React from "react";
import Typewriter from "typewriter-effect";

export default function LoadingResultTypewriter() {
  return (
    <Typewriter
      options={{
        loop: true,
        cursorClassName: "Typewriter__cursor text-accent font-black",
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1000)
          .typeString("loading.....")
          .pauseFor(3000)
          .deleteAll()
          .typeString("is it a lion?")
          .pauseFor(1000)
          .deleteAll()
          .typeString("is it a ti@!%#")
          .deleteChars(6)
          .pauseFor(100)
          .typeString("tiger?")
          .pauseFor(1000)
          .deleteAll()
          .typeString("or a jaguar?")
          .pauseFor(2000)
          .deleteAll()
          .typeString("maybe it is a btdfege")
          .deleteChars(6)
          .pauseFor(200)
          .typeString("ird")
          .pauseFor(100)
          .typeString("....?")
          .pauseFor(1500)
          .deleteAll()
          .pauseFor(500)
          .typeString("or a plane...")
          .pauseFor(1000)
          .typeString("...?")
          .pauseFor(500)
          .deleteAll()
          .typeString("or a bird plane?")
          .pauseFor(800)
          .deleteAll()
          .typeString("or....")
          .pauseFor(500)
          .typeString("is it a me Mario?")
          .pauseFor(1700)
          .deleteAll()
          .start();
      }}
    />
  );
}

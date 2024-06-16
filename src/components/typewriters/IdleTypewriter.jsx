import React from "react";
import Typewriter from "typewriter-effect";

export default function IdleTypewriter() {
  return (
    <Typewriter
      options={{
        loop: true,
        cursorClassName: "Typewriter__cursor text-accent font-black",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("waitiong")
          .deleteChars(4)
          .typeString("ing for input..")
          .pauseFor(1000)
          .deleteChars(7)
          .typeString("image file input")
          .pauseFor(2000)
          .typeString(".......")
          .pauseFor(5000)
          .deleteAll()
          .pauseFor(1000)
          .typeString("checking for any input..")
          .pauseFor(500)
          .typeString("...")
          .pauseFor(1000)
          .typeString("...")
          .pauseFor(3000)
          .deleteAll()
          .typeString("only image file formats are accepted..")
          .pauseFor(800)
          .typeString("....")
          .pauseFor(3000)
          .deleteAll()
          .start();
      }}
    />
  );
}

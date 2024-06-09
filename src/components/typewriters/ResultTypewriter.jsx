import Typewriter from "typewriter-effect";

export default function ResultTypewriter({ predictedClass, predictedProb }) {

  return (
    <Typewriter
      options={{
        cursorClassName: "Typewriter__cursor text-accent font-black",
        delay: 60,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .typeString("The uploaded image bears a resembksnxe to a")
          .pauseFor(300)
          .deleteChars(10)
          .typeString("lance to a ")
          .typeString(
            `<strong><span style="color: #4B19F0; font-weight: 500;">${predictedClass} mammal</span></strong>.`
          )
          .pauseFor(750)
          .typeString("<br/>")
          .pauseFor(500)
          .typeString(
            `<br/>This result is obtained with <span style="color: #4B19F0; font-weight: 500;">${predictedProb}% probability</span>. `
          )
          // .pauseFor(200)
          // .typeString(
          //   `an <span style="color: #4B19F0; font-weight: 500;">F1 score of ${f1Score}%</span>, `
          // )
          // .pauseFor(100)
          // .typeString(
          //   `a <span style="color: #4B19F0; font-weight: 500;">Recall of ${recall}%</span> `
          // )
          // .typeString(
          //   `and a <span style="color: #4B19F0; font-weight: 500;">Precision Score of 9%@^$</span>`
          // )
          // .deleteChars(5)
          // .typeString(
          //   `<span style="color: #4B19F0; font-weight: 500">${precision}%</span>.`
          // )
          // .pauseFor(3000)
          .start();
      }}
    />
  );
}

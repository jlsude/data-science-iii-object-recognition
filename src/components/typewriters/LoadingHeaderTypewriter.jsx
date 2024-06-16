import Typewriter from "typewriter-effect";

export default function LoadingHeaderTypewriter() {
  return (
    <label className="font-regular text-accent text-md font-['Fira_Code']">
      <Typewriter
        options={{
          loop: true,
          cursorClassName: "Typewriter__cursor text-accent font-black",
          cursor: "",
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .typeString(`loading..`)
            .pauseFor(500)
            .typeString(`...`)
            .pauseFor(10000)
            .deleteAll()
            .typeString(`fetching results`)
            .pauseFor(500)
            .typeString(`......`)
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      />
    </label>
  );
}

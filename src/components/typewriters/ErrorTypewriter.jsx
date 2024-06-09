import Typewriter from "typewriter-effect";

export default function ErrorTypewriter() {
  return (
    <label
      className="font-semibold text-[#961909] text-base lg:text-xl xl:text-2xl 2xl:text-3xl 
        font-['Fira_Code'] text-center"
    >
      <Typewriter
        options={{
          cursorClassName: "Typewriter__cursor text-accent font-black",
          cursor: "",
          strings: [
            "WARNING",
            "Invalid File Format",
            "Image File Formats: JPEG, PNG, JPG, and WEBP Only",
            "Recognition process will not proceed until the error is fixed",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </label>
  );
}

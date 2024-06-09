import { useState, useEffect } from "react";
import imageIcon from "../assets/image-icon.svg";
import Typewriter from "typewriter-effect";
import * as tmImage from "@teachablemachine/image";

import ErrorTypewriter from "../components/typewriters/ErrorTypewriter";
import LoadingHeaderTypewriter from "../components/typewriters/LoadingHeaderTypewriter";
import ResultTypewriter from "../components/typewriters/ResultTypewriter";
import IdleTypewriter from "../components/typewriters/IdleTypewriter";
import LoadingResultTypewriter from "../components/typewriters/LoadingResultTypewriter";

const Analyze = () => {
  const [imageBlob, setImageBlob] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [checkerState, setCheckerState] = useState(null);
  const [predictedClass, setPredictedClass] = useState("");
  const [predictedProb, setPredictedProb] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(null);

  const modelLink = "https://teachablemachine.withgoogle.com/models/pSigxzReh/";

  useEffect(() => {
    if (checkerState) {
      const allowedFormats = ["jpeg", "png", "jpg", "webp", "jfif"];
      const fileNameCheck = checkerState[0].name;

      const fileExtension = fileNameCheck.split(".").pop().toLowerCase();

      if (allowedFormats.includes(fileExtension)) {
        console.log("It is an allowed image format!");
        console.log(checkerState);
        setError(false);
        setImageFile(checkerState[0]);
      } else {
        console.log("File format not allowed");
        console.log(checkerState);
        setError(true);
        setPredictedClass(false);
      }
    }
  }, [checkerState]);

  useEffect(() => {
    const modelURL = modelLink + "model.json";
    const metadataURL = modelLink + "metadata.json";

    tmImage.load(modelURL, metadataURL).then((loadedModel) => {
      setModel(loadedModel);
      setMaxPredictions(loadedModel.getTotalClasses());
    });
  }, []);

  const analyze = async () => {
    setIsLoading(true);
    setPredictedClass(false);

    // const formData = new FormData();
    // formData.append("image", imageFile);

    let img = new Image();

    //createObjectURL creates blob
    img.src = URL.createObjectURL(imageFile);
    img.onload = async function () {
      const prediction = await model.predict(img);

      let sortedPrediction = [...prediction];
      sortedPrediction.sort((a, b) => b.probability - a.probability);

      setPredictedClass(sortedPrediction[0].className);
      let probability = sortedPrediction[0].probability * 100;

      // console.log(prediction);
      // console.log(sortedPrediction[0]);

      setPredictedProb(probability.toFixed(3));
      setIsLoading(false);
    };
  };

  return (
    <div className="w-screen h-dvh bg-background px-7 py-4 grid gap-5 grid-rows-7 grid-cols-5 md:grid-rows-6 md:grid-cols-10 relative">
      {/* The right side portion of the page, shows the result per input */}
      <div className="row-span-3 col-span-full sm:col-span-3 sm:col-start-2 md:row-start-2 md:col-start-7 md:col-span-3">
        <div className="bg-primary/5 rounded-xl flex flex-col p-3 gap-4 sm:p-5 sm:gap-5">
          {/* The upper box of the right side portion of the page */}
          <div className="bg-primary/5 flex-[0.5] rounded-md flex justify-center items-center p-5">
            {!error ? (
              <label className="font-medium text-text text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-['Fira_Code'] text-center">
                {predictedClass && (
                  <Typewriter
                    options={{
                      cursorClassName:
                        "Typewriter__cursor text-accent font-black",
                      cursor: "",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .typeString(`${predictedClass.toUpperCase()}`)
                        .start();
                    }}
                  />
                )}

                {isLoading && <LoadingHeaderTypewriter />}
                {!isLoading && !predictedClass ? <>- - -</> : null}
              </label>
            ) : (
              <ErrorTypewriter />
            )}
          </div>

          {/* The lower box of the right side portion of the page */}
          <div className="flex-1 flex rounded-md px-3 pb-2">
            <label className="font-regular text-text text-md font-['Fira_Code'] text-sm lg:text-base text-pretty">
              {/* Result typewriter */}
              {predictedClass && (
                <ResultTypewriter
                  predictedClass={predictedClass}
                  predictedProb={predictedProb}
                />
              )}
            </label>

            <label className="font-regular text-accent text-md font-['Fira_Code']">
              {/* Idle typewriter */}
              {!isLoading && !predictedClass ? <IdleTypewriter /> : null}
              {/* Loading typewriter */}
              {isLoading && <LoadingResultTypewriter />}
            </label>
          </div>
        </div>
      </div>

      {/* The left side portion, the input image */}
      <div className="bg-primary/5 rounded-xl p-5 row-start-4 row-span-3 col-span-full sm:col-span-3 sm:col-start-2 md:row-start-2 md:row-span-4 md:col-start-2 md:col-span-5">
        <div
          className="w-full h-full rounded-md border-dashed border-primary/5 border-2 relative flex flex-col justify-center items-center p-5 gap-2 hover:cursor-pointer"
          onClick={() => {
            document.querySelector(".upload-image").click();
          }}
          onChange={({ target: { files } }) => {
            files[0] && setCheckerState(files);
            if (files) {
              setImageBlob(URL.createObjectURL(files[0]));
            }
          }}
        >
          <input type="file" accept="image/*" hidden className="upload-image" />

          {imageBlob ? (
            <img
              src={imageBlob}
              alt={checkerState[0].name}
              className=" object-cover w-full h-full rounded-lg text-text hover:opacity-75"
            />
          ) : (
            <>
              <img src={imageIcon} alt="Image Icon" />
              <h3 className="text-center text-sm md:text-base">
                <span className="font-medium text-accent text-md font-['Fira_Code']">
                  Upload
                </span>
                &nbsp; an image here to begin the recognition process
              </h3>
            </>
          )}
        </div>
      </div>

      {/* button container */}
      <div className="flex justify-center items-center row-start-7 col-span-full md:row-start-5 md:col-start-7 md:col-span-3">
        <button
          onClick={() => {
            analyze();
          }}
          disabled={error || !imageFile || isLoading || !model}
        >
          Analyze
        </button>
      </div>
    </div>
  );
};

export default Analyze;

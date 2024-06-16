import { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import ResultPanel from "../components/ResultPanel";
import InputPanel from "../components/InputPanel";

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

  const modelLink = "https://teachablemachine.withgoogle.com/models/FWAocq8mR/";

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
    setPredictedClass("");

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
      console.log(sortedPrediction);

      setPredictedProb(probability.toFixed(3));
      setIsLoading(false);
    };
  };

  return (
    <div className="w-screen h-dvh bg-background px-7 py-4 grid gap-5 grid-rows-7 grid-cols-5 md:grid-rows-6 md:grid-cols-10 relative">
      {/* The right side portion of the page, shows the result per input */}
      <ResultPanel
        predictedClass={predictedClass}
        isLoading={isLoading}
        predictedProb={predictedProb}
        error={error}
      />

      {/* The left side portion, the input image */}
      <InputPanel
        checkerState={checkerState}
        setCheckerState={setCheckerState}
        imageBlob={imageBlob}
        setImageBlob={setImageBlob}
      />

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

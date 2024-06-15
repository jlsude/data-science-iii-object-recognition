import React from "react";
import imageIcon from "../assets/image-icon.svg";

export default function InputPanel({
  checkerState,
  setCheckerState,
  imageBlob,
  setImageBlob,
}) {
  return (
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
  );
}

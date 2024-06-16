import React from "react";
import Typewriter from "typewriter-effect";
import ErrorTypewriter from "../components/typewriters/ErrorTypewriter";
import LoadingHeaderTypewriter from "../components/typewriters/LoadingHeaderTypewriter";
import ResultTypewriter from "../components/typewriters/ResultTypewriter";
import IdleTypewriter from "../components/typewriters/IdleTypewriter";
import LoadingResultTypewriter from "../components/typewriters/LoadingResultTypewriter";

export default function ResultPanel({
  predictedClass,
  isLoading,
  predictedProb,
  error,
}) {
  return (
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
  );
}

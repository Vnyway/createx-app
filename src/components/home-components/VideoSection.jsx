import React, { useState } from "react";

const VideoSection = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const playVideo = () => {
    document.querySelector("video").play();
  };
  return (
    <section className="container mx-auto mt-[80px] flex flex-col items-center">
      <div className="mb-[40px] text-center">
        <h3 className="font-[700] text-[46px] text-heading">
          We are Createx Construction Bureau
        </h3>
        <p className="font-[400] text-[18px] text-paragraph my-[20px]">
          We are rightfully considered to be the best construction company in
          the USA.
        </p>
      </div>
      <div className="relative rounded-[4px] max-w-[1230px] max-h-[500px] overflow-hidden">
        <video
          onPlay={() => setVideoPlayed(!videoPlayed)}
          onPause={() => setVideoPlayed(!videoPlayed)}
          controls={videoPlayed}
          loop
          src="./videos/about-video.mp4"
          poster="./images/video.svg"
          className="w-[100%] h-[100%] object-cover"></video>
        <div
          className={`absolute w-full h-full top-0 left-0 bg-heading opacity-60 z-10 ${
            videoPlayed ? "hidden" : ""
          }`}></div>
        <button
          onClick={() => playVideo()}
          className={`bg-primary absolute z-20  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] size-[80px] rounded-full ${
            videoPlayed ? "hidden" : ""
          }`}>
          <img
            src="./images/play.svg"
            alt=""
            className="absolute left-[50%] top-[50%] translate-x-[-45%] translate-y-[-50%]"
          />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;

import React from "react";
import { CirclePlay } from "lucide-react";

export default function MiddleVideo() {
  return (
    <section
      id="home"
      className="relative w-full flex justify-center items-center overflow-hidden"
    >
      {/* Video container with rounded corners */}
      <div className="w-full overflow-hidden rounded-3xl relative">
        <video
          className="w-full h-[180px] object-cover 
          rounded-xl border border-lime-400/40
          hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
          overflow-hidden shadow-lg p-1"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://swadeshnewsportal.s3.ap-south-1.amazonaws.com/audio.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

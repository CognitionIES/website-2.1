"use client";

import React from "react";
import { Youtube } from "lucide-react";
import BackgroundGrid from "@/components/ui/backgroundgrid";
import demoVideo from "./servicecpq.mp4";

const VideoShowcase = () => {
  return (
    <section className="py-6 md:py-8 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0F5]/30 to-white -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-36 h-36 bg-[#00b4d8]/10 rounded-full blur-xl -z-5"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#0098af]/10 rounded-full blur-xl -z-5"></div>

      <BackgroundGrid className="-z-10 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-5"></div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003C46] mb-2">
            How ServiceCPQ in Action
          </h2>
          <p className="text-[#5b5b5b] mb-2">
            Experience our platform&apos;s capabilities through this quick
            demonstration
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements around the video */}
          <div className="absolute -top-4 -left-5 bg-[#0098af] text-white p-2 rounded-lg shadow-lg animate-subtle-bounce z-10">
            <Youtube className="h-5 w-5" />
          </div>

          <div
            className="absolute bottom-5 -right-6 bg-[#00b4d8] text-white p-2 rounded-lg shadow-lg animate-subtle-bounce z-10"
            style={{ animationDelay: "0.5s" }}
          >
            <Youtube className="h-5 w-5" />
          </div>

          {/* Video container with aspect ratio */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 bg-black">
            {/* 16:9 aspect ratio wrapper */}
            <div className="relative pt-[56.25%]">
              <video
                className="absolute inset-0 w-full h-full"
                title="ServiceCPQ Demo Video"
                controls
                autoPlay
                muted
                loop
                onError={(e) => console.error("Video error:", e)}
              >
                <source
                  src={demoVideo}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Caption */}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
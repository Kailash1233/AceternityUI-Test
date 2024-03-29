import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-screen w-full dark:bg-white bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-8">
        The K Innovations
      </p>
    </div>
  );
}

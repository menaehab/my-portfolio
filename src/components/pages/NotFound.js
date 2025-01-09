import React from "react";
import { CircleGrid } from "react-awesome-shapes";

function NotFound() {
  return (
    <div className="max-w-[1240px] px-4 mx-auto text-center h-[90vh] flex-col flex items-center justify-center mb-4">
      <CircleGrid
        className="animation-shape hidden sm:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        bottom="20px"
        size="175px"
        zIndex={2}
      />
      <div className="topblur"></div>
      <h1 className="text-5xl font-[900] text-primary mt-8 mb-10 sm:text-7xl">
        404 - Page Not Found
      </h1>
      <CircleGrid
        className="animation-shape"
        position="absolute"
        left="40px"
        top="30px"
        color="#ABB2BF"
        size="125px"
        zIndex={2}
      />
      <div className="rightblur"></div>
    </div>
  );
}

export default NotFound;

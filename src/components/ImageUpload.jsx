import React from "react";
import FileInput from "./FileInput";

export default function ImageUpload({ handleImage, canvasRef }) {
  return (
    <div className="">
      <p className="text-gray-500 mb-4">
        Upload an image of Armenia sights and get information about it!
      </p>
      <FileInput handleImage={handleImage} />
      <canvas className="hidden" ref={canvasRef} />
    </div>
  );
}

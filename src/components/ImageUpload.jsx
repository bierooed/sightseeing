import React from "react";
import FileInput from "./FileInput";

export default function ImageUpload({ image, handleImage, canvasRef }) {
  return (
    <div className="">
      <p className="text-gray-500 mb-4">
        Upload an image of Armenia sights and get information about it!
      </p>
      <FileInput image={image} handleImage={handleImage} />
      <canvas className="hidden" ref={canvasRef} />
    </div>
  );
}

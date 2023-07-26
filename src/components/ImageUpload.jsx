import React from "react";
import FileInput from "./FileInput";

export default function ImageUpload({ handleImage, canvasRef }) {
  return (
    <div className="">
      <p className="text-red-400">hello</p>
      <FileInput handleImage={handleImage} />
      <canvas className="hidden" ref={canvasRef} />
    </div>
  );
}

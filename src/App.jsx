import "./App.css";

import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef, useState } from "react";
import { loadModel, imageFormatting } from "tm-image-model";
import FileInput from "./components/FileInput";

function App() {
  const [model, setModel] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState();
  const canvasRef = useRef(null);

  useEffect(() => {
    async function handleModel() {
      const url = "https://teachablemachine.withgoogle.com/models/orzfSu2sE/";
      setModel(await loadModel(url));
    }

    handleModel();
  }, []);

  async function handleImage(imageFile) {
    setImageUrl(URL.createObjectURL(imageFile));
    const image = await imageFormatting(imageFile, canvasRef);
    setImage(image);
  }

  return (
    <>
      {!!model ? (
        <div className="">
          <p className="text-red-400">hello</p>
          <FileInput handleImage={handleImage} />
          <canvas className="hidden" ref={canvasRef} />
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;

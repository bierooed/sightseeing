import "./App.css";

import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef, useState } from "react";
import { loadModel, imageFormatting } from "tm-image-model";
import FileInput from "./components/FileInput";
import ImageUpload from "./components/ImageUpload";

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
        <ImageUpload handleImage={handleImage} canvasRef={canvasRef} />
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;

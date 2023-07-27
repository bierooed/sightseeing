import "./App.css";

import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef, useState } from "react";
import { loadModel, imageFormatting } from "tm-image-model";
import FileInput from "./components/FileInput";
import ImageUpload from "./components/ImageUpload";
import { Route, Routes } from "react-router-dom";
import paths from "./paths";
import Predict from "./components/Predict";
import HomePage from "./components/HomePage";

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
        <Routes>
          <Route exact path={paths.home} element={<HomePage />} />
          <Route
            path={paths.imageUpload}
            element={
              <ImageUpload handleImage={handleImage} canvasRef={canvasRef} />
            }
          />
          <Route path={paths.predict} element={<Predict />} />
        </Routes>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;

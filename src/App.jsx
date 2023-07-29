import "./App.css";

import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef, useState } from "react";
import { loadModel, imageFormatting } from "tm-image-model";
import ImageUpload from "./components/ImageUpload";
import { Route, Routes, useNavigate } from "react-router-dom";
import paths from "./paths";
import Predict from "./components/Predict";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  const [model, setModel] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState();
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function handleModel() {
      const url = "https://teachablemachine.withgoogle.com/models/orzfSu2sE/";
      const modelResp = await loadModel(url);
      setModel(modelResp);
    }

    handleModel();
  }, []);

  async function handleImage(imageFile) {
    setImageUrl(URL.createObjectURL(imageFile));
    const formattedImage = await imageFormatting(imageFile, canvasRef);
    setImage(formattedImage);

    if (!!formattedImage) {
      navigate("/predict");
    }
  }

  return (
    <>
      {!!model ? (
        <section className="flex flex-col justify-between h-full">
          <Routes>
            <Route exact path={paths.home} element={<HomePage />} />
            <Route
              path={paths.imageUpload}
              element={
                <ImageUpload handleImage={handleImage} canvasRef={canvasRef} />
              }
            />
            <Route
              path={paths.predict}
              element={
                <Predict image={image} imageUrl={imageUrl} model={model} />
              }
            />
          </Routes>
          <Footer />
        </section>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;

import "./App.css";

import * as tf from "@tensorflow/tfjs";
import { useEffect, useRef, useState } from "react";
import { loadModel, imageFormatting } from "tm-image-model";

function App() {
  const [model, setModel] = useState();
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
    const image = await imageFormatting(imageFile, canvasRef);
    setImage(image);
  }

  return (
    <>
      {!!model ? (
        <div>
          <canvas ref={canvasRef} />
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;

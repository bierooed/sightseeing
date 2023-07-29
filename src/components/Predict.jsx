import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Predict({ image, imageUrl, model }) {
  const [prediction, setPrediction] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function predict() {
      try {
        const pr = await model.predict(image);
        const maxProbability = pr.reduce((acc, el) =>
          el.probability > acc.probability ? el : acc
        );
        setPrediction(maxProbability);
      } catch (err) {
        navigate("/imageUpload");
      }
    }

    predict();
  }, []);
  return (
    <div className="flex justify-center">
      {Object.entries(prediction).length > 0 && (
        <>
          <img className="w-72" src={imageUrl} />

          <h3>
            With {prediction.probability.toFixed(2) * 100}% probability it's{" "}
            {prediction.className}
          </h3>
        </>
      )}
    </div>
  );
}

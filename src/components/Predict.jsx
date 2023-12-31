import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import info from "../info";

export default function Predict({ image, imageUrl, model }) {
  const [prediction, setPrediction] = useState({});
  const navigate = useNavigate();

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
  useEffect(() => {
    predict();
  }, []);
  return (
    <div className="flex justify-center">
      {Object.entries(prediction).length > 0 && (
        <div className="flex md:flex-row xs: flex-col xs: items-center">
          <img className="w-72" src={imageUrl} />

          <div>
            <div className="mt-12">
              <h3>
                With {prediction.probability.toFixed(2) * 100}% probability it's{" "}
                <span className="bg-yellow-200 ">{prediction.className}</span>
              </h3>
              <p>{info[prediction.className]}</p>
            </div>

            <button
              onClick={predict}
              className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm mt-4 px-5 py-2.5 outline-none"
            >
              Predict again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

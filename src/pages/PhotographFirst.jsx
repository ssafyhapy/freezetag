import React, { useState, useEffect, useRef } from "react";
import Photograph_intro from "../components/Photograph_intro";
import GameTurns from "../components/GameTurns";
import TakePhotoModal from "../components/TakePhotoModal";
import html2canvas from "html2canvas";

const PhotographFirst = () => {
  const pics = Array(6).fill("pic");
  const [showModal, setShowModal] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCapture = () => {
    if (photoRef.current) {
      html2canvas(photoRef.current).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        // Save the image or send it to the server
        console.log(imgData); // This is the base64 encoded image
        // Example: Saving the image to a server
        // fetch('/upload', { method: 'POST', body: JSON.stringify({ image: imgData }) })
        setShowModal(false);
      });
    }
  };

  return (
    <div className="w-full h-screen bg-custom-gradient-game flex items-center justify-center">
      <div
        ref={photoRef}
        style={{ height: "calc(100vh - 50px)" }}
        className="w-1/2 bg-[rgba(255,255,255,0.6)] flex flex-col justify-between"
      >
        <div className="h-4/5 bg-[rgba(255,255,255,0.7)] mr-[44px] ml-[44px] mt-[35px] mb-[39px] p-4 grid grid-cols-2 gap-4">
          {pics.map((pic, index) => (
            <div key={index} className="flex items-center justify-center">
              <p className="m-5">{pic}</p>
            </div>
          ))}
        </div>
        <div className="m-2 flex items-center justify-center">
          <GameTurns sectionNumber={1} />
        </div>
        <div className="text-center text-sm m-5 font-bold">
          <Photograph_intro />
        </div>
      </div>
      {showModal && <TakePhotoModal onCapture={handleCapture} />}
    </div>
  );
};

export default PhotographFirst;
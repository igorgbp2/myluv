import React from "react";
import gifHome from "../assets/remasterGifHome.gif";
import audio from "../assets/always knew.mp3";
import { useNavigate } from "react-router-dom";

export default function Screen() {
  const navigation = useNavigate();
  const navigate = () => {
    navigation("/one");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full border-2 bg-black">
      <audio src={audio} autoPlay></audio>
      <img
        src={gifHome}
        className="opacity-50 object-cover bg-pink-500 h-screen"
      ></img>
      <div className="absolute flex flex-col items-center px-6">
        <p className="font-bold text-pink-400">oi meu amor</p>
        <p className="font-bold text-pink-400">fiz um tourzin ksksljkdfj</p>
        <p className="font-bold text-pink-400">pra cê ver o quanto eu te amo</p>
        <p className="font-bold text-pink-400">coisa linda da minha vida</p>
        <p className="font-bold text-pink-400">clica ai pra começar</p>
        <button
          className="rounded-3xl p-2 mt-2 bg-pink-300"
          onClick={() => navigate()}
        >
          <p>aqui bebê</p>
        </button>
        <button
          className="rounded-3xl p-2 mt-2 bg-blue-300"
          onClick={() => navigation('/pres-hoje')}
        >
          <p>clica aqui, amor, o de hoje é aqui kkkkkkkkk</p>
        </button>
      </div>
      <p className="text-center text-white text-xs">
        ta um pouquinho brega só mas é coisa de romantico :)
      </p>
    </div>
  );
}

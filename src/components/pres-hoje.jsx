import React, { useState } from "react";
import gifHome from "../assets/remasterGifHome.gif";
import audio from "../assets/always knew.mp3";
import { useNavigate } from "react-router-dom";

export default function PresH() {
  const navigation = useNavigate();
  const [pass, setpass] = useState()
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
        <p className="font-bold text-pink-400">precisa da senha minha querida kkkkkkkkk</p>
        <p className="font-bold text-pink-400">no textinho no desenho :) </p>
        <p className=" text-pink-200">the red ones</p>



        <input className="rounded-lg border-none bg-slate-600 px-4 text-white " value={pass} onChange={(text)=>setpass(text.target.value)}/>
    
      <button className="rounded-lg bg-pink-300 p-2 mt-2" onClick={()=>{pass=='yttht'?alert('vai la no sua caixa de correio'):null}} >clica aqui</button>
       </div>
      
     
      
    </div>
  );
}

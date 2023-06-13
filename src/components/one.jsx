import videoSetembro from "../assets/video_setembro.mp4";
import hotline from '../assets/hotline.mp3'
import Prints from "./prints";
import { useState } from "react";
export default function One() {

    const [showPrints, setShowPrints] = useState(false)

  return (
    <div className="bg-pink-200 h-screen flex justify-center">
     {showPrints && <div className="absolute screen"><Prints/></div>}
        <audio src={hotline} autoPlay loop></audio>
      <video src={videoSetembro} autoPlay loop muted className="h-screen object-cover"></video>
    {!showPrints&&  <div className="w-full p-4 absolute bottom-0 flex flex-col items-center" >
        <div className="w-72">
                  <p className="font-semibold text-pink-200 text-center mb-2">aqui eu já tava era apaixonado, tinha passado nem umas horas direito, cê tem um trem mesmo viu pqp kkkkkkkkkk</p>

        </div>
        <button className="p-2 rounded-xl bg-pink-500 text-white font-semibold" onClick={()=>setShowPrints(true)}>aperte aqui pra ce ver uns prints engraçados</button>
        
      </div>}
    </div>
  );
}

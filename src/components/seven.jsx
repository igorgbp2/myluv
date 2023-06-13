import { useEffect, useState } from "react";
import video from "../assets/brunasHouse.mp4";

export default function Seven( {setscreen} ) {

  return (
    <div className="h-screen flex bg-pink-600">
      {/* <video src={video} autoPlay loop className={`object-cover  opacity-${show1 ?'50':'100'}`} /> */}

      <div className="h-screen w-full flex flex-col justify-center items-center p-4 absolute">
        <p>
            ok o fato é que eu fiz isso aqui muito rapido pq já ta quase dando a hora de ce dormir

        </p>
        <p>
           mentira, o fato é que... eu ficava doido pras pessoas pedirem pra ver quem é que eu tava namorando pra poder mostrar foto sua kkkkkkkkkkkk juro

            
        </p>
        <button onClick={()=>setscreen(4)} className="p-2 bg-pink-300 rounded-lg">proximo</button>

       
      </div>
    </div>
  );
}

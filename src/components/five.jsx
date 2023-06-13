import { useEffect, useState } from "react";
import video from "../assets/brunasHouse.mp4";

export default function Five( {setscreen} ) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
// console.log(setindex)
  useEffect(() => {
    setTimeout(() => {
      setShow1(true);
    }, 1000);
    setTimeout(() => {
      setShow2(true);
    }, 2250);
    setTimeout(() => {
      setShow3(true);
    }, 3500);
    setTimeout(() => {
      setShow4(true);
    }, 5000);
    setTimeout(() => {
        setscreen(2);
      }, 8000);
  }, []);

  return (
    <div className="h-screen flex bg-indigo-800">

      <video src={video} autoPlay loop className={`object-cover  opacity-${show1 ?'50':'100'}`} />

      <div className="h-screen w-full flex flex-col justify-center items-center p-4 absolute">
        

        {/* <img src={images[index]} className="rounded-lg"/> */}

        {show1 && <p className="text-white text-sm">te amo</p>}
        {show2 && <p className="text-white text-2xl font-medium">te amo pra caralhooo</p>}
        {show3 && <p className="text-white text-5xl font-medium text-center">amor você não tem ideiaaa</p>}
        {show4 && <p className="text-white text-8xl font-bold text-center">cê é o amor da minha vida</p>}

        {/* <button
            className="rounded-xl p-2 flex items-center justify-center bg-purple-300 text-slate-950"
            onClick={() => setindex(2)}
        >
            proximo
        </button>
         */}
      </div>
    </div>
  );
}

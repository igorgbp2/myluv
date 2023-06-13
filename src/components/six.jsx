import { useEffect, useState } from "react";
import video from "../assets/brunasHouse.mp4";

export default function Six( {setscreen} ) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);


// console.log(setindex)
  useEffect(() => {
    setTimeout(() => {
      setShow1(true);
    }, 1000);
    setTimeout(() => {
      setShow2(true);
    }, 3000);
    setTimeout(() => {
      setShow2(false);
    }, 3800);
    setTimeout(() => {
      setShow3(true);
    }, 4500);
    setTimeout(() => {
        setShow4(true);
      }, 7600);
      setTimeout(() => {
        setShow5(true);
      }, 11000);
      setTimeout(() => {
        setShow5(false);
      }, 13000);
      setTimeout(() => {
        setShow6(true);
      }, 13000);


    setTimeout(() => {
        setscreen(4);
      }, 18000);
  }, []);

  return (
    <div className="h-screen flex bg-pink-600 w-full flex-col items-center">
      <video src={video} autoPlay loop className={`object-contain h-screen  opacity-${show1 ?'50':'100'}`} />

      <div className="h-screen w-96 flex flex-col justify-center items-center p-4 absolute  ">
        

        {/* <img src={images[index]} className="rounded-lg"/> */}

        {show1 && <p className="text-white text-lg font-medium">se você clicar rápido vai ter um fato</p>}
        {show2 && <button className="p-2 bg-pink-400 rounded-lg">asdf</button>}
        {show3 && <p className="text-white  text-center text-2xl font-medium">jkshdfkj to brincando</p>}
        {show4 && <p className="text-white  text-center text-2xl font-bold">vou te dar outra chance</p>}
        {show5 && <button className="p-2 bg-pink-400 rounded-lg" onClick={()=>setscreen(3)}>asdf</button>}
        {show6 && <p className="text-white  text-center text-6xl font-bold">pelo amor de deus</p>}


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

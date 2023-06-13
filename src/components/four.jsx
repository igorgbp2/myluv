import family from "../assets/family.jpg";
import background from "../assets/brunasHouse.mp4";
import wBernardo1 from "../assets/with_bernardo1.jpg";
import wBernardo2 from "../assets/with_bernardo2.jpg";
import wBernardo3 from "../assets/with_bernardo3.jpg";
import wBernardo4 from "../assets/with_bernardo4.jpg";
import Five from "./five";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Six from "./six";
import hotline from "../assets/hotline.mp3";
import Seven from "./seven";
import Eight from "./eight";

export default function Four() {
  const [screen, setscreen] = useState(0);
  const [index, setindex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < images.length - 1) {
        setindex(index + 1);
      } else setindex(0);
    }, 1000); // Tempo em milissegundos (5 segundos)

    return () => clearTimeout(timeout); // Limpar o timeout ao desmontar o componente
  }, [index]);
  const navigation = useNavigate();
  const navigate = () => {
    navigation("/five");
  };
  console.log(screen)
  let a = "<3";
  let images = [wBernardo1, wBernardo2, wBernardo3, wBernardo4];
  return (
    <>
     <audio src={hotline} autoPlay></audio>     

    <div className="flex h-screen ">
                 

      {screen == 0 && (
        <div className="h-screen flex justify-center border-2 bg-indigo-800">
          <video
            src={background}
            autoPlay
            loop
            className="object-cover opacity-50"
          />

          <div className="h-screen flex flex-col justify-center items-center p-4 absolute">
            <p className=" text-white">nós com a nossa cria slkdjfls</p>
            <p className="mb-2 text-white">(mostra pra ele)</p>

            <img src={images[index]} className="rounded-lg" />

            <p className="text-white">{a}</p>
            <button
              className="rounded-xl p-2 flex items-center justify-center bg-purple-300 text-slate-950"
              onClick={() => setscreen(1)}
            >
              proximo
            </button>
          </div>
        </div>
      )}
      {screen == 1 && <Five setscreen={setscreen} />}
      {screen == 2 && <Six setscreen={setscreen} />}
      {screen == 3 && <Seven setscreen={setscreen} />}
      {screen == 4 && <Eight setscreen={setscreen} />}


    </div>
    </>
  );
}

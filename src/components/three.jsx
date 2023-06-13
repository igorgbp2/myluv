import { useState } from "react";
import question from "../assets/question.mp4";
import desapontado from "../assets/desapontado.jpeg";
import hotline from "../assets/hotline.mp3";

import fato from "../assets/fato.jpg";
import { useNavigate } from "react-router-dom";
export default function Three() {
  let rest = "(só tem uma chance em)";
  const navigation = useNavigate();
  const navigate = () => {
    navigation("/four");
  };
  const [pick, setpick] = useState();
  let answers = [
    {
      id: 1,
      answer: "14/11",
    },
    {
      id: 2,
      answer: "12/11",
    },
    {
      id: 3,
      answer: "10/11",
    },
    {
      id: 4,
      answer: "10/10",
    },
  ];

  return (<>
  <audio src={hotline} autoPlay></audio>     


    <div className="screen flex flex-col  items-center justify-center p-2 px-6 bg-pink-200">
    <p className="text-center mb-2">Agora se vc acertar cê ganha um fato</p>
      <div className=" p2 bg-pink-300 flex items-center flex-col p-4 rounded-lg mb-2">
        <p className="mb-0">que dia foi isso aqui em em??? </p>
        <p className="text-sm">{rest}</p>
        <video
          src={question}
          autoPlay
          loop
          muted
          className="w-32 mb-2 rounded-lg"
        ></video>
      </div>

      {answers.map((index) => {
        return (
          <button
            className="mb-2 bg-pink-400 p-2 w-20 rounded-lg text-white"
            onClick={() => setpick(index.id)}
          >
            {index.answer}
          </button>
        );
      })}
      {pick == 2 && (
        <div className="absolute p-6 flex flex-col items-center justify-center screen bg-pink-200">
          <p className="text-center font-bold text-lg">acertouuu coisa linda</p>
          <p>o fato é que...</p>
          <img src={fato} className="w-40 mb-2"></img>
          <p className="text-center">
            nesse dia aqui eu fique com cara de cu o role todo porque tava com
            ciúme, achando que a qualquer momento iria aparecer algum
            "amiguinho" 🤨 seu la de vgp, e porque cê tava falando que queria
            ver o kaio, e eu nunca tinha visto o kaio kkkkkkkk
          </p>
          <button
            onClick={() => navigate()}
            className="mt-2 p-2 rounded-xl bg-pink-400 text-white"
          >
            clique aqui pra continuar be
          </button>
        </div>
      )}
      {(pick == 1 || pick == 3 || pick == 4) && (
        <div className="absolute p-6 flex flex-col items-center justify-center screen bg-slate-800">
          <p className="text-center text-white">
            aff sabe nem o dia que vou na sua casa 😒 olha que trem
          </p>
          <img src={desapontado} className="w-56 rounded-lg"></img>
          <button
            onClick={() => navigate()}
            className="mt-2 p-2 rounded-xl bg-slate-700 text-white"
          >
            clique aqui pra continuar BRUNA 😒😒😒😒
          </button>
        </div>
      )}
    </div>  </>
  );
}

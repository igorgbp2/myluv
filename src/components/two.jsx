import family from "../assets/family.jpg";
import background from "../assets/background hands.jpg";

import { useNavigate } from "react-router-dom";
export default function Two() {
  const navigation = useNavigate();
  const navigate = () => {
    navigation("/three");
  };
  let a = "<3";
  return (
    <div className="flex h-screen bg-slate-800 w-full flex-col items-center">
      <img src={background} className="object-contain opacity-40 h-screen " />

      <div className="h-screen flex flex-col justify-center items-center p-4 absolute">
        <p className="mb-2 text-white">aqui nem preciso falar nada né be</p>
        <img src={family} className="rounded-xl object-contain w-72" />

        <p className="text-white">{a}</p>
        <button
          className="rounded-xl p-2 flex items-center justify-center bg-pink-400 text-white"
          onClick={() => navigate()}
        >
          proximo
        </button>
      </div>
    </div>
  );
}

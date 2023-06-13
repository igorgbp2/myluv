import { useState } from "react";
import print1 from "../assets/prints1.jpg";
import print2 from "../assets/prints2.jpg";
import print3 from "../assets/prints3.jpg";
import { useNavigate } from "react-router-dom";

export default function Prints() {
    const navigation = useNavigate()
    const navigate = () =>{
        navigation('/two')
    }
  const prints = [
    {
      id: 1,
      pic: print1,
      description:
        "Essa daqui é uma foto que ce me mandou pra ver uma vez só e eu queria ver mais kkkkkkkkk tirava print de todas ",
    },
    {
      id: 2,
      pic: print2,
      description:
        "outra que ce mandou e ce ta linda demais, aí eu tirei print pra ver de novo depois, n sei pra que mandar pra ver só uma vez 😡",
    },
    {
      id: 3,
      pic: print3,
      description: "isso daqui é print pra ver se vc tava seguindo gente 😡",
    },
  ];

  function ItemPrint(idx) {
    console.log(idx);
    let item = idx.item;
    return (
      <div className="p-4 bg-pink-300 mb-4 rounded-lg flex flex-col items-center w-72">
        <img src={item.pic} className="w-36 rounded-lg"/>
        <p>{item.description}</p>
      </div>
    );
  }
  return (
    <div className="w-full p-4 flex flex-col bg-pink-200 items-center">
      <p className="mb-4 mx-auto text-center">
        da um scroll pra baixo pra ce ir vendo amor, todos os prints aqui são de
        setembro
      </p>
      {/* <img src={print1} /> */}
      {/* <div>
        <img src={prints[idx].pic}/>
      </div> */}
      {prints.map((index) => {
        return <ItemPrint item={index} />;
      })}
      <button className="rounded-lg p-4 bg-pink-400" onClick={()=>navigate()}>
       <p className="font-bold text-white">aperta aqui pra continuar bê</p> 
      </button>
    </div>
  );
}

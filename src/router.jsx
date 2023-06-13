import { Route,Routes } from "react-router-dom";
import Screen from "./components/screen";
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
import Four from "./components/four";



export default function AppRouter(){
    return (
        <Routes>
            <Route path="/"  element={<Screen/>}/>
          <Route path="/one"  element={<One/>}/>
          <Route path="/two"  element={<Two/>}/>
          <Route path="/three"  element={<Three/>}/>
          <Route path="/four"  element={<Four/>}/>



        </Routes>
    )
}
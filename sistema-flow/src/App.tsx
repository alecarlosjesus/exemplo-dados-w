import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu"
import Rodape from "./components/Rodape/Rodape";

export default function App() {

  return (
    
    <div className="container">
    
        <Outlet />
        <Menu />
        <Rodape />
    </div>
   
  );
}

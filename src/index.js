import reactDom  from "react-dom";
import Navbar from "./Navbar";
import Stories from "./Stories.jsx"
import FundoMobile from "./Fundo-mobile";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

function App(){
    return  (
        <div>
            <Navbar/>
            <div className="corpo">
                <div className="esquerda">
                    <Stories/>
                    <Posts/>
                </div>
                <Sidebar/>
            </div>
            <FundoMobile/>
        </div>
    ) 
}

const tela = App()
const root = document.querySelector('.root')
reactDom.render(tela,root);   
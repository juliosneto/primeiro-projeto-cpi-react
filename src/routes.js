import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Article from './components/article';
import Jogo from './components/jogo';
import Surv from './components/survivors';
import Killer from './components/killers';

export default function Rotas() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Article/>}/>
                <Route path="/jogo" element={<Jogo/>}/>
                <Route path="/sobreviventes" element={<Surv/>}/>
                <Route path="/assassinos" element={<Killer/>}/>
            </Routes>
        </BrowserRouter>
    )
}


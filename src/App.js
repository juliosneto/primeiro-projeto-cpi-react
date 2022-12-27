import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Article from './components/article';
import Jogo from './components/jogo';
import Surv from './components/survivors';
import Killer from './components/killers';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <Article/>
        <Jogo/>
        <Surv/>
        <Killer/>
        <Footer/>
    </div>
  );
}

export default App;


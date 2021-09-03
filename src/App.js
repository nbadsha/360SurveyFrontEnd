import logo from './logo.svg';
import './App.css';
import { Header } from './AppComponents/HeaderComponent/Header';
import { Footer } from './AppComponents/FooterComponent/Footer';
import { MainContent } from './AppComponents/MainComponent/MainContent';

function App() {
  
  return (
    <>
    <Header/>

      <MainContent/>

    <Footer/>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Resources from './components/Resources'
import Waystowork from './components/Waystowork';
import Createpages from './components/Createpages';
import Makesite from './components/Makesite';
import Built from './components/Built';
import Trusted from './components/Trusted';
import Videotitle from './components/Videotitle';



function App() {
  return (
    <>
      <Navbar/>
      <Built/>
      <Trusted/>
      <Videotitle/>
      <Makesite/>
      <Waystowork/>
      <Createpages/>
      <Resources/>
      <Footer/>
    </>
  );
}

export default App;

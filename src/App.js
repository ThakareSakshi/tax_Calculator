import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import TaxCalculator from './Components/TaxCalculator/TaxCalculator';
import GetStarted from './Components/TaxCalculator/GetStarted';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className='bg-[#EFF2F5] p-4 flex px-8 gap-6 max-md:flex-col max-md:p-0'>
        <TaxCalculator/>
        <GetStarted></GetStarted>

      </div>
      <Footer/>
    </>
  );
}

export default App;

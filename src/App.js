
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import { About } from './components/About';

import Blog from './components/Blog';
import { DoctorLogin } from './components/DoctorLogin';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='bg-[#f7f5fa]'>

    <Header/>
   <Home/>
   <About/>
   <DoctorLogin/>
   <Blog/>
   <Collection/>
   
   <Footer/>
    </div>
  );
}

export default App;

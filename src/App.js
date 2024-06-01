import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Vegetables from './Components/Vegetables';
import Vegebanner from './Components/Vegebanner';
import Ourproducts from './Components/Ourproducts';
import Chooseuse from './Components/Chooseuse';
import Footer from './Components/Footer';
import Bannercopy from './Components/Bannercopy';
import Productscopy from './Components/Productscopy';
import Productdetail from './Components/Productdetail';








function App() {
 
  return (
      <div>
              

        <BrowserRouter>
        
        <Routes>
        <Route path='/' element={<Vegetables/>}/>
        <Route path='/banner' element={<Bannercopy/>}/>
        <Route path='/products' element={<Productscopy/>}/>
        <Route path='/product/:id' element={<Productdetail/>}/>
        <Route path='/choose' element={<Chooseuse/>}/>

       
          
     
        </Routes>
        <Footer/>
        </BrowserRouter>
       
      </div>
      );
}

export default App;

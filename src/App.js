import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Kuda from './components/Home';
import Personel from './components/Personal';
import Bussiness from './components/Bussiness';
import Developer from './components/Developer';
import Header from './components/Header';
import Help from './components/Help';
import Company from './components/Company';
import AuthBox from './components/AuthBox';
import Login from './components/Login';
function App() {
  return(
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='SignUp' element={<AuthBox/>}/>
        <Route path='/' element={<Kuda/>}/>
        <Route path='Personal' element= {<Personel/>}/>
        <Route path='bussiness' element= {<Bussiness/>}/>
        <Route path='developer' element= {<Developer/>}/>
        <Route path='company' element= {<Company/>}/>
        <Route path='help' element= {<Help/>}/>
        <Route path = 'authbox' element={<AuthBox/>}/>
        <Route path = 'login' element={<Login/>}/>



      </Routes>
      </BrowserRouter>

  )
  }
export default App;

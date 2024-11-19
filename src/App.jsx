import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Novidades from './components/Novidades/Novidades';
import Sobre from './components/Sobre/Sobre';
import { GlobalStyles } from './globalStyle';


export default function App(){
  return(
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/novidades' element={<Novidades/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Service from './pages/Service';

function App() {

  return (
    <div className='global-style'>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>

        </Routes>
        <Footer/>
      </HashRouter>
      
      
    </div>
  )
}

export default App

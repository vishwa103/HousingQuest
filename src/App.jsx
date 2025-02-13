import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';

//version-2
function App() {

  return (
    <div className='global-style'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

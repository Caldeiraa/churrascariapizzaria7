import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Cardapio from './Cardapio.jsx';
import './Cardapio.css'
import './img/Logo.jpeg'
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Cardapio/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
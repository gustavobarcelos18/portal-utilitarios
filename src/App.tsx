import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tarefas from './pages/Tarefas';
import Contatos from './pages/Contatos';
import Gastos from './pages/Gastos';

export default function App() {
  //aqui eu uso o BrowserRouter para ter várias páginas
  //o componente navbar fica sempre visível na parte de cima
  //e dentro de routes eu defino cada caminho e o componente que aparece
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/gastos" element={<Gastos />} />
      </Routes>
    </BrowserRouter>
  );
}

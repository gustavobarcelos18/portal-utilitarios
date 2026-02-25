import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './paginas/Home';
import Tarefas from './paginas/Tarefas';
import Contatos from './paginas/Contatos';
import Gastos from './paginas/Gastos';

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

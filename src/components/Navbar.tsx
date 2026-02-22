import { Link } from 'react-router-dom';

export default function Navbar() {
  //barra de navegação com links para cada rota do app
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Início
          </Link>
        </li>
        <li>
          <Link to="/tarefas" className="hover:underline">
            Tarefas
          </Link>
        </li>
        <li>
          <Link to="/contatos" className="hover:underline">
            Contatos
          </Link>
        </li>
        <li>
          <Link to="/gastos" className="hover:underline">
            Gastos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
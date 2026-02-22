import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CartaoProps {
  to: string;
  children: ReactNode;
}

export default function Cartao({ to, children }: CartaoProps) {
  //Cartao é só um link estilizado para usar nas páginas
  //ele recebe o destino e o texto/children
  return (
    <Link
      to={to}
      className="block bg-white shadow p-6 rounded-lg hover:bg-gray-100 text-center"
    >
      {children}
    </Link>
  );
}

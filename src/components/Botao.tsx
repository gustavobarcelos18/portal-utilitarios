import { ReactNode } from 'react';

interface BotaoProps {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  onClick?: () => void;
}

//componente de botão bem simples com estilo básico
//ele recebe um type, o conteúdo (children) e um callback onClick opcional
export default function Botao({ type = 'button', children, onClick }: BotaoProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
}

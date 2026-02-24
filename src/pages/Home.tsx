import Cartao from '../components/Cartao';

export default function Home() {
  //página inicial com cartões que levam para cada funcionalidade
  //uso do componente Cartao que é só um Link estilizado
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Bem-vindo ao Portal de Utilitários</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Cartao to="/tarefas">Tarefas</Cartao>
        <Cartao to="/contatos">Contatos</Cartao>
        <Cartao to="/gastos">Gastos</Cartao>
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { lancamentoSchema, LancamentoDados } from '../schemas/lancamentoSchema';
import Botao from '../componentes/Botao';
import Campo from '../componentes/Campo';

interface Lancamento extends LancamentoDados {
  id: string;
}

export default function Gastos() {
  //guarda os lançamentos de gastos/entradas
  const [lancamentos, setLancamentos] = useState<Lancamento[]>([]);

  //formulário com validação para lançamentos
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LancamentoDados>({ resolver: zodResolver(lancamentoSchema) });

  //carregar dados do localStorage no início
  useEffect(() => {
    const sal = localStorage.getItem('lancamentos');
    if (sal) {
      setLancamentos(JSON.parse(sal));
    }
  }, []);

  //salvar sempre que a lista muda
  useEffect(() => {
    localStorage.setItem('lancamentos', JSON.stringify(lancamentos));
  }, [lancamentos]);

  //adiciona um lançamento novo e limpa o formulário
  function adicionar(data: LancamentoDados) {
    const novo = { ...data, id: Date.now().toString() };
    setLancamentos((prev: Lancamento[]) => [...prev, novo]);
    reset();
  }

  //remove um lançamento pelo id
  function remover(id: string) {
    setLancamentos((prev) => prev.filter((e) => e.id !== id));
  }

  //calcula o saldo a partir dos lançamentos: entradas somam e saídas subtraem
  const saldo = lancamentos.reduce((acc, item) => {
    if (item.tipo === 'Entrada') return acc + item.valor;
    return acc - item.valor;
  }, 0);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Gastos</h2>
      <div className="mb-4">
        <strong>Saldo total: </strong>R$ {saldo.toFixed(2)}
      </div>
      <form onSubmit={handleSubmit(adicionar)} className="max-w-md">
        <Campo label="Descrição" {...register('descricao')} />
        {errors.descricao && <p className="text-red-600">{errors.descricao.message}</p>}
        <Campo label="Valor" type="number" step="0.01" {...register('valor', { valueAsNumber: true })} />
        {errors.valor && <p className="text-red-600">{errors.valor.message}</p>}
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-semibold">Tipo</label>
          <select {...register('tipo')} className="border p-2 rounded">
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
        {errors.tipo && <p className="text-red-600">{errors.tipo.message}</p>}
        <Botao type="submit">Registrar</Botao>
      </form>

      <ul className="mt-6 space-y-2">
        {lancamentos.map((l) => (
          <li
            key={l.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <strong>{l.descricao}</strong> - {l.tipo} - R$ {l.valor.toFixed(2)}
            </div>
            <button
              onClick={() => remover(l.id)}
              className="text-red-600 hover:underline"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

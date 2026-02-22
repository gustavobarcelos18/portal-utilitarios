import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { tarefaSchema, TarefaDados } from '../schemas/tarefaSchema';
import Botao from '../components/Botao';
import Campo from '../components/Campo';

interface Tarefa extends TarefaDados {
  id: string;
}

export default function Tarefas() {
  // aqui uso useState para guardar a lista de tarefas
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // useForm com zodResolver para validar o formulário
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TarefaDados>({ resolver: zodResolver(tarefaSchema) });

  // carrego as tarefas do localStorage quando o componente monta
  useEffect(() => {
    const salva = localStorage.getItem('tarefas');
    if (salva) {
      setTarefas(JSON.parse(salva));
    }
  }, []);

  // quando tarefas mudar, salvo no localStorage para não perder
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  //função simples que adiciona uma tarefa usando os dados do formulário
  //criei um id e atualizei o estado com a nova tarefa
  function adicionar(data: TarefaDados) {
    const nova = { ...data, id: Date.now().toString() };
    setTarefas((prev: Tarefa[]) => [...prev, nova]);
    reset();
  }

  //fiz uma função básica que elimina uma tarefa filtrando o array pelo id
  function remover(id: string) {
    setTarefas((prev: Tarefa[]) => prev.filter((t: Tarefa) => t.id !== id));
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Tarefas</h2>
      <form onSubmit={handleSubmit(adicionar)} className="max-w-md">
        <Campo label="Título" {...register('titulo')} />
        {errors.titulo && <p className="text-red-600">{errors.titulo.message}</p>}
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-semibold">Categoria</label>
          <select
            {...register('categoria')}
            className="border p-2 rounded"
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>
        {errors.categoria && <p className="text-red-600">{errors.categoria.message}</p>}
        <Botao type="submit">Adicionar</Botao>
      </form>

      <ul className="mt-6 space-y-2">
        {tarefas.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <strong>{t.titulo}</strong> - <em>{t.categoria}</em>
            </div>
            <button
              onClick={() => remover(t.id)}
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

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contatoSchema, ContatoDados } from '../schemas/contatoSchema';
import Botao from '../componentes/Botao';
import Campo from '../componentes/Campo';

interface Contato extends ContatoDados {
  id: string;
}

export default function Contatos() {
  //estado com a lista de contatos
  const [contatos, setContatos] = useState<Contato[]>([]);

  //configuração do formulário com validação via Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContatoDados>({ resolver: zodResolver(contatoSchema) });

  //trazer contatos do localStorage no carregamento da página
  useEffect(() => {
    const salv = localStorage.getItem('contatos');
    if (salv) {
      setContatos(JSON.parse(salv));
    }
  }, []);

  //manter os contatos salvos sempre que mudar a lista
  useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(contatos));
  }, [contatos]);

  //adiciona um contato novo usando os dados do formulário
  function adicionar(data: ContatoDados) {
    const novo = { ...data, id: Date.now().toString() };
    setContatos((prev) => [...prev, novo]);
    reset();
  }

  //remove contato filtrando pelo id
  function remover(id: string) {
    setContatos((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Contatos</h2>
      <form onSubmit={handleSubmit(adicionar)} className="max-w-md">
        <Campo label="Nome completo" {...register('nome')} />
        {errors.nome && <p className="text-red-600">{errors.nome.message}</p>}
        <Campo label="E-mail" type="email" {...register('email')} />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <Campo label="Telefone" {...register('telefone')} />
        {errors.telefone && <p className="text-red-600">{errors.telefone.message}</p>}
        <Botao type="submit">Cadastrar</Botao>
      </form>

      <ul className="mt-6 space-y-2">
        {contatos.map((c) => (
          <li
            key={c.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <strong>{c.nome}</strong> - {c.email} - {c.telefone}
            </div>
            <button
              onClick={() => remover(c.id)}
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

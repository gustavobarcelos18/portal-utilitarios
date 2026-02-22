import { z } from 'zod';

// schema usado para validar o formulário de tarefas
// serve para o React Hook Form fazer as checagens automáticas
export const tarefaSchema = z.object({
  titulo: z.string().min(5, { message: 'Título deve ter ao menos 5 caracteres' }),
  categoria: z.enum(['Trabalho', 'Pessoal', 'Urgente'])
});

export type TarefaDados = z.infer<typeof tarefaSchema>;

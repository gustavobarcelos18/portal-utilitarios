import { z } from 'zod';

// validação para formulário de contatos
export const contatoSchema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  telefone: z.string().regex(/^[0-9]+$/, { message: 'Telefone deve conter apenas números' })
});

export type ContatoDados = z.infer<typeof contatoSchema>;

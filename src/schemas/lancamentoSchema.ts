import { z } from 'zod';

// schema para validar lançamentos de gastos
export const lancamentoSchema = z.object({
  descricao: z.string().min(1, { message: 'Descrição é obrigatória' }),
  valor: z.number().positive({ message: 'Valor deve ser maior que zero' }),
  tipo: z.enum(['Entrada', 'Saída'])
});

export type LancamentoDados = z.infer<typeof lancamentoSchema>;

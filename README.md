# Portal de Utilitários

Aplicação simples em React + TypeScript com Vite, Tailwind, React Hook Form, Zod e React Router. O portal oferece três módulos: Tarefas, Contatos e Gastos.

---
## Metodologias Ágeis

### Visão do Produto
O Portal de Utilitários reúne ferramentas básicas para organização pessoal e financeira, permitindo ao usuário adicionar tarefas, contatos e controlar gastos de forma rápida e acessível diretamente no navegador.

### User Stories (Tarefas)
1. **Como usuário, eu quero adicionar tarefas para que eu possa acompanhar o que preciso fazer.**
   - O formulário deve ter título e categoria.
   - O título precisa ter pelo menos 5 caracteres.
   - Tarefas são salvas no localStorage.

2. **Como usuário, eu quero ver a lista de tarefas cadastradas para que eu saiba minhas pendências.**
   - A lista deve mostrar título e categoria.
   - Deve ser possível remover uma tarefa.
   - Dados persistem no localStorage.

3. **Como usuário, eu quero remover tarefas que já fiz para manter a lista atualizada.**
   - Botão de remover presente em cada item.
   - Remoção atualiza o localStorage imediatamente.
   - Interface reflete a mudança sem recarregar a página.

4. **Como usuário, eu quero validação no formulário para evitar entradas inválidas.**
   - Zod e React Hook Form fazem a validação.
   - Mensagens de erro aparecem sob os campos.
   - Não permite submissão até corrigir.

5. **Como usuário, eu quero que as tarefas carreguem automaticamente ao abrir o portal.**
   - useEffect lê localStorage na montagem.
   - Estado inicial é baseado nos dados salvos.
   - Se não houver dados, começa vazio.

### Critérios de Aceitação
- Formulário de Tarefas deve possuir validação com Zod.
- Instâncias de tarefas geradas com `Date.now().toString()`.
- Estados sincronizados com localStorage via useEffect.
- Navbar visível em todos os momentos.
- Layout responsivo mínimo com Tailwind.

### Milestones
- **M1:** Configuração inicial com Vite, Tailwind e rotas básicas; página Home e Navbar funcionando; módulo de Tarefas com adição e listagem.
- **M2:** Finalizar validações, persistência no localStorage, criar módulos de Contatos e Gastos, ajustes de estilo e README com metodologias ágeis.

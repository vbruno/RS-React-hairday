# Hairday

Protótipo de interface para a agenda de uma barbearia. A tela reúne um formulário de agendamento e uma visão dos atendimentos por período do dia.

## O que explorar

- Seleção visual de horários e campos do formulário.
- Agenda organizada em manhã, tarde e noite.
- Página de componentes em `/list-components`.

**Estado do projeto:** os horários, a data e os clientes exibidos são exemplos fixos. O botão de agendar não grava atendimentos; ainda não há API ou persistência. O projeto demonstra a interface e seus componentes.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, React Router e componentes Radix UI.

## Executar localmente

Com Node.js e npm instalados:

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Outros comandos disponíveis:

```bash
npm run lint
npm run build
```

## Estrutura

- `src/Pages/PageHome.tsx`: tela principal da agenda.
- `src/Pages/PageComponents.tsx`: exemplos dos componentes.
- `src/components`: componentes de interface reutilizáveis.
- `src/styles`: estilos e tema.

## Autor

[Bruno S Velho](https://github.com/vbruno)

# Projeto2

# Projeto de Chat com Angular

Este é um projeto simples desenvolvido com Angular que permite ao usuário se identificar com um nickname e selecionar uma trilha. Esses dados são armazenados no `localStorage`, e em seguida, o usuário é direcionado para uma interface de chat com tópicos disponíveis. O projeto utiliza o **Angular Material** para estilização e o **json-server** para simular um backend.

## Funcionalidades

- **Cadastro de Usuário**: O usuário informa seu nickname e a trilha desejada.
- **Armazenamento Local**: Os dados do usuário (nickname e trilha) são armazenados no `localStorage` do navegador.
- **Exibição de Cartão**: Após a identificação, é exibido um cartão com as informações do usuário.
- **Menu Lateral (Aside)**: O menu exibe tópicos de chat (atualmente os botões não estão funcionais).
- **Chat Simulado**: O usuário pode participar de um chat, visualizar o histórico de mensagens e postar novos comentários usando as credenciais armazenadas.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento do frontend.
- **Angular Material**: Biblioteca de componentes visuais para a interface.
- **json-server**: Utilizado para simulação de um backend para o chat.

## Como Executar o Projeto

### Requisitos

- Node.js
- Angular CLI
- json-server

## Funcionalidades Futuras

- Implementação dos botões do menu lateral (tópicos do chat).
- Melhorias na interface do usuário.
- Integração com backend real para persistência dos dados do chat.


## Observação

- O arquivo db.json contém o modelo do banco de dados

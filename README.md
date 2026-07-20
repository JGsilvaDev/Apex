<div align="center">

# 🧠 Apex AI

### Seu assistente pessoal inspirado no Jarvis.

Uma Inteligência Artificial modular capaz de compreender comandos em linguagem natural, tomar decisões e executar ações no computador do usuário.

---

![Node](https://img.shields.io/badge/Node.js-22.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![NextJS](https://img.shields.io/badge/Next.js-15-black)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

# 📖 Sobre o Projeto

O **Apex** nasceu com o objetivo de criar um assistente virtual semelhante ao **Jarvis**, do universo Marvel.

Ao contrário de um chatbot convencional, o Apex foi projetado para ser uma plataforma de automação inteligente, capaz de:

- interpretar linguagem natural;
- compreender intenções;
- tomar decisões;
- executar ações reais no sistema operacional;
- crescer através de módulos independentes.

A arquitetura foi construída para permitir evolução contínua sem necessidade de reescrever o projeto.

No futuro o Apex deverá ser capaz de controlar aplicações, manipular arquivos, executar automações, conversar por voz, manter memória persistente e utilizar diferentes provedores de Inteligência Artificial.

---

# 🎯 Objetivos

O projeto possui cinco pilares principais.

- Inteligência
- Modularidade
- Escalabilidade
- Segurança
- Facilidade de expansão

Todo novo recurso deve seguir esses princípios.

---

# 🏗 Arquitetura Geral

O projeto é dividido em quatro módulos independentes.

```text
                         Usuário
                            │
                            ▼
                   ┌─────────────────┐
                   │    Apex Web     │
                   │   Interface UI  │
                   └────────┬────────┘
                            │ HTTP
                            ▼
                   ┌─────────────────┐
                   │    Apex API     │
                   │ Servidor Node   │
                   └────────┬────────┘
                            │
             importa bibliotecas compiladas
                            │
          ┌─────────────────┴──────────────────┐
          ▼                                    ▼
 ┌──────────────────────┐            ┌──────────────────────┐
 │      Apex Core       │            │     Apex Agent       │
 │ Inteligência da IA   │            │ Executor de ações    │
 │     (Biblioteca)     │            │     (Biblioteca)     │
 └──────────────────────┘            └──────────────────────┘
                            │
                            ▼
                  Sistema Operacional
```

---

# 🧩 Organização do Projeto

```text
Apex/

├── apex-web/
│
├── apex-api/
│
├── apex-core/
│
├── apex-agent/
│
└── README.md
```

Cada projeto possui uma responsabilidade única.

---

# 📦 apex-web

Responsável exclusivamente pela interface gráfica.

Tecnologias:

- Next.js
- React
- TypeScript
- TailwindCSS

Funções:

- Chat
- Histórico
- Painéis
- Configurações
- Comunicação com a API

O Frontend nunca conversa diretamente com o Core ou com o Agent.

Toda comunicação ocorre através da API.

---

# 📦 apex-api

É o servidor principal da aplicação.

Sua responsabilidade é coordenar todo o fluxo do Apex.

Recebe comandos do Frontend.

Chama o Apex Core.

Recebe a resposta.

Caso exista uma Action, envia ao Apex Agent.

Retorna a resposta final para o usuário.

A API é a única aplicação que conhece simultaneamente o Core e o Agent.

---

# 📦 apex-core

É o cérebro do Apex.

Responsável por toda lógica relacionada à Inteligência Artificial.

O Core:

- interpreta comandos;
- identifica intenções;
- escolhe Skills;
- monta respostas;
- gera Actions.

Importante:

O Core **não executa nenhuma ação**.

Ele apenas decide.

---

# 📦 apex-agent

É o executor.

Sua responsabilidade é transformar uma Action em uma alteração real no computador.

Exemplos:

- criar pastas;
- mover arquivos;
- abrir programas;
- apagar arquivos;
- executar comandos.

O Agent nunca interpreta linguagem natural.

Nunca conversa com IA.

Nunca toma decisões.

Ele apenas executa aquilo que recebeu.

---

# 🎯 Filosofia

O Apex segue um princípio simples.

> Quem pensa nunca executa.
>
> Quem executa nunca pensa.

Isso torna o projeto mais seguro, organizado e extremamente escalável.

Caso no futuro seja necessário substituir o modelo de IA, apenas o Core será alterado.

Caso seja necessário suportar Linux ou macOS, apenas o Agent precisará ser modificado.

Toda a comunicação permanecerá exatamente igual.

---

# 🚀 Fluxo Geral

```text
Usuário

↓

Frontend

↓

API

↓

Core

↓

Resposta + Action

↓

Agent

↓

Sistema Operacional

↓

Resposta

↓

Frontend
```

Este fluxo garante o desacoplamento completo entre a interface, a inteligência e a execução.

# 📂 Estrutura dos Projetos

Cada módulo do Apex possui uma responsabilidade específica e foi projetado para ser independente dos demais.

---

# 📦 apex-web

O **Apex Web** é responsável por toda a interface da aplicação.

Tecnologias utilizadas:

- Next.js
- React
- TypeScript
- TailwindCSS

Sua única responsabilidade é permitir que o usuário interaja com a IA.

Ele **não possui nenhuma regra de negócio** relacionada à Inteligência Artificial.

Toda comunicação acontece através da Apex API.

## Estrutura

```text
apex-web/

├── public/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── types/
│   └── utils/
│
├── package.json
└── tsconfig.json
```

---

### public/

Arquivos públicos da aplicação.

Exemplos:

- imagens
- ícones
- sons
- fontes
- logos

---

### app/

Rotas do Next.js.

Exemplo:

```text
app/

layout.tsx

page.tsx

chat/

settings/
```

É responsável por organizar todas as páginas da aplicação.

---

### components/

Todos os componentes reutilizáveis.

Exemplos:

```text
Chat

Sidebar

ActivityPanel

SystemPanel

CommandInput

Avatar

Message

Loading

Button
```

A regra é simples:

Sempre que um componente puder ser reutilizado, ele deve ficar aqui.

---

### hooks/

Hooks personalizados.

Exemplos:

```text
useChat()

useSpeech()

useSettings()

useTheme()
```

---

### services/

Toda comunicação com APIs externas.

Exemplo:

```ts
sendCommand()

getHistory()

healthCheck()
```

Nenhum componente deve realizar chamadas HTTP diretamente.

Toda comunicação deve passar pelos Services.

---

### styles/

Arquivos globais de estilo.

Exemplo:

```text
globals.css

animations.css

theme.css
```

---

### types/

Interfaces compartilhadas do Frontend.

Exemplo:

```ts
ChatMessage

CommandResponse

UserSettings

Conversation
```

---

### utils/

Funções auxiliares.

Exemplo:

- formatadores
- helpers
- constantes
- validações

---

# 📦 apex-api

A API é o coração da aplicação.

Ela é responsável por coordenar toda comunicação entre os módulos.

Fluxo:

```text
Frontend

↓

API

↓

Core

↓

Agent

↓

Resposta
```

## Estrutura

```text
apex-api/

src/

controllers/

routes/

services/

middlewares/

types/

utils/

server.ts
```

---

### server.ts

Ponto inicial da aplicação.

Responsável por:

- iniciar servidor
- configurar middlewares
- registrar rotas

---

### routes/

Define todas as rotas HTTP.

Exemplo:

```text
POST /think

GET /health

GET /history
```

---

### controllers/

Recebem as requisições.

Validam dados.

Chamam os serviços.

Nunca implementam regras de negócio.

---

### services/

Contém toda lógica da API.

Exemplo:

```text
ChatService

CoreService

AgentService
```

Esses serviços fazem a ponte entre a API e as bibliotecas.

---

### middlewares/

Middlewares do Express.

Exemplo:

- autenticação
- logs
- tratamento de erros
- CORS

---

### types/

Interfaces internas da API.

---

### utils/

Funções auxiliares da API.

---

# 📦 apex-core

O Apex Core representa toda a inteligência da IA.

Ele é distribuído como uma biblioteca compilada.

A API importa essa biblioteca para interpretar comandos.

## Estrutura

```text
apex-core/

src/

skills/

prompts/

services/

parser/

types/

utils/

index.ts
```

---

### index.ts

Ponto de entrada da biblioteca.

Expõe as funções públicas utilizadas pela API.

Exemplo:

```ts
think(command)
```

---

### skills/

As Skills representam os conhecimentos da IA.

Cada Skill conhece um domínio específico.

Exemplos:

```text
folderSkill

fileSkill

calendarSkill

musicSkill

systemSkill
```

Adicionar uma nova Skill significa ensinar um novo conhecimento ao Apex.

---

### prompts/

Prompts enviados ao modelo de IA.

Esses arquivos definem:

- personalidade
- comportamento
- regras
- exemplos

Alterar um Prompt modifica o comportamento da IA sem alterar código.

---

### parser/

Responsável por transformar linguagem natural em dados estruturados.

Exemplo:

Entrada:

```text
Crie uma pasta chamada Fotos nos documentos
```

Saída:

```json
{
    "type":"CREATE_FOLDER",
    "path":"Documents",
    "name":"Fotos"
}
```

É aqui que ocorre toda interpretação semântica dos comandos.

---

### services/

Serviços internos utilizados pelo Core.

Exemplo:

- OpenAI
- Ollama
- Parser
- Memory
- Skill Loader

---

### types/

Interfaces compartilhadas do Core.

---

### utils/

Funções auxiliares.

---

# 📦 apex-agent

O Apex Agent também é uma biblioteca.

Sua única responsabilidade é executar ações no computador.

Ele nunca interpreta texto.

Nunca conversa com IA.

Nunca decide.

## Estrutura

```text
apex-agent/

src/

actions/

filesystem/

executors/

types/

utils/

index.ts
```

---

### index.ts

Ponto de entrada da biblioteca.

Recebe uma Action e decide qual executor utilizar.

---

### actions/

Cada arquivo representa uma ação possível.

Exemplo:

```text
createFolder.ts

deleteFolder.ts

renameFolder.ts

copyFile.ts

moveFile.ts

openProgram.ts
```

Adicionar um arquivo nesta pasta significa ensinar uma nova capacidade ao computador.

---

### filesystem/

Responsável por localizar diretórios conhecidos.

Exemplo:

```text
Desktop

Documents

Downloads

Pictures

Music

Videos
```

Assim a IA nunca precisa conhecer caminhos absolutos.

Ela trabalha apenas com nomes lógicos.

---

### executors/

Executores responsáveis por realizar operações específicas.

Exemplo:

```text
FileExecutor

ProgramExecutor

CommandExecutor
```

---

### types/

Interfaces compartilhadas.

---

### utils/

Funções auxiliares.

---

# 🔄 Dependência entre os módulos

A comunicação ocorre sempre na mesma direção.

```text
Apex Web

↓

Apex API

↓

Apex Core

↓

Apex Agent

↓

Sistema Operacional
```

Nenhum módulo conhece quem está acima dele.

Isso reduz o acoplamento e facilita futuras alterações na arquitetura.

---

# 📚 Bibliotecas Compiladas

Atualmente, apenas dois módulos são executados durante o desenvolvimento:

- Apex Web
- Apex API

Os módulos abaixo são compilados e utilizados como bibliotecas:

- Apex Core
- Apex Agent

Sempre que houver alterações nesses projetos, é necessário gerar uma nova versão compilada utilizando:

```bash
npm run build
```

A API utilizará automaticamente a versão atualizada da biblioteca.

# 🧠 Como o Apex Funciona

O Apex foi projetado seguindo uma arquitetura em camadas, onde cada módulo possui uma responsabilidade específica.

Durante uma conversa, o comando do usuário percorre várias etapas até ser transformado em uma ação executável.

Todo esse processo acontece automaticamente.

---

# Fluxo Geral

```text
Usuário

↓

Apex Web

↓

Apex API

↓

Apex Core

↓

Parser

↓

Skills

↓

Resposta + Action

↓

Apex Agent

↓

Sistema Operacional

↓

Resposta Final

↓

Frontend
```

---

# Etapa 1 - Entrada do Usuário

Tudo começa quando o usuário envia uma mensagem pelo chat.

Exemplo:

```text
Apex, crie uma pasta chamada Projetos nos documentos
```

O Frontend envia esse comando para a API.

Exemplo:

```http
POST /think
```

```json
{
    "command": "Apex, crie uma pasta chamada Projetos nos documentos"
}
```

Neste momento o Frontend não tenta interpretar absolutamente nada.

Ele apenas envia o texto.

---

# Etapa 2 - Apex API

A API recebe o comando.

Ela atua apenas como uma orquestradora.

Suas responsabilidades são:

- validar a requisição;
- encaminhar o comando ao Apex Core;
- receber a resposta;
- verificar se existe alguma Action;
- executar a Action utilizando o Apex Agent;
- devolver o resultado ao Frontend.

A API nunca interpreta linguagem natural.

---

# Etapa 3 - Apex Core

O Core é responsável pela inteligência da aplicação.

Ao receber um comando, ele inicia o processo de interpretação.

Exemplo:

```text
Apex, crie uma pasta chamada Projetos nos documentos
```

Primeiramente ocorre uma análise da intenção do usuário.

O objetivo é responder perguntas como:

- O usuário quer conversar?
- O usuário deseja executar alguma ação?
- Existe alguma Skill capaz de resolver esse problema?

Caso nenhuma Skill seja encontrada, o Core responde normalmente utilizando o modelo de IA.

Caso exista uma Skill compatível, ela será utilizada.

---

# Etapa 4 - Parser

Depois de identificar a intenção, o Parser extrai todas as informações necessárias.

Entrada:

```text
Crie uma pasta chamada Projetos nos documentos
```

Saída:

```json
{
    "intent": "CREATE_FOLDER",
    "name": "Projetos",
    "location": "Documents"
}
```

Observe que o Parser transforma linguagem natural em dados estruturados.

Esse processo evita que o Agent precise interpretar texto.

---

# Etapa 5 - Skills

As Skills representam o conhecimento do Apex.

Cada Skill conhece apenas um assunto.

Exemplos:

```text
Folder Skill
```

Responsável por:

- criar pastas
- mover pastas
- excluir pastas

---

```text
File Skill
```

Responsável por:

- criar arquivos
- mover arquivos
- copiar arquivos

---

```text
Calendar Skill
```

Responsável por:

- eventos
- lembretes
- compromissos

---

```text
Music Skill
```

Responsável por:

- Spotify
- YouTube Music
- mídia local

Cada Skill possui:

- palavras-chave
- exemplos
- regras
- parser específico
- gerador de Action

Isso permite adicionar novas funcionalidades sem alterar o restante do projeto.

---

# Etapa 6 - Geração da Action

Após interpretar corretamente o comando, o Core gera uma Action.

Exemplo:

```json
{
    "response": "Claro! Vou criar essa pasta para você.",
    "action": {
        "type": "CREATE_FOLDER",
        "path": "Documents",
        "name": "Projetos"
    }
}
```

Observe que o Core ainda não executou nenhuma operação.

Ele apenas informou o que deve ser feito.

---

# Etapa 7 - Apex Agent

A API recebe a Action.

Em seguida ela chama o Apex Agent.

Exemplo:

```ts
execute(action)
```

O Agent identifica o tipo da Action.

```text
CREATE_FOLDER
```

Procura o executor correspondente.

```text
createFolder.ts
```

Traduz o caminho lógico.

```text
Documents

↓

C:\Users\João\Documents
```

Executa:

```text
mkdir Projetos
```

Retorna:

```json
{
    "success": true
}
```

---

# Etapa 8 - Resposta Final

A API combina duas informações:

Resposta do Core.

```text
Pasta criada com sucesso.
```

Resultado do Agent.

```json
{
    "success": true
}
```

E envia ao Frontend.

O usuário recebe apenas a resposta final.

---

# Exemplo Completo

```text
Usuário

↓

"Apex, crie uma pasta chamada Fotos"

↓

Frontend

↓

POST /think

↓

API

↓

Core

↓

Parser

↓

Folder Skill

↓

Action

{
    type: CREATE_FOLDER,
    path: Documents,
    name: Fotos
}

↓

API

↓

Agent

↓

createFolder()

↓

Windows

↓

mkdir Fotos

↓

Resultado

↓

API

↓

Frontend

↓

"Pasta criada com sucesso."
```

---

# Separação de Responsabilidades

Cada módulo possui uma responsabilidade única.

| Módulo | Responsabilidade |
|---------|------------------|
| Apex Web | Interface com o usuário |
| Apex API | Coordenação do fluxo |
| Apex Core | Inteligência da aplicação |
| Parser | Estruturar linguagem natural |
| Skills | Conhecimento especializado |
| Apex Agent | Executar ações |
| Sistema Operacional | Realizar alterações reais |

Essa divisão torna o projeto altamente desacoplado e facilita sua evolução.

---

# Por que essa arquitetura?

Separar inteligência da execução traz diversas vantagens:

- maior segurança;
- código mais organizado;
- fácil manutenção;
- possibilidade de trocar o modelo de IA sem alterar o restante do sistema;
- suporte futuro para diferentes sistemas operacionais;
- facilidade para criar novas Skills e Actions.

---

# Evolução Futura

A arquitetura foi planejada para crescer sem grandes refatorações.

Novos recursos poderão ser adicionados, como:

- memória persistente;
- execução de tarefas em segundo plano;
- múltiplos agentes especializados;
- controle de dispositivos IoT;
- comandos por voz;
- reconhecimento de contexto;
- plugins de terceiros;
- integração com APIs externas;
- automações programadas.

Todos esses recursos poderão reutilizar a mesma arquitetura atual, mantendo o fluxo de comunicação entre Web, API, Core e Agent.

# 👨‍💻 Guia de Desenvolvimento

Esta seção descreve como adicionar novas funcionalidades ao Apex mantendo a arquitetura modular do projeto.

Antes de implementar qualquer recurso, é importante compreender a filosofia do projeto.

> O Apex é dividido em módulos independentes.
>
> A Inteligência (Core) decide o que deve ser feito.
>
> O Executor (Agent) realiza a ação.
>
> A API apenas coordena a comunicação entre ambos.

Seguindo esse princípio, novas funcionalidades podem ser adicionadas sem alterar a arquitetura existente.

---

# 📚 Como adicionar uma nova Skill

Uma **Skill** representa um conhecimento da IA.

Ela ensina o Apex a compreender um determinado tipo de comando.

Exemplos:

- Pastas
- Arquivos
- Música
- Calendário
- Windows
- Navegador
- Outlook
- WhatsApp

Cada Skill conhece apenas o seu domínio.

---

## Estrutura

```text
apex-core/

src/

skills/

folder/

calendar/

music/

system/
```

Cada pasta pode conter:

```text
folder/

index.ts

examples.ts

keywords.ts

parser.ts

prompt.ts
```

Essa separação facilita a manutenção e evita arquivos muito grandes.

---

## Responsabilidades de uma Skill

Uma Skill deve ser capaz de:

- identificar comandos relacionados ao seu domínio;
- extrair informações relevantes;
- validar os dados;
- gerar uma Action quando necessário;
- responder ao usuário.

Ela nunca executa ações diretamente.

---

## Exemplo

Comando:

```text
Crie uma pasta chamada Fotos.
```

A Folder Skill poderá gerar:

```json
{
    "type":"CREATE_FOLDER",
    "name":"Fotos",
    "path":"Documents"
}
```

---

# 🧠 Skill Registry

O Apex utiliza um registro de Skills.

Sempre que um comando chega ao Core, todas as Skills registradas podem ser avaliadas.

Fluxo:

```text
Comando

↓

Skill Registry

↓

Folder Skill

Calendar Skill

Music Skill

System Skill

↓

Skill compatível

↓

Parser

↓

Action
```

Adicionar uma nova Skill significa apenas registrá-la no Core.

Nenhum outro módulo precisa ser alterado.

---

# 📝 Como adicionar um novo Parser

O Parser é responsável por transformar linguagem natural em dados estruturados.

Entrada:

```text
Abra o Bloco de Notas
```

Saída:

```json
{
    "type":"OPEN_PROGRAM",
    "program":"notepad"
}
```

Cada Skill pode possuir seu próprio Parser, especializado no seu domínio.

---

# ⚙️ Como adicionar uma nova Action

Uma Action representa uma operação que poderá ser executada pelo Agent.

Exemplo:

```text
CREATE_FOLDER

DELETE_FILE

OPEN_PROGRAM

MOVE_FILE

COPY_FILE
```

As Actions devem ser descritas através de interfaces ou tipos compartilhados.

Exemplo:

```ts
interface Action {
    type: string;
}
```

Cada novo tipo de Action deve possuir um executor correspondente.

---

# 📂 Criando um Executor

O Apex Agent utiliza executores para realizar ações específicas.

Estrutura:

```text
executors/

FileExecutor

ProgramExecutor

SystemExecutor
```

Cada executor conhece apenas o seu domínio.

Exemplo:

```text
ProgramExecutor

↓

OPEN_PROGRAM

CLOSE_PROGRAM

RESTART_PROGRAM
```

---

# 📦 Criando uma nova Action

Exemplo:

```
OPEN_BROWSER
```

Criar:

```text
actions/

openBrowser.ts
```

Registrar no Executor correspondente.

Após isso o Core poderá começar a gerar esse tipo de Action.

---

# 🔗 Fluxo para adicionar uma funcionalidade

Sempre que uma nova funcionalidade for criada, o fluxo deverá seguir esta ordem.

```text
1

Criar uma Skill

↓

2

Criar Parser

↓

3

Criar Action

↓

4

Criar Executor

↓

5

Registrar Executor

↓

6

Gerar Build

↓

7

Testar via API
```

---

# 🧪 Testes

Toda nova Skill deve ser validada utilizando exemplos reais.

Exemplos positivos:

```text
Crie uma pasta chamada Fotos

Crie uma pasta chamada Projetos

Faça uma pasta chamada Backup
```

Exemplos negativos:

```text
Qual a capital da França?

Que horas são?

Quem descobriu o Brasil?
```

A Skill deve responder apenas aos comandos do seu domínio.

---

# 📋 Convenções do Projeto

Para manter a consistência do código, siga estas convenções.

## Nomes de arquivos

Utilizar sempre:

```text
camelCase
```

Exemplo:

```text
createFolder.ts

moveFile.ts

openBrowser.ts
```

---

## Classes

Utilizar:

```text
PascalCase
```

Exemplo:

```text
FolderSkill

ProgramExecutor

ChatService
```

---

## Interfaces

Sempre utilizar:

```text
PascalCase
```

Exemplo:

```text
Action

Command

Skill

Response
```

---

## Actions

Sempre utilizar:

```text
SCREAMING_SNAKE_CASE
```

Exemplo:

```text
CREATE_FOLDER

MOVE_FILE

DELETE_FILE

OPEN_PROGRAM
```

---

# 📖 Boas Práticas

Ao desenvolver novas funcionalidades, procure seguir estas recomendações.

✅ Cada arquivo deve possuir apenas uma responsabilidade.

✅ Evite lógica duplicada.

✅ Utilize funções pequenas.

✅ Nunca faça o Agent interpretar linguagem natural.

✅ Nunca permita que o Core execute alterações no sistema operacional.

✅ Sempre valide parâmetros antes da execução.

✅ Sempre retorne erros descritivos.

✅ Mantenha os módulos desacoplados.

---

# 🚫 O que evitar

Evite criar dependências diretas entre módulos.

Exemplo incorreto:

```text
Frontend

↓

Agent
```

O Frontend nunca deve conversar diretamente com o Agent.

Outro exemplo incorreto:

```text
Agent

↓

OpenAI
```

O Agent nunca deve utilizar IA.

Toda inteligência pertence ao Apex Core.

---

# 💡 Futuras Evoluções

A arquitetura foi planejada para permitir a criação de novas categorias de Skills sem alterações estruturais.

Exemplos:

- Agenda
- Outlook
- Spotify
- WhatsApp
- Navegador
- Windows
- Docker
- Git
- GitHub
- Banco de Dados
- IoT
- Home Assistant
- Zigbee
- MCP
- Memória Persistente
- Agentes Especializados

Todas essas funcionalidades podem reutilizar a mesma arquitetura atual, mantendo a separação entre Inteligência, API e Execução.

# 🚀 Instalação e Execução

Esta seção descreve como configurar o ambiente de desenvolvimento do Apex.

---

# 📋 Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir as seguintes ferramentas instaladas.

| Ferramenta | Versão Recomendada |
|------------|--------------------|
| Node.js | 22.x ou superior |
| npm | 10.x ou superior |
| Git | Última versão |
| Visual Studio Code | Recomendado |

---

# 📥 Clonando o Projeto

```bash
git clone https://github.com/SEU-USUARIO/Apex.git

cd Apex
```

---

# 📦 Instalação das Dependências

Cada projeto possui suas próprias dependências.

Execute o comando abaixo em cada módulo.

```bash
npm install
```

Estrutura:

```text
Apex/

├── apex-web/
├── apex-api/
├── apex-core/
└── apex-agent/
```

---

# 🔨 Compilando as Bibliotecas

O **Apex Core** e o **Apex Agent** funcionam como bibliotecas utilizadas pela API.

Sempre que houver alterações nesses projetos, é necessário recompilar seus arquivos.

## Apex Core

```bash
cd apex-core

npm run build
```

---

## Apex Agent

```bash
cd apex-agent

npm run build
```

Após o build, a Apex API utilizará automaticamente a versão compilada mais recente.

---

# ▶️ Executando a API

Após compilar as bibliotecas, inicie a API.

```bash
cd apex-api

npm run dev
```

Por padrão, a API estará disponível em:

```text
http://localhost:4000
```

---

# ▶️ Executando o Frontend

Em outro terminal, inicie o Frontend.

```bash
cd apex-web

npm run dev
```

Por padrão:

```text
http://localhost:3000
```

---

# 📌 Ordem Recomendada

Sempre utilize a seguinte sequência.

```text
1.
npm install

↓

2.
Build Apex Core

↓

3.
Build Apex Agent

↓

4.
Iniciar Apex API

↓

5.
Iniciar Apex Web
```

---

# 🔄 Fluxo de Desenvolvimento

Durante o desenvolvimento, nem todos os projetos precisam permanecer em execução.

## Projetos em execução

- Apex API
- Apex Web

## Projetos compilados

- Apex Core
- Apex Agent

Sempre que houver modificações no Core ou no Agent:

```text
Alteração

↓

npm run build

↓

API passa a utilizar a nova versão compilada
```

Não é necessário manter o Core ou o Agent executando durante o desenvolvimento.

---

# 📡 Fluxo Completo da Aplicação

```text
Usuário

↓

Apex Web

↓

HTTP

↓

Apex API

↓

Apex Core (Biblioteca)

↓

Resposta + Action

↓

Apex Agent (Biblioteca)

↓

Sistema Operacional

↓

Resultado

↓

Apex API

↓

Apex Web
```

---

# 📂 Estrutura Recomendada do Workspace

```text
Apex/

├── apex-web/
├── apex-api/
├── apex-core/
├── apex-agent/
├── README.md
└── .gitignore
```

Cada projeto deve possuir seu próprio:

- package.json
- tsconfig.json
- node_modules

---

# ⚠️ Sempre que devo executar o Build?

Execute o build apenas quando modificar arquivos do:

- apex-core
- apex-agent

Alterações apenas no:

- apex-web
- apex-api

não exigem recompilar as bibliotecas.

---

# 🐞 Solução de Problemas

## Alterações no Core não aparecem

Verifique se o build foi executado.

```bash
npm run build
```

---

## Alterações no Agent não são executadas

Compile novamente o projeto.

```bash
npm run build
```

---

## API não inicia

Verifique se:

- as dependências foram instaladas;
- as bibliotecas foram compiladas;
- a porta utilizada está disponível.

---

## Frontend não consegue se comunicar com a API

Verifique:

- se a API está em execução;
- se a URL configurada está correta;
- se não há bloqueios de firewall ou proxy.

---

# 📌 Ambiente de Desenvolvimento

Durante o desenvolvimento, normalmente apenas dois terminais permanecem abertos.

```text
Terminal 1

Apex API

npm run dev
```

```text
Terminal 2

Apex Web

npm run dev
```

Sempre que modificar o Core ou o Agent, basta abrir um terminal temporário, executar:

```bash
npm run build
```

e continuar o desenvolvimento normalmente.

Essa abordagem reduz o consumo de recursos e mantém o ambiente de desenvolvimento mais simples.

# 🛣️ Roadmap

O Apex está em constante evolução.

Abaixo estão listadas as funcionalidades já implementadas e as próximas etapas previstas para o projeto.

---

## ✅ Estrutura Base

- [x] Arquitetura modular
- [x] Separação entre Web, API, Core e Agent
- [x] Comunicação entre módulos
- [x] Parser inicial
- [x] Sistema de Skills
- [x] Sistema de Actions
- [x] Criação de pastas
- [x] Comunicação via linguagem natural

---

## 🚧 Próximas Funcionalidades

### Sistema de Arquivos

- [ ] Criar arquivos
- [ ] Excluir arquivos
- [ ] Renomear arquivos
- [ ] Copiar arquivos
- [ ] Mover arquivos
- [ ] Buscar arquivos
- [ ] Compactar arquivos

---

### Sistema Operacional

- [ ] Abrir programas
- [ ] Encerrar programas
- [ ] Reiniciar programas
- [ ] Executar comandos
- [ ] Captura de tela
- [ ] Controle da área de transferência

---

### Inteligência Artificial

- [ ] Melhor compreensão de linguagem natural
- [ ] Contexto entre mensagens
- [ ] Memória persistente
- [ ] Histórico inteligente
- [ ] Sugestões automáticas
- [ ] Personalização de comportamento

---

### Interface

- [ ] Histórico de conversas
- [ ] Painel de atividades
- [ ] Configurações
- [ ] Dashboard
- [ ] Temas
- [ ] Avatar da IA
- [ ] Animações

---

### Voz

- [ ] Reconhecimento de voz
- [ ] Síntese de voz
- [ ] Palavra de ativação ("Apex")
- [ ] Conversação por voz

---

### Integrações

- [ ] Outlook
- [ ] Google Calendar
- [ ] Spotify
- [ ] GitHub
- [ ] Docker
- [ ] Home Assistant
- [ ] APIs externas

---

# 🛠️ Tecnologias Utilizadas

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

---

## Backend

- Node.js
- TypeScript

---

## Inteligência Artificial

- OpenAI API

---

## Ferramentas

- Git
- npm

---

# 📁 Estrutura Final do Projeto

```text
Apex/

├── apex-web/
│
├── apex-api/
│
├── apex-core/
│
├── apex-agent/
│
├── .gitignore
│
└── README.md
```

---

# 🤝 Contribuindo

Contribuições são bem-vindas.

Caso deseje colaborar com o projeto:

1. Faça um Fork do repositório.
2. Crie uma nova branch.

```bash
git checkout -b feature/minha-feature
```

3. Realize suas alterações.

4. Faça o commit.

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie para seu repositório.

```bash
git push origin feature/minha-feature
```

6. Abra um Pull Request.

---

# 📐 Princípios do Projeto

Todo novo recurso deve seguir os seguintes princípios.

- Separação de responsabilidades.
- Código reutilizável.
- Baixo acoplamento.
- Alta coesão.
- Facilidade de manutenção.
- Escalabilidade.
- Clareza na comunicação entre módulos.

---

# 🔒 Segurança

O Apex foi projetado para separar completamente a inteligência da execução.

Essa arquitetura reduz riscos ao impedir que o módulo responsável pela interpretação dos comandos realize alterações diretamente no sistema operacional.

Toda ação executável deve passar obrigatoriamente pelo fluxo:

```text
Usuário
    │
    ▼
Apex Web
    │
    ▼
Apex API
    │
    ▼
Apex Core
    │
    ▼
Action
    │
    ▼
Apex Agent
    │
    ▼
Sistema Operacional
```

Essa separação facilita auditorias, testes e futuras implementações de mecanismos de autorização e confirmação antes da execução de ações críticas.

---

# 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.

---

# ⭐ Considerações Finais

O Apex foi concebido para ser mais do que um chatbot.

Sua arquitetura modular permite que novas capacidades sejam adicionadas sem alterar a estrutura principal do projeto, mantendo a separação entre interface, inteligência e execução.

À medida que o projeto evoluir, novos módulos, integrações e recursos poderão ser incorporados preservando a mesma filosofia de desenvolvimento.

Este README tem como objetivo servir como referência para desenvolvedores, colaboradores e para a manutenção futura do projeto, documentando sua arquitetura, organização e fluxo de funcionamento.

---

<div align="center">

## Apex AI

**Seu assistente pessoal inspirado no Jarvis.**

Desenvolvido utilizando Node.js, TypeScript e Next.js.

</div>

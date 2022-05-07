# API para aplicação de controle de estoque
> Criada com TypeORM + Express

## Propósito
Esta API está sendo desenvolvida com o intuito de aprimorar meus estudos em back-end com Node.js e servir ao front-end da aplicação de controle de estoque que estou desenvolvendo com Next.js.

<a target="_blank" href="https://github.com/daniloflorenzano/inventario-front-nextjs">Repositório do Front-end</a>

## Rotas
> Todas as rotas são protegidas por **autenticação** via JWT

### GET
- **/item** - busca todos os itens cadastrados
- **/item/:codigoItem** - busca o item pelo código passado
- **/usuario** - busca todos os usuários cadastrados (exceto o campo "senha")
- **/usuario/:id** - busca o usuários por id

### POST
- **/item** - cadastra novo item  
>Campos:  
**descricao**: string - obrigatório   
**local**: string  - obrigatório  
**estado**: string - aceita: "bom", "gasto" e "necessário troca" - obrigatório  
**codigo**: number - obrigatório  
**observacao**: string - opcional

- **/usuario** : cadastra novo usuário
> Campos
**nome**: string - obrigatório  
**sobrenome**: string  - obrigatório  
**email**: string  - obrigatório  
**senha**: string  - obrigatório  
**admin**: boolean - obrigatório  

### PUT
- **/item/:id** - atualiza campo(s) do item por id
- **/usuario/:id** - atualiza campo(s) do usuario por id

### DELETE
- **/item/:id** - deleta item por id
- **/usuario/:id** - deleta usuario por id

## Erros tratados
- 400: Item com codigo já cadastrado
- 400: Usuário já cadastrado
- 400: O campo *"x"* não pode estar em branco
- 404: Item não encontrado
- 404: Usuário não encontrado
- 404: Formato de ID inválido
- 401: Não autorizado

## Autor
Entre em contato!
- <a target="_blank" href="https://www.linkedin.com/in/daniloflorenzano/">Linkedin</a>

Veja meu currículo:
- <a target="_blank" href="https://cvkeep.com/cv/daniloflorenzano">Cv Keep</a>
# 🎬 API Bolaños

Esta API fornece informações sobre os episódios de Chave e Chapolin.

> 🚀 **Base URL em Produção:**  
> `https://api-bolanos.vercel.app/`

## Sumário

  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Como Usar](#-como-usar)
    - [Endpoints](#endpoints)
    - [Exemplo de requisição](#exemplo-de-requisição)
  - [Roadmap e Melhorias Futuras](#roadmap-e-melhorias-futuras)
  - [Contribua](#contribua)
  - [Disclaimer](#disclaimer)
  - [Licença](#licença)


## Tecnologias utilizadas

* **Node.js** (ES Modules)
* **Vercel Serverless Functions** (Edge Delivery & Cache)
* **REST Architecture**

## Como usar

Todas as respostas são retornadas em formato `JSON` com suporte nativo a CORS e cache em CDN.

### Endpoints

Para acessar às informações, realize requisições para os endpoints abaixo:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/episodios/:slug` | Lista todos os episódios disponíveis da série (`chaves` ou `chapolin`) |
| `GET` | `/api/episodios/:slug/search?q=:termo` | Busca episódio por título ou resumo |

### Exemplo de requisição

Busca todos os episódios de Chaves
GET [https://api-bolanos.vercel.app/api/episodios/chaves](https://api-bolanos.vercel.app/api/episodios/chaves)

Busca episódios de Chapolin que estão relacionados ao termo "fantasma"
GET [https://api-bolanos.vercel.app/api/episodios/chapolin/search?q=fantasmas](https://api-bolanos.vercel.app/api/episodios/chapolin/search?q=fantasmas)

## Roadmap e Melhorias Futuras

Estamos planejando para este projeto:

- **Tratamento Padronizado de Erros**: fornecendo respostas mais amigáveis e consistentes na API.
- **Rate limiting**: possibilitando manter o sistema estável e evitando abusos.
- **Autenticação e autorização**: garantindo que o acesso seja somente à usuários cadastrados.

## Contribua

Contribuições são sempre bem-vindas! Se você gostaria de contribuir com este projeto, por favor, siga os seguintes passos:

1. **Fork** o repositório no GitHub.
2. **Clone** o projeto para sua própria máquina.
3. **Crie uma branch** onde você fará suas mudanças.
4. **Faça suas alterações** e faça commit delas com mensagens de commit explicativas.
5. **Envie** suas mudanças para o branch.
6. **Envie um pull request** para que possamos revisar suas alterações e mesclar ao branch principal.

### Antes de enviar um Pull Request, por favor, certifique-se de:

- Seguir o estilo de código padrão do projeto.
- Incluir testes unitários ou de integração para quaisquer novas funcionalidades ou correções de bugs.
- Atualizar a documentação conforme necessário.
- Verificar se todos os testes existentes ainda estão passando.

Agradecemos antecipadamente pela sua contribuição, e esperamos melhorar este projeto com a sua ajuda!

## Disclaimer

Este projeto é puramente para fins didáticos e não deve ser usado comercialmente.

"Chaves", "Chapolin" e todos os personagens relacionados são marcas registradas pertencentes aos seus respectivos proprietários. 

A criação desta API não tem a intenção de infringir quaisquer direitos de propriedade intelectual e é feita por fãs para fãs sob a política de uso justo.

## Licença

Este projeto está licenciado sob a Licença MIT.

Resumo da Licença MIT:

Você pode usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software. O software é fornecido "COMO ESTÁ", sem garantia de qualquer tipo. Para mais informações, leia a licença completa.

Lembrando que, enquanto esta licença permite o uso técnico e a modificação do código-fonte, os termos do uso justo e os direitos de propriedade intelectual relacionados ao conteúdo de "Chaves" e "Chapolin" não são cobertos pela licença MIT e permanecem com seus respectivos proprietários.
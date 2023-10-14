# MySoil - API

Essa API faz parte da solução do time Yapuhcakip para o Hackathon CPAmazônia - Desafio SERPRO. A api foi feita com Node.js + Express e seu banco de dados está hospedado no firebase.

### Para rodar a aplicação na sua máquina local, rode o seguinte comando:

    npm install

### Ou se preferir, acessa a URL base através de seu ApiClient preferido:

    https://api-mysoil.onrender.com

### Endpoints

- ### Informations

`POST /informations`
Rota utilizada para criar uma informação:

#### Request

```json
{
  "category": "Categoria 1",
  "title": "Título 1",
  "text": "Texto da Informação 1 ...",
  "img": "http://link-da-sua-imagem.jpeg"
}
```

#### Response

```json
{
  "message": "Informação criada com sucesso"
}
```

`GET /informations`
Rota que fornece a lista de informações disponíveis no banco:

#### Response

```json
[
  {
    "createdAt": 169725059548,
    "category": "Categoria 1",
    "title": "Título 1",
    "text": "Texto da Informação 1 ...",
    "img": "http://link-da-sua-imagem.jpeg",
    "uid": "JhystSadasDpouZ"
  },
  {
    "createdAt": 169725059548,
    "category": "Categoria 2",
    "title": "Título 2",
    "text": "Texto da Informação 2 ...",
    "img": "http://link-da-sua-imagem2.jpeg",
    "uid": "JhystSadasDpouZ"
  }
]
```

(A chave "createdAt" diz respeito ao timestamp da hora em que a informação foi criada)

`GET /informations/:id`
Rota para recuperar uma informação específica:

#### Response

```json
{
  "id": "JhystSadasDpouZ",
  "data": {
    "img": "http://link-da-sua-imagem2.jpeg",
    "text": "Texto da Informação 2 ...",
    "title": "Título 2",
    "category": "Categoria 2"
  }
}
```

`PATCH /informations/:id`
Rota para editar uma informação específica:

#### Request

```json
{
  "title": "Título 2 - Editado"
}
```

#### Response

```json
{
  "id": "JhystSadasDpouZ",
  "data": {
    "img": "http://link-da-sua-imagem2.jpeg",
    "text": "Texto da Informação 2 ...",
    "title": "Título 2",
    "category": "Categoria 2"
  }
}
```

`DELETE /informations/:id`
Rota para deletar uma informação específica:

#### Response

    No body returned for response

- ### Cultivations

`POST /cultivation`
Rota para a criação de um Plano de Cultivo:

#### Request

```json
{
  "area": "200 Ha",
  "crops": ["Arroz", "Feijão", "Trigo"],
  "rotation": ["Feijão", "Trigo", "Arroz"],
  "managementMethods": ["Compostagem", "Plantio Direto"],
  "importantDates": {
    "planting": "2023-10-20",
    "harvest": "2024-06-20"
  },
  "fertilization": "2024-01-20"
}
```

#### Response

```json
{
  "message": "Plano de cultivo criado com sucesso!"
}
```

`GET /cultivation`
Rota para listar os planos de cultivo do usuário:

#### Response

```json
[
  {
    "createdAt": 169722512133,
    "area": "200 Ha",
    "crops": ["Arroz", "Feijão", "Trigo"],
    "rotation": ["Feijão", "Trigo", "Arroz"],
    "managementMethods": ["Compostagem", "Plantio Direto"],
    "importantDates": {
      "planting": "2023-10-20",
      "harvest": "2024-06-20"
    },
    "fertilization": "2024-01-20",
    "uid": "SHEyRthsui48WK"
  },
  {
    "createdAt": 169722512135,
    "area": "200 Ha",
    "crops": ["Arroz", "Feijão", "Trigo"],
    "rotation": ["Feijão", "Trigo", "Arroz"],
    "managementMethods": ["Compostagem", "Plantio Direto"],
    "importantDates": {
      "planting": "2023-10-20",
      "harvest": "2024-06-20"
    },
    "fertilization": "2024-01-20",
    "uid": "RtEyRaasuiC0WK"
  }
]
```

`GET /cultivations/:id`
Rota para recuperar um plano de cultivo específico:

#### Response

```json
{
  "id": "RtEyRaasuiC0WK",
  "data": {
    "area": "200 Ha",
    "crops": ["Arroz", "Feijão", "Trigo"],
    "rotation": ["Feijão", "Trigo", "Arroz"],
    "managementMethods": ["Compostagem", "Plantio Direto"],
    "importantDates": {
      "planting": "2023-10-20",
      "harvest": "2024-06-20"
    },
    "fertilization": "2024-01-20"
  }
}
```

`PATCH /cultivations/:id`
Rota para editar um plano de cultivo específico:

#### Request

```json
{
  "area": "230 Ha",
  "crops": ["Feijão", "Batata", "Cenoura"],
  "rotation": ["Batata", "Cenoura", "Feijão"]
}
```

#### Response

```json
{
  "id": "RtEyRaasuiC0WK",
  "data": {
    "area": "230 Ha",
    "crops": ["Feijão", "Batata", "Cenoura"],
    "rotation": ["Batata", "Cenoura", "Feijão"],
    "managementMethods": ["Compostagem", "Plantio Direto"],
    "importantDates": {
      "planting": "2023-10-20",
      "harvest": "2024-06-20"
    },
    "fertilization": "2024-01-20"
  }
}
```

`DELETE /cultivations/:id`
Rota para deletar um plano de cultivo específico:

#### Response

    No body returned for response

### Considerações finais

A api ainda está em fase de desenvolvimento, por conta disso, sofrerá algumas modificações ao longo do tempo. Contudo, todas as novas funcionalidades serão detalhadas aqui na documentação, indicando o que deverá ser feito.

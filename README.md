# MySoil - API

Essa API faz parte da solução do time Yapuhcakip para o Hackathon CPAmazônia - Desafio SERPRO. A api foi feita com Node.js + Express e seu banco de dados está hospedado no firebase.

### Para rodar a aplicação na sua máquina local, rode o seguinte comando:

    npm install

### Ou se preferir, acessa a URL base através de seu ApiClient preferido:

    https://api-mysoil.onrender.com

### Endpoints

`POST /informations`
Rota utilizada para criar uma informação:

#### Request

    {
        "category": "Categoria 1",
        "title": "Título 1",
        "text": "Texto da Informação 1 ...",
        "img": "http://link-da-sua-imagem.jpeg"
    }

#### Response

    {
        "message": "Informação criada com sucesso"
    }

`GET /informations`
Rota que fornece a lista de informações disponíveis no banco:

#### Response

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
        },
    ]

(A chave "createdAt" diz respeito ao timestamp da hora em que a informação foi criada)

`GET /informations/:id`
Rota para recuperar uma informação específica:

#### Response

    {
        "id": "JhystSadasDpouZ",
        "data": {
            "img": "http://link-da-sua-imagem2.jpeg",
            "text": "Texto da Informação 2 ...",
            "title": "Título 2",
            "category": "Categoria 2"
        }
    }

`PATCH /informations/:id`
Rota para editar uma informação específica:

#### Request

    {
        "title": "Título 2 - Editado"
    }

#### Response

    {
        "id": "JhystSadasDpouZ",
        "data": {
            "img": "http://link-da-sua-imagem2.jpeg",
            "text": "Texto da Informação 2 ...",
            "title": "Título 2",
            "category": "Categoria 2"
        }
    }

`DELETE /informations/:id`
Rota para deletar uma informação específica:

#### Response

    No body returned for response

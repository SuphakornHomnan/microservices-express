# Book Service

- endpoint: http://localhost:4545

## How to run service

```sh
// Production
$ npm run start
// Development
$ npm run dev
```

## API Docs

| Routes | Method   | Body                                    | Params | Describe          |
| -------- | -------- | --------------------------------------- | ------ | ----------------- |
| _/books_ | `GET`    |                                         |        | get all books     |
| _/book/_ | `POST`   | {title, author, numberPages, publisher} |        | add new book      |
| _/book/_ | `GET`    |                                         | id     | get book by id    |
| _/book/_ | `DELETE` |                                         | id     | remove book by id |

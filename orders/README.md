# Order service

- endpoint: http://localhost:7777

## How to run service

```sh
// Production
$ npm run start
// Development
$ npm run dev
```

## API Docs

| Routes    | Method   | Body                                         | Params | Describe           |
| --------- | -------- | -------------------------------------------- | ------ | ------------------ |
| _/orders_ | `GET`    |                                              |        | get all orders     |
| _/order/_ | `POST`   | {customerID,bookID,initialDate,deliveryDate} |        | add new order      |
| _/order/_ | `GET`    |                                              | id     | get order by id    |
| _/order/_ | `DELETE` |                                              | id     | remove order by id |

# Customer Service

- endpoint: http://localhost:5555

## How to run service

```sh
// Production
$ npm run start
// Development
$ npm run dev
```

## API Docs

| Routes       | Method   | Body               | Params | Describe              |
| ------------ | -------- | ------------------ | ------ | --------------------- |
| _/customers_ | `GET`    |                    |        | get all customers     |
| _/customer/_ | `POST`   | {name,age,address} |        | add new customer      |
| _/customer/_ | `GET`    |                    | id     | get customer by id    |
| _/customer/_ | `DELETE` |                    | id     | remove customer by id |

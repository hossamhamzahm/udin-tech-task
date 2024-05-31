# Udin Tech Task

This is a simple CRUD application that exposes a **Product** entity using Restful API writen in Nodejs & express. 

# How to setup the server:
- Clone the repo
- Run `npm install` to install dependencies
- Run `npm run build` to build source code
- Run `npm run test` to run unit tests
- Run `npm run start` run the server


## API Docs:

### List all products
```http
GET http://localhost:3030/products
```

| query | Type | Description |
| :--- | :--- | :--- |
| `category` | `string` | **Optional**. filter by category |

#### Responses

```javascript
products: [{
  "id" : string,
  "name" : string,
  "category" : string,
  "unit_price" : number,
  "quantity" : number,
}]
```
<br>

### Retrieve a specific product
```http
GET http://localhost:3030/products/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Requried**. product id |

#### Responses

```javascript
product: {
  "id" : string,
  "name" : string,
  "category" : string,
  "unit_price" : number,
  "quantity" : number,
}
```

<br>

### Create a product
```http
POST http://localhost:3030/products
```
#### Body:

```javascript
product: {
  "name" : string,
  "category" : string,
  "unit_price" : number,
  "quantity" : number,
}
```

## Response

```javascript
product: {
  "id" : string,
  "name" : string,
  "category" : string,
  "unit_price" : number,
  "quantity" : number,
}
```

<br>

### Update a product
```http
PUT http://localhost:3030/products/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Requried**. product id |

#### Body:

```javascript
product: {
  "name" : string,
  "category" : string,
  "unit_price" : number,
  "quantity" : number,
}
```

#### Response

```javascript
product: {
  "id" : string,
  "name" : string,
  "category" : string,
  "unit_price" : number,
  "quantity" : number,
}
```

<br>

### Delete a product
```http
DELETE http://localhost:3030/products/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Requried**. product id |

#### Response

```javascript
{
  "message" : string
}
```

## Technologies Used:

- Nodejs
- Express
- TypeScript
- SQLite
<br>
> Note: .env file should be in .gitignore but it is left here for simplicity
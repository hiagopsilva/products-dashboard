<h1 align="center">Welcome to Products-Dashboard 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A back-end application with a simple use of CRUD products / notebooks.

## Install

* Create a local folder on your machine and clone the repository.
* Then open the command prompt and run the command ```yarn install``` and then run ```yarn dev``` to start the application.

## Author

👤 **Hiago Prates**

* Github: [@hiagopsilva](https://github.com/hiagopsilva)
* LinkedIn: [Hiago Prates](https://www.linkedin.com/in/hiago-prates-04902b132/)

## Dependencies 
  * eslint
  * prettier
  * typescript
  * nodemon
  * express
  * sucrase
  * mongoose
  * readme-md-generator
  * cors

## Routes

### dashboard 
 A Rota ```/dashboard``` lista todos os produtos do banco. Ela utiliza o metodo ````index``` do controller.

### listProduct 
  A rota ```/listProduct``` lista um unico produto passando como parametro o ID pela rota. 
  
EX: ```http://localhost:3000/listProduct/ID``` 

Essa Rota utiliza o metodo ```show``` do controller.

### newProduct 
  A rota ```/newProduct``` cria um produto pessando os dados ela o ```req.body```.

  ##### Para cadastrar, essa rota recebe os valores:
  * title = String
  * brandName = String
  * ItemModel = String
  * Color = String
  * MemorySize = Number
  * HardDiskSize = String
  * DisplayResolution = String
  * GraphicsCard = String
  * processor = String
  * description = String
  * price = Number
  
  Essa rota utiliza o metodo ```store``` do controller.

### product
  A rota ```/product``` edita um produto passando o ID como parametro da rota.
  
  EX:  ```http://localhost:3000/listProduct/ID```

  Essa rota utiliza o metodo ```update``` do controller.

### deleteProduct
  A rota ```/deleteProduct``` deleta um produto passando o ID como parametro da rota.
  
  Ex: ```http://localhost:3000/listProduct/ID```
  
  Essa rota utiliza o metodo ```destroy``` do controller.


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
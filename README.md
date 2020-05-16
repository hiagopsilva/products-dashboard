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
  The route ```/dashboard``` lists all DB products. 
  
  It uses the controller ```index```.

### listProduct 
  The route ```/listProduct``` lists a single product passing the route ID as a parameter. 
  
  EX: ```http://localhost:3000/listProduct/ID``` 

  It uses the controller ```show```.

### newProduct 
  The route ```/newProduct``` creates a product by passing values ​​through ```req.body```.

  #### To register, a route receives the values:
  * title = String
  * brandName = String
  * itemModel = String
  * color = String
  * memorySize = Number
  * hardDiskSize = String
  * displayResolution = String
  * graphicsCard = String
  * processor = String
  * description = String
  * price = Number
  
  It uses the controller ```store```.

### product
  The route ```/product``` edit a product by passing the ID as a route parameter.
  
  EX:  ```http://localhost:3000/listProduct/ID```

  It uses the controller ```update```

### deleteProduct
  The route ```/deleteProduct``` delete a product by passing the ID as a route parameter.
  
  Ex: ```http://localhost:3000/listProduct/ID```
  
  It uses the controller ```destroy```.


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
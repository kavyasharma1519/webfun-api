const Controller = require('./Controller')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Controller.sayHello,
    description: 'Hello World!',
    tags: ['api']
  }
  ,
  {  method: 'GET',
      path: '/items',
      handler: Controller.getItems,
      description: 'This should return a number of items.',
      tags: ['api'];
  }
]

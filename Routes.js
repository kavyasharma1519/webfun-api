const Controller = require('./Controller')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World!';
  }
}
  ,
  {  method: 'GET',
      path: '/items',
      handler: (request, h) => {

          return 'This should return a number of items.';
  }
}
]

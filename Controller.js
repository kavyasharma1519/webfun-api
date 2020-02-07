const Service = require ('./Service')

module.exports = {
  sayHello() {
      return Service.sayHello();
  },
  getItems() {
    return Service.getItems()
  }
}

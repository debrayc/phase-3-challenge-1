const {
  getProductsBySection,
  getOrdersByShopperId,
  getAllRealShoppers
} = require('./database.js');

let productSection = argument => {
  let prdLength = `Product Name`.length
  let secLength = `Section`.length
  console.log(`|--------------+---------|`)
  console.log(`| Product Name | Section |`)
  console.log(`|--------------+---------|`)
  let list = getProductsBySection( argument )
    .then( items => {
      items.map( item => {
        console.log("| " +
          item.name +
          (" ").repeat( prdLength - item.name.length) +
           " | " +
          item.section +
          (" ").repeat(secLength - item.section.length) + " | ")
      })
    })
    .then( ()=> console.log( `|--------------+---------|` ) )
}

let ordersById = argument => {
  let orderLength = `order id`.length
  let costLength = `total cost`.length
  console.log(`|----------+------------|`)
  console.log(`| order id | total cost |`)
  console.log(`|----------+------------|`)
  let list = getOrdersByShopperId( argument )
    .then( items => {
      items.map( item => {
        console.log("| " +
          item.id +
          (" ").repeat( orderLength - item.id.toString().length) +
           " | " +
          (" ").repeat(costLength - item.total_cost.length) +
          item.total_cost +
          " | ")
      })
    })
    .then( ()=> console.log( `|----------+------------|` ) )
}

let realshoppers = () => {
  let shopperNameLength = `shopper name`.length
  let numOrdersLength = `number of orders`.length
  console.log(`|--------------+------------------|`)
  console.log(`| shopper name | number of orders |`)
  console.log(`|--------------+------------------|`)
  let list = getAllRealShoppers( )
    .then( items => {
      items.map( item => {
        console.log("| " +
          item.fname +
          (" ").repeat( shopperNameLength - item.fname.length) +
           " | " +
          (" ").repeat(numOrdersLength - item.count.toString().length) +
          item.count +
          " | ")
      })
    })
    .then( ()=> console.log( `|--------------+------------------|` ) )
}

let func = process.argv[2]
let argument = process.argv[3]

switch (func) {
  case "product-list": productSection(argument)
   break;
  case "shopper-orders": ordersById(argument)
    break;
  case "real-shoppers": realshoppers()
    break;
  default:

}

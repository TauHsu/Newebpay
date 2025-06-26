const { DataSource } = require("typeorm");
const config = require("../config/index");

const Products = require("../entities/Products");
const Orders = require("../entities/Orders");
const Order_items = require("../entities/Order_items");
const Payments = require("../entities/Payments");
const Coupons = require("../entities/Coupons");
const Cart = require("../entities/Cart");
const Product_images = require("../entities/Product_images");

const dataSource = new DataSource({
  type: "postgres",
  host: config.get("db.host"),
  port: config.get("db.port"),
  username: config.get("db.username"),
  password: config.get("db.password"),
  database: config.get("db.database"),
  synchronize: config.get("db.synchronize"),
  poolSize: 10,
  entities: [
    Products,
    Orders,
    Order_items,
    Payments,
    Coupons,
    Cart,
    Product_images,
  ],
  ssl: config.get("db.ssl"),
});

module.exports = { dataSource };

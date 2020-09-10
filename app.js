const express = require("express");
const bodyParser = require("body-parser"); // 请求体解析 中间件
const router = require("./router/router.js");

const app = express();

app.engine("html", require("express-art-template")); // 模板引擎

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router); // 路由挂载

app.listen(3066, () => {
    console.log("http://localhost:3066");
});
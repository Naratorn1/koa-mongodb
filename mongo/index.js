const bodyParser = require ("koa-bodyparser");
const cors = require("@koa/cors");
const koa = require("koa");
const app = new koa();
const route = require ('./route/route.js');

app.use(bodyParser())

app.use(
    cors({
      origin: '*',
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
      exposeHeaders: ['X-Request-Id'],
    }),
  )
app.use(route.routes());
  console.log('test');
  const server = app.listen('3333');
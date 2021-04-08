const http = require("http");
const Koa = require("koa");
const { v4: uuidv4 } = require('uuid');
const Router = require("koa-router");
const faker = require('faker');

const app = new Koa();

const data = {
  "status": "ok",
  "timestamp": 1553400000,
  "messages": [
    {
      "id": uuidv4,
      "from": faker.name,
      "subject": faker.,
      "body": "Long message body here" ,
      "received": 1553108200
    },
    {
      "id": uuidv4,
      "from": faker.name,
      "subject": "Hello from Alex Petrov!",
      "body": "Long message body here",
      "received": 1553107200
    },
  ]
}

console.log('Hello!');

app.use(async (ctx, next) => {
  const origin = ctx.request.get("Origin");
  if (!origin) {
    return await next();
  }

  const headers = { "Access-Control-Allow-Origin": "*" };

  if (ctx.request.method !== "OPTIONS") {
    ctx.response.set({ ...headers });
    try {
      return await next();
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }

  if (ctx.request.get("Access-Control-Request-Method")) {
    ctx.response.set({
      ...headers,
      "Access-Control-Allow-Methods": "GET, POST, PUD, DELETE, PATCH",
    });
  }

  if (ctx.request.get("Access-Control-Request-Headers")) {
    ctx.response.set(
      "Access-Control-Allow-Headers",
      ctx.request.get("Access-Control-Request-Headers")
    );
  }

  ctx.response.status = 204;

  ctx.respond = false;
});

app.use(async (ctx) => {
  const { method } = ctx.request.query;

  console.log(method);

  switch(method) {
    case 'addMessage':
      ctx.response.body = ['Hello !!!']
  }
});

const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback()).listen(port);

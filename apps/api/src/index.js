const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = { message: 'Hello CaenCamp Jobboard' };
});

app.listen(3001, () => global.console.log('API started on port 3001'));

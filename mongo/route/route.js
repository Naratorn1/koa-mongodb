const mongoose = require("mongoose");
const Route = require('koa-router');
const studentRepository = require('../src/core/student.repository');

const route = new Route();

route.get('/student',async ctx => {
    const result = await studentRepository.find({});
    ctx.body = result
});

route.post('/',async ctx => {
    const {body} = ctx.request;
    console.log('body :',body)
    ctx.body = body;
});

route.post('/student',async ctx => {
    const {body} = ctx.request;
    console.log('body : ',body)
    await studentRepository.create(body);
    ctx.body = body; 
});

module.exports = route;
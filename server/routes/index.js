const Router = require('koa-router')

const router = new Router({
  prefix: '/data'
})

router.get('/', (ctx) => {
  ctx.body = { message: 'hello world.' }
})
module.exports = router

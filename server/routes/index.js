const Router = require('koa-router')

const router = new Router({
  prefix: '/data'
})

router.get('/', (ctx) => {
  ctx.body = 'hello world.'
})
module.exports = router

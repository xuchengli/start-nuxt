export default ({ store, error }) => {
  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  if (!store.state.authenticated) {
    error({
      statusCode: 500,
      message: '没有授权!'
    })
  }
}

function authUserOk (state) {
  console.log(2)
  state.user.isLogin = true
}

const mutations = {
  authUserOk
}

export default mutations

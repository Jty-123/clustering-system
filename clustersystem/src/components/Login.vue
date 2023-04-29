<template>
<div class="context">
    <div class="con-background"></div>
    <div class="left-container">
    <div class="logo-box">
        <img src="../assets/logo.png" alt="" />
        <span>图像聚类系统</span>
    </div>
    <div class="text-box">
        <h3>图像聚类系统</h3>
        <p>大连理工大学</p>
    </div>
    <div class="footer-box">
        <span class="footer-list">
        <a class="footer-about" target="_blank" href="/about">关于</a>
        <span class="footer-line"></span>
        <a class="footer-help" target="_blank" href="">帮助</a>
        </span>
        <span class="footer-copyright"> 2023 ©Jty </span>
    </div>
    </div>
    <div class="right-container">
    <div class="right-context">
        <h2 style="text-align:center">用户登录</h2>
        <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="loginForm.password" show-password style="margin-top:20px"></el-input>
    </div>
    <div class="right-footer-box">
       <el-button type="primary" @click="login">登录</el-button>
    </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin
    })
  },
  methods: {
    ...mapActions({
      authUser: 'authUser'
    }),
    login () {
      this.authUser(this.loginForm.username, this.loginForm.password)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.context {
    margin: 0;
    padding: 0;
    /* 100%窗口高度 */
    height: 100vh;
    transition: all 0.5s;

    /* 渐变背景 */
    /* background: linear-gradient(200deg, #f3e7e9, #e3eeff); */
    /* background-image: url("../assets/login_background.jpg"); */
}
.con-background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("../assets/background.jpg") no-repeat;
    background-size: cover;
    z-index: -1;
}
.text-box {
    position: fixed;
    left: 8%;
    top: 40%;
    color: #fff;
    display: block;
    text-align: left;
}
.text-box h3 {
    font-size: 54px;
    letter-spacing: 0;
    font-weight: 700;
}
.text-box p {
    font-size: 32px;
    letter-spacing: 3.81px;
    font-weight: 300;
}
.logo-box {
    position: fixed;
    left: 4%;
    top: 5%;
    color: #fff;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.logo-box span {
    margin-left: 10px;
    font-size: 30px;
    font-family: inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}
.logo-box img {
    height: 50px;
    width: 50px;
}
.footer-box {
    position: fixed;
    opacity: 0.78;
    left: 4%;
    bottom: 5%;
    font-size: 14px;
    color: #fff;
}
.footer-box a {
    color: #fff;
    text-decoration: none;
}
.footer-box a:hover {
    color: rgb(75, 105, 254);
    opacity: 1;
}
.footer-about .footer-help {
    opacity: 0.8;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
}
.footer-line {
    display: inline-block;
    width: 2px;
    height: 12px;
    filter: alpha(opacity=78);
    opacity: 0.78;
    margin: 0 12px 0 13px;
    background: #fff;
    position: relative;
    top: 1px;
}
.footer-copyright {
    opacity: 0.54;
    font-size: 12px;
    color: #fff;
    display: inline-block;
    padding-left: 30px;
}
.right-container {
    top: 50%;
    margin-top: -215px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    right: 170px;
    width: 420px;
    height: 380px; /* login的高度 */
    padding: 5px 35px 20px 35px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.5s;
}
.right-footer-box {
    text-align: center;
}
.right-footer-box a {
    color: rgb(100, 100, 100);
    text-decoration: none;
    cursor: pointer; /* 光标变小手 */
}
.right-footer-box a:hover {
    color: rgb(75, 105, 254);
    opacity: 1;
}
/* 窗口变化会导致text-box隐藏 */
@media screen and (max-width: 1000px) {
    /* max screen size */
    .text-box {
        display: none;
    }
}
/* 窗口自适应  登录/注册窗口 */
@media screen and (max-width: 1000px) {
    .context {
        animation: fadeIn 0.25s linear;
        display: flex;
        justify-content: center;
    }
    .right-container {
        right: auto;
    }
}
@media screen and (max-width: 550px) {
    .right-container {
        background-color: transparent !important;
        padding: 0 0;
        height: auto;
        width: 70%;
    }
    .con-background {
        background: #fff;
        background-size: cover;
    }
    .logo-box {
        display: none;
    }
    .footer-box {
        position: absolute;
        left: 41%;
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;
        transition: all 0.5s;
    }
    .footer-box a {
        color: rgb(0, 0, 0);
    }
    .footer-copyright {
        color: rgb(100, 100, 100);
        padding-top: 0.3rem;
        padding-left: 2px;
    }
    .footer-line {
        background: rgb(100, 100, 100);
    }
}
</style>

<template>
<el-container style="height: 900px; border: 1px solid #eee">
    <el-header>
      <i class="el-icon-cpu"></i>
      基于对比学习的图像聚类系统
      <el-dropdown trigger="hover" style="float: right; margin-right:20px">
      <span class="el-dropdown-link">
        <i class="el-icon-user-solid"></i>
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-close">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-header>
    <el-container>
        <el-col :span="4">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>模型训练</span>
            </template>
          <el-menu-item>模型选择</el-menu-item>
          <el-menu-item>参数配置</el-menu-item>
          <el-menu-item>训练监督</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">在线聚类</span>
        </el-menu-item>
        <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">更多</span>
        </el-menu-item>
        </el-menu>
        </el-col>
    <el-main>
        <router-view/>
    </el-main>
</el-container>
</el-container>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color:#409EFF;
    color: #303133;
    text-align: left;
    line-height: 60px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 400px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
</style>

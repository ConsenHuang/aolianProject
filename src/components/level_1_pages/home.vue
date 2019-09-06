<template>
    <el-container class="full-height out-wrap">
        <siderbar></siderbar>
        <el-container>
            <el-header class="el-header">
                <div class="left logo-word">
                    统一密码服务平台
                </div>
                <div class="right right-header">
                    <img class="right-img" src="../../assets/svg/man.svg"/>
                    用户名
                    <img class="right-img3" src="../../assets/svg/xiala.svg"/>
                </div>
                <div class="right right-header2">
                    <img class="right-img2" src="../../assets/svg/zhinengduixiang.svg"/>
                    简体中文
                </div>
            </el-header>
            <el-main>
                <div class="content">
                    <router-view/>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import siderbar from '../common/siderbar';
export default {
  name: '',
  components:{
      siderbar:siderbar
  },
  data () {
    return {

    }
  },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .xiala{
        color: #B2B7C9;
        width: 9px;
        height: 9px;
    }
    .right-img2{
        width: 25px;
        height: 25px;
        line-height: 64px;
        vertical-align: middle;
    }
    .right-img3{
        width: 9px;
        height: 5px;
        line-height: 64px;
        vertical-align: middle;
    }
    .right-img{
        width: 30px;
        height: 30px;
        line-height: 64px;
        vertical-align: middle;
    }
    .right-header,.right-header2{
        line-height: 64px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(24,24,24,1);
    }
    .right-header2{
        margin-right: 30px;
    }
    .right-header{
        margin-right: 60px;
    }
    .logo-word{
        font-size:16px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height: 64px;
        text-indent: 16px;
    }
    .content{
        height: 100%;
    }
    .h{
        text-indent: 60px;
    }
    .full-height{
        margin: 0;
        padding: 0;
        height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-header, .el-footer {
        color: @activeColor;
    }

    .el-aside {
        background-color: #2F3542;
        color: @activeColor;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: @activeColor;
        text-align: center;
    }

    body > .el-container {
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
    }

    .el-container:nth-child(7) .el-aside {
    }
</style>

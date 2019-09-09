<template>
<div class="left-side" ref="siderbar">

    <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo "
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#2F3542"
            text-color="#fff"
            active-text-color="#fff"
            router="router"
    >
        <div class="logo">
            <span class="iconfont icon-logo site-logo"></span>
        </div>
        <el-menu-item index="/user">
            <i class="iconfont icon-main colort font-size-zidingyi"></i>
            <span slot="title">用户</span>
        </el-menu-item>
        <el-menu-item index="/authorization">
            <!--<i class="iconfont icon-icon-yonghu colort font-size-zidingyi"></i>-->
            <i class="iconfont icon-yonghu colort font-size-zidingyi"></i>
            <span slot="title">授权</span>
        </el-menu-item>
        <el-menu-item index="/IBC">
            <i class="iconfont icon-role colort font-size-zidingyi"></i>
            <span slot="title">IBC</span>
        </el-menu-item>
        <el-menu-item index="/NTLS">
            <i class="iconfont icon-guanli colort font-size-zidingyi"></i>
            <span slot="title">NTLS</span>
        </el-menu-item>
        <el-menu-item index="/log">
            <i class="iconfont icon-rizhi colort font-size-zidingyi"></i>
            <span slot="title">日志</span>
        </el-menu-item>
        <el-menu-item index="/statistics">
            <i class="iconfont icon-tongji colort font-size-zidingyi"></i>
            <span slot="title">统计</span>
        </el-menu-item>
    </el-menu>
        <div class="system-icon posi-re" ref="sysicon" @mouseenter="seeMenu" @mouseover="seeMenu" @mouseleave="hiddenMenu">
            <i class="iconfont icon-xitong colort font-size-zidingyi"></i>
            <div class="sys-menu-list" ref="menuList" v-show="showMenu" @mouseleave="hiddenMenu">
                <ul>
                    <li @click="changeIndex(1)" class="home3-menu" :class="{'li-active':activeIndex == '1'}">
                        系统配置
                    </li>
                    <li @click="changeIndex(2)" class="home3-menu" :class="{'li-active':activeIndex == '2'}">
                        基础数据
                    </li>
                    <li @click="changeIndex(3)" class="home3-menu" :class="{'li-active':activeIndex == '3'}">
                        权限管理
                    </li>
                    <li @click="changeIndex(4)" class="home3-menu" :class="{'li-active':activeIndex == '4'}">
                        组织管理
                    </li>
                    <li @click="changeIndex(5)" class="home3-menu" :class="{'li-active':activeIndex == '5'}">
                        管理员管理
                    </li>
                </ul>
            </div>
        </div>

</div>
</template>

<script>
    import { mapState, mapGetters} from 'vuex'
    export default {
        name: 'siderbar',
        data () {
            return{
                router:true,
                showMenu:false,
                isCollapse: true,
                activeIndex:'1',
                T:null
            }
        },
        methods:{
            seeMenu(){
                this.showMenu = true
                clearTimeout(this.T)
            },
            hiddenMenu(){
                var that = this
               this.T= setTimeout(function () {
                   that.showMenu = false
               },500)
            },
            changeIndex(index){
                this.activeIndex = index;
                switch(index) {
                    case 1:
                        // 系统配置
                        this.$store.dispatch('level3menu/setMenu',{index:index});
                        this.$router.push({ path:'/parameter_configuration'});
                        break;
                    case 2:
                        // 基础数据
                        this.$store.dispatch('level3menu/setMenu',{index:index});
                        this.$router.push({ path:'/organization_type'});
                        break;
                    case 3:
                        // 权限管理
                        this.$router.push({ path:'/authority_management'});
                        break;
                    case 4:
                        // 组织管理
                        this.$router.push({ path:'/organizational_management'});
                        break;
                    case 5:
                        // 管理员管理
                        this.$router.push({ path:'/administrator_management'});
                        break;
                    default:
                }
            },
            send(){
                // this.$post_json(
                //     '/api',
                //     {a:1}
                // ).then(()=>{
                //
                // })
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed:{
            ...mapState({
                menu: state => state.level3menu.menu
                // checkoutStatus: state => state.cart.checkoutStatus
            }),
            ...mapGetters('level3menu', ['cartProducts']),
            // 当使用多模块的时候，要分别映射
        },
        mounted(){
            console.log('pppppppppppp')
            console.log(this.cartProducts)
            console.log('pppppppppppp')
        }
    }
</script>
<style lang="less">
.sys-menu-list{
    text-indent: 12px;
    text-align: left;
    left: 62px;
    top: -140px;
    position: absolute;
    width: 140px;
    height: 140px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 5px 0px rgba(0, 0, 0, 0.35);
}
.system-icon{
    .font-size-zidingyi{
        margin-left: 20px;
        line-height: 40px;
    }
    cursor: pointer;
    width: 54px;
    height: 40px;
    position: absolute;
    background:rgba(70,78,96,1);
    border-radius:2px;
    bottom: 15px;
    left: 8px;
}
.font-size-zidingyi{
    margin: 0 0px;
    width: 24px;
    text-align: center;
    color: @colorNavigationIcon ;
}
.left-side .el-menu-item.is-active{
    border-left: 5px solid @normalColor;
}
.left-side .el-menu-item{
    border-left: 5px solid transparent;
}
.left-side{
    min-height: 100%;
    background-color:@colorNavigation;
    width: 70px;
    position: relative;
}
.change-part{
    position: absolute;
    width: 50px;
    height: 50px;
    right: -50px;
}
    .logo{
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 6px;
    }
    .left-side .site-logo{
        color: @whiteColor;
        font-size:18px ;
    }
.contents-level-2{
    width: 100%;
}
 .sys-menu-list .li-active{
    background:@normalColor;
    color: #fff;
    box-shadow:0px 2px 5px 0px rgba(6,0,1,0.09);
}
.home3-menu{
    height:36px;
    background: @whiteColor;
    transition: 0.3s;
    line-height: 36px;
    cursor: pointer;
}
.home3-menu:hover,.home3-menu:active{
    background:@normalColor;
    color: @whiteColor;
    box-shadow:0px 2px 5px 0px rgba(6,0,1,0.09);
}
.home3-title{
    height: 44px;
    font-size:14px;
    font-weight:bold;
    color:@activeColor;
    line-height:44px;
    text-align: center;
    border-bottom: 1px solid rgba(232,232,232,1);
}
.third-menu{
    width: 140px;
    height: 857px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 5px 0px rgba(6,0,1,0.09);
}
</style>


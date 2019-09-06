<template>
    <div>
        <div class="contents-level-2">
        </div>
            <div ><div class="third-menu left">
                <div class="home3-title">
                    基础数据
                </div>
                <ul>
                    <li v-for="(value,key) of menuList" :key="key" @click="changeIndex(value.index)" class="home3-menu" :class="{'li-active':activeIndex == value.index}">
                        {{value.title}}
                    </li>
                </ul>
            </div></div>
            <div class="left"> <router-view/></div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                activeIndex:1,
                menuList:[{index:1,title:'参数配置'},
                    {index:2,title:'网络配置'},
                    {index:3,title:'资源监控'},
                    {index:4,title:'短信配置'},
                    {index:5,title:'邮箱配置'},],
                configMenuList:[

                ]
            }
        },
        methods:{
            changeIndex(index){
                this.activeIndex = index
                switch(index) {
                    case 1:
                        this.$router.push({ path:'/organization_type'});
                        break;
                    case 3:
                        this.$router.push({ path:'/position_management'});
                        break;
                    default:
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .contents-level-2{
        width: 100%;
    }
.third-menu .li-active{
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
    color:rgba(51,51,51,1);
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
<template>
    <div>
        <div class="contents-level-2">
        </div>
            <div ><div class="third-menu left" ref="thirdMenu">
                <div class="home3-title">
                    {{currentMenu.titleWorld}}
                </div>
                <ul>
                    <li v-for="(value,key) of currentMenu.titleList" :key="key" @click="changeIndex(value.index,value)" class="home3-menu" :class="{'li-active':activeIndex == value.index}">
                        {{value.title}}
                    </li>
                </ul>
            </div></div>
            <div class="left"> <router-view/></div>
    </div>
</template>

<script>
    import { mapState, mapGetters} from 'vuex'
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
            changeIndex(index,value){
                this.activeIndex = index
                this.$router.push({ path:value.path});
            },
            changeMenuHeight(){
                // var contentHeight = document.getElementsByClassName("wrap_page_3")[0].offsetHeight;
                // this.$refs.thirdMenu.style.height = contentHeight + "px"
            }
        },
        computed:{
            ...mapState({
                currentMenu: state => state.level3menu.menu.currentMenu
                // checkoutStatus: state => state.cart.checkoutStatus
            }),
            ...mapGetters('level3menu', ['cartProducts']),
            // 当使用多模块的时候，要分别映射
        },
        created(){
            this.$store.dispatch('level3menu/setMenu',{index:1});
        },
        mounted(){
            // var that = this
            // window.addEventListener('resize',function () {
            //     that.changeMenuHeight()
            // })
        },
        watch:{
            currentMenu:{
                handler:function () {
                    this.activeIndex = 1
                },
                deep:true
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
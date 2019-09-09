// initial state
const state = {
    menu: {
        'menuOne': {
            'titleWorld': '系统设置',
            'titleList': [
                {'title': '参数配置',index:1,path:'/parameter_configuration'},
                {'title': '网络配置',index:2,path:'/net_configuration'},
                {'title': '资源监控',index:3,path:'/resources_monitoring'},
                {'title': '短信配置',index:4,path:'/sms_configuration'},
                {'title': '邮箱配置',index:5,path:'/email_configuration'}]
        },
        'menuTow': {
            'titleWorld': '基础数据',
            'titleList': [
                {'title': '组织类型',index:1,path:'/organization_type'},
                {'title': '岗位管理',index:2,path:'/position_management'},
                {'title': '岗位级别',index:3,path:'/level_of_position '},
                {'title': '岗位类型',index:4,path:'/position_type'}]
        },
        'currentMenu':null
    }
}

// getters
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.menu+1
    //     return state.items.map(({id, quantity}) => {
    //         const product = rootState.products.all.find(product => product.id === id)
    //         return {
    //             title: product.title,
    //             price: product.price,
    //             quantity
    //         }
    //     })
    }
}

// actions
const actions = {
    checkout ({ commit }, {products}) {
        commit('setProducts', {products})
    },
    setMenu ({ commit }, {index}) {
        commit('setMenu', {index})
    }
    // 实例中使用
    // this.$store.dispatch('cart/checkout', products)
}

// mutations
const mutations = {
    setProducts(state, {products}) {
        state.menu.menu = products
        console.log('到mutation了')
        console.log(products)
        state.menu = products
    },
    setMenu(state, {index}) {
        if (index == 1){
            state.menu.currentMenu = state.menu.menuOne
        } else{
            state.menu.currentMenu = state.menu.menuTow
        }
        console.log('看看change了吗')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
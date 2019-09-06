// initial state
const state = {
    menu:123
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
    }
    // 实例中使用
    // this.$store.dispatch('cart/checkout', products)
}

// mutations
const mutations = {
    setProducts(state, {products}) {
        state.menu = products
        console.log('到mutation了')
        console.log(products)
        state.menu = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
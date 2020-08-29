export default {
    state: {
        quantity: 2,
        price: 19.99,
    },
    mutations: {
        setQuantity(state, payload) {
            state.quantity = payload;
        },
        setPrice(state, payload) {
            state.price = payload
        }
    }
}
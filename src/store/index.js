import { createStore } from 'vuex'

let testData = [];
for (let i=1; i <= 10; i++) {
    testData.push({
        id: i,
        name: `Product #${i}`,
        category: `Category ${i % 3}`,
        description: `This is product #${i}`,
        price: i * 50
    });
}

export default createStore({
    state: {
        products: testData,
        productsTotal: testData.length,
        currentPage: 1,
        pageSize: 4
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        }
    },
    actions: {

    },
    getters: {
        processedProducts: (state)=>{
            let index = (state.currentPage - 1) * state.pageSize;
            return state.products.slice(index, index + state.pageSize);
        },
        pageCount: (state)=>{
            return Math.ceil(state.productsTotal / state.pageSize);
        }
    }
})

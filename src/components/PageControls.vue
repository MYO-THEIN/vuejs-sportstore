<template>
    <div v-if="pageCount > 1" class="text-end">
        <div class="btn-group mx-2">
            <button v-for="i in pageNumbers" :key="i" class="btn btn-secondary" :class="{'btn-dark': i == currentPage}">
                {{i}}
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore();

        // computed
        let currentPage = computed(() => store.state.currentPage),
            pageCount = computed(() => store.getters.pageCount),
            pageNumbers = computed(()=>{
                return [...Array(store.getters.pageCount + 1).keys()].slice(1);
            });

        return {
            currentPage,
            pageCount,
            pageNumbers
        }
    }
}
</script>

<style>

</style>

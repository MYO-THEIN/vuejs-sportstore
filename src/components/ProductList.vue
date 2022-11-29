<template>
    <div>
        <div v-for="p in products" :key="p.id" class="card m-1 p-1 bg-light">
            <h4>
                {{p.name}}
                <span class="badge badge-pill bg-primary float-end">
                    {{ $filters.valueInUSD(p.price) }}
                </span>
            </h4>
            <div class="card-text bg-white p-1">{{p.description}}</div>
        </div>
        <PageControls />
    </div>
</template>

<script>
import PageControls from './PageControls'
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core';
export default {
    components: {
        PageControls
    },
    setup() {
        const store = useStore();

        // computed
        let products = computed(() => store.getters.processedProducts);
        
        return {
            products
        }
    }
}
</script>

<style>

</style>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white p-2">
                <a class="navbar-brand">SPORTS STORE</a>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <h4 class="text-white m-2">Categories</h4>
            </div>
            <div class="col-9 bg-success p-2">
                <ProductList />
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from './ProductList'
export default {
    components: {
        ProductList
    }
}
</script>

<style>

</style>

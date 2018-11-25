<template>
    <div class="row">
        <stock-app v-for="stock in stocks" :key="stock.id" :stock="stock"></stock-app>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import stockApp from './Stock'
    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            stockApp
        }
    }
</script>

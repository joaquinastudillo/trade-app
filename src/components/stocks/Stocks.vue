<template>
    <div class="row">
        <stock-app v-for="stock in stocks" :key="stock.id" :stock="stock"></stock-app>
    </div>
</template>

<script>
import StockApp from './Stock'
    export default{
        name: 'StocksApp',
        components: {
            StockApp
        },
        computed: {
            stocks(){
                return this.$store.getters.stocks
            }
        }
    }
</script>

<template>
    <div>
            <div class="col-sm">
                <div class="card mb-3" style="">
                <div class="card-header">{{ stock.name }} <small>(Price: {{ stock.price }})</small></div>
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-9">
                            <input 
                                type="number"
                                class="form-control"
                                placeholder="Quantity"
                                v-model.number="quantity"
                            >
                        </div>
                        <div class="form-group col-md-3">
                             <button 
                                class="btn"
                                @click="buyStock"
                                :disabled="insufficientFunds ||quantity <= 0"
                                :class="[ insufficientFunds ? 'btn-danger' : 'btn-success' ]"
                            >Buy
                            </button>
                        </div>
                    </div>
                    <span v-if="insufficientFunds" class="badge badge-danger">Insuffficient Funds</span>
                </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        computed: {
            insufficientFunds(){
                return this.quantity * this.stock.price > this.funds
            },
            funds(){
                return this.$store.getters.funds
            }
        },
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>

<style>
.danger{
    border: 1px solid red;
}
</style>


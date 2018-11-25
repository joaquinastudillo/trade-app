<template>
    <div>
            <div class="col-sm">
                <div class="card mb-3" style="">
                <div class="card-header">{{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small></div>
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
                                @click="sellStock"
                                :disabled="insufficientQuantity || quantity <= 0"
                                :class="[ insufficientQuantity ? 'btn-danger' : 'btn-success' ]"
                            >Sell
                            </button>
                        </div>
                    </div>
                    <span v-if="insufficientQuantity" class="badge badge-danger">Not Enough Stock</span>
                </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default{
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity(){
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellstock'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placeSellOrder(order)
                this.quantity = 0
            }
        }
    }
</script>

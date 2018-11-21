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
                                class="btn btn-success"
                                @click="sellStock"
                                :disabled="quantity <= 0"
                            >Sell
                            </button>
                        </div>
                    </div>
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
        methods: {
            ...mapActions([
                'sellStock'
            ]),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.sellStock()
            }
        }
    }
</script>

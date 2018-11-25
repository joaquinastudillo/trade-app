<template>
    <div id="headerMenu" class="container">
        <ul class="nav justify-content-end">
                <li class="nav-item">
                  <button id="endDayButton" type="button" class="btn btn-info" @click="endDay">End Day</button>
                </li>
                <li class="nav-item">
                  <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" @click="saveData">Save Data</a>
                            <a class="dropdown-item" @click="loadData">Load Data</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                  <p class="nav-link" href="#">Funds: <strong> {{funds | currency}} </strong></p>
                </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from "vuex";
const firebase = require("./../config.js");
export default {
  name: "HeaderMenuApp",
  data() {
    return {};
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      firebase.dataCollection.doc('trade').set(data)
            .then(
                console.log("Document successfully written!")
            )
            .catch(
                console.error("Error writing document: ", error)
            )
    },
    loadData() {
        this.fetchData()
    }
  }
};
</script>

<style>
#headerMenu {
  padding-top: 20px;
}
#endDayButton {
  margin-right: 5px;
}
</style>



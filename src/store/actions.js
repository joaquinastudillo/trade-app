const firebase = require('./../config.js')
export const loadData = ({commit}) => { 
    var data = firebase.dataCollection.doc('trade')
      data.get().then(doc => {
          if(doc.exists){
                //console.log(doc.data())
                const stocks = doc.data().stocks
                const funds = doc.data().funds
                const stockPortfolio = doc.data().stockPortfolio
                
                const portfolio = {
                    stockPortfolio,
                    funds
                }
                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio) 
          }
      });
}
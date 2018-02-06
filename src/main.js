import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const httpLink = new HttpLink({
   uri: 'https://api.graph.cool/simple/v1/cjdawo5qu355s0130idyq29ze'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

new Vue({
  el: '#app',
  apolloProvider,
  store,
  router,
  components: { App },
  template: '<App/>'
})

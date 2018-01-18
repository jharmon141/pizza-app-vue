// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
   uri: 'https://core-graphql.dev.waldo.photos/pizza'
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
// Install the vue plugin
Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  store,
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


Vue.config.productionTip = false

new Vue({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: h => h(App),
}).$mount('#app')

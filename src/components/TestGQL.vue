<template lang="">
    <div>
        <p>result:<p/>
        <p>{{result}}<p/>
    </div>
</template>
<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  setup () {
    const { result } = useQuery(gql`
query {
  characters {
    results {
      name
      species
    }
  }
}
    `)
    return { result }
  }

}
</script>
<style lang="">
    
</style>


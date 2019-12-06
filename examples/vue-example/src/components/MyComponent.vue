<template>
  <div>
    <P5 :sketch="sketch"/>
  </div>
</template>

<script>
import {VueP5Wrapper as P5} from 'p5wrappers'

import sketch from '../assets/sketch'

export default {
  name: 'P5Baby',
  components: {
    P5,
  },
  data() {
    return {
      sketch: sketch,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

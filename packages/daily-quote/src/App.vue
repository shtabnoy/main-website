<template>
  <Quote />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Quote from './components/Quote.vue';

export default defineComponent({
  name: 'App',
  components: {
    Quote,
  },
});
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

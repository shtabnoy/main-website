<template>
  <div id="app">
    <p>{{ quote }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Quote',
  setup() {
    const quotes = [
      'The best way to predict the future is to invent it.',
      'Life is 10% what happens to us and 90% how we react to it.',
      'The only way to do great work is to love what you do.',
      'Success is not the key to happiness. Happiness is the key to success.',
      "Your time is limited, don't waste it living someone else's life.",
    ];

    const quote = ref('');

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quote.value = quotes[randomIndex];
    };

    onMounted(() => {
      getRandomQuote();
    });

    return {
      quote,
    };
  },
});
</script>

<style>
p {
  font-size: 1.5em;
}
</style>

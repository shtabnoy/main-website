<template>
  <div>
    <p>{{ quote }}</p>
    <button @click="scrollUp">Up</button>
    <button @click="scrollDown">Down</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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

    const quote = ref(quotes[0]);
    const currentIndex = ref(0);

    const scrollUp = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        currentIndex.value = quotes.length - 1;
      }
      quote.value = quotes[currentIndex.value];
    };

    const scrollDown = () => {
      if (currentIndex.value < quotes.length - 1) {
        currentIndex.value++;
      } else {
        currentIndex.value = 0;
      }
      quote.value = quotes[currentIndex.value];
    };

    return {
      quote,
      scrollUp,
      scrollDown,
    };
  },
});
</script>

<style>
p {
  font-size: 1.5em;
}
</style>

<template>
  <div class="quote-container">
    <button class="arrow-button up" @click="scrollUp">
      <ArrowUpIcon class="icon" />
    </button>
    <p class="quote">{{ quote }}</p>
    <button class="arrow-button down" @click="scrollDown">
      <ArrowDownIcon class="icon" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
  name: 'Quote',
  components: {
    ArrowUpIcon,
    ArrowDownIcon,
  },
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
.quote-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.quote {
  font-size: 1.5em;
  text-align: center;
  margin: 20px 0;
}

.arrow-button {
  font-size: 2em;
  cursor: pointer;
}

.arrow-button.up {
  align-self: center;
}

.arrow-button.down {
  align-self: center;
}

.icon {
  width: 24px;
}
</style>

<template>
  <div class="quote-container" v-if="quotes.length">
    <button class="arrow-button up" @click="scrollUp">
      <ArrowUpIcon class="icon" />
    </button>
    <p class="quote">{{ quote }}</p>
    <button class="arrow-button down" @click="scrollDown">
      <ArrowDownIcon class="icon" />
    </button>
  </div>
  <div v-else>
    <p>Loading quotes...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
  name: 'Quote',
  components: {
    ArrowUpIcon,
    ArrowDownIcon,
  },
  setup() {
    const quotes = ref<string[]>([]);
    const quote = ref('');
    const currentIndex = ref(0);

    const fetchQuotes = async () => {
      const response = await fetch('/src/assets/quotes.json');
      const data = await response.json();

      quotes.value = data.quotes;
      quote.value = quotes.value[0];
    };

    const scrollUp = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        currentIndex.value = quotes.value.length - 1;
      }
      quote.value = quotes.value[currentIndex.value];
    };

    const scrollDown = () => {
      if (currentIndex.value < quotes.value.length - 1) {
        currentIndex.value++;
      } else {
        currentIndex.value = 0;
      }
      quote.value = quotes.value[currentIndex.value];
    };

    onMounted(() => {
      fetchQuotes();
    });

    return {
      quote,
      quotes,
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
  border: none;
  background-color: transparent;
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

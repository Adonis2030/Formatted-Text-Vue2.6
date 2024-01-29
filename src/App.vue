<template>
  <div id="app">
    <!-- <FormattedText /> -->
    <div data-testid="text" @click="toggleUnformatted">
      {{ formattedText }}
    </div>

    <div data-testid="value" @click="toggleUnformatted">
      {{ formattedValue }}
    </div>

    <div v-if="showUnformattedText">{{ text }}: {{ value }}</div>
  </div>
</template>

<script>
// import FormattedText from "./components/FormattedText.vue";

export default {
  name: "App",
  props: {
    text: {
      type: String,
      default: "", // Provide a default value for the text prop
    },
    value: {
      type: Number,
      default: 0, // Provide a default value for the value prop
    },
    config: {
      type: Object,
      default: () => ({}), // Provide a default value for the config prop
    },
  },
  data() {
    return {
      showUnformattedText: false,
    };
  },
  computed: {
    maxTextLength() {
      return (this.config && this.config.maxTextLength) || 5;
    },
    formattedText() {
      // Check if text is defined and is a string
      if (typeof this.text === "string") {
        return this.text.length > this.maxTextLength
          ? this.text.substr(0, this.maxTextLength) + "..."
          : this.text;
      }
      return ""; // Return an empty string if `text` is not a string
    },
    formattedValue() {
      if (this.value >= 1000000) {
        return this.value === 1000000
          ? "1M"
          : (this.value / 1000000).toFixed(1) + "M";
      } else if (this.value >= 1000) {
        return this.value === 1000
          ? "1K"
          : (this.value / 1000).toFixed(1) + "K";
      } else {
        return Math.round(this.value);
      }
    },
  },
  methods: {
    toggleUnformatted() {
      if (this.config && this.config.showUnFormatted) {
        this.showUnformattedText = !this.showUnformattedText;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

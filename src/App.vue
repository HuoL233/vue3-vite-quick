<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld :msg="t('helloWorld')" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale
    };
  }
});

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

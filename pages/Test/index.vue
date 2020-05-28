<template>
  <div class="container">
    <p
      v-for="el in arr"
      :key="el"
      :class="el+'-text'"
    >
      {{ el }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      arr: ['primary', 'secondary', 'accent', 'warning', 'error', 'info', 'success'],
    };
  },

};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

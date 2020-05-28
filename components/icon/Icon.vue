<template>
  <div
    class="icon"
    v-html="icon"
  />
</template>

<script>
export default {
  name: 'Icon',

  props: {
    /**
     * Иконки лежат в assets/icons
     */
    name: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      icon: '',
    };
  },

  watch: {
    name: {
      immediate: true,
      handler: 'setIcon',
    },
  },

  methods: {
    async setIcon() {
      const result = await import(

        /* webpackChunkName: "icons" */
        /* webpackMode: "lazy-once" */
        `~/assets/icons/${this.name}.svg`
      );

      this.icon = result.default || '';
    },
  },
};
</script>

<style>
.icon {
  display: inline-block;
}

.icon > svg {
  display: block;
}
</style>

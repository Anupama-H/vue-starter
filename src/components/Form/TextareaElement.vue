<template>
  <fieldset>
    <label>{{ value.label }}</label>
    <textarea :id="name" v-model="value.value" />
  </fieldset>
</template>

<script>
  import BaseElement from './BaseElement.vue'

  export default {
    name: 'textarea-element',
    mixins: [BaseElement]
  }
</script>

<style></style>

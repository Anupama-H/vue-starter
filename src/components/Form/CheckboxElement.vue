<template>
  <fieldset>
    <input :id="name" type="checkbox" v-model="value.value" />
    <label :for="name">{{ value.label }}</label>
  </fieldset>
</template>

<script>
  import BaseElement from './BaseElement.vue'

  export default {
    name: 'checkbox-element',
    mixins: [BaseElement]
  }
</script>

<style></style>

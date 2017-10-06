<template>
  <fieldset>
    <label :for="name">{{ value.label }}</label>
    <label v-for="option in value.options">
      <input type="radio" :name="name" :id="option.id" :value="option.id" v-model="value.value" />
      <label :for="option.id">{{option.name}}</label>
    </label>
  </fieldset>
</template>

<script>
  import BaseElement from './BaseElement.vue'

  export default {
    name: 'radio-element',
    mixins: [BaseElement]
  }
</script>

<style></style>

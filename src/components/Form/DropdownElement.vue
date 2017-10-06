<template>
  <fieldset>
    <label>{{ value.label }}</label>
    <select :id="name" type="text" v-model="value.value" >
      <option v-for="option in value.options" :id="option.id" :value="option.id">{{option.name}}</option>
    </select>
  </fieldset>
</template>

<script>
  import BaseElement from './BaseElement.vue'

  export default {
    name: 'dropdown-element',
    mixins: [BaseElement]
  }
</script>

<style></style>

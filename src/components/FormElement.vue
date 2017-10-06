<template>
  <div class="form-element">
    <div v-for="(elementConfig, elementName) in value">
      <component :is="elementConfig.type" :name="elementName" v-model="value[elementName]"></component>
    </div>
  </div>
</template>

<script>
  import TextElement from './Form/TextElement.vue'
  import CheckboxElement from './Form/CheckboxElement.vue'
  import TextareaElement from './Form/TextareaElement.vue'
  import DropdownElement from './Form/DropdownElement.vue'
  import RadioElement from './Form/RadioElement.vue'

  export default {
    name: 'form-element',
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    components: {
      'text-element': TextElement,
      'checkbox-element': CheckboxElement,
      'textarea-element': TextareaElement,
      'dropdown-element': DropdownElement,
      'radio-element': RadioElement
    }
  }
</script>

<style></style>

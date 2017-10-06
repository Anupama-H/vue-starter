<template>
  <fieldset>
    <label>{{ value.label }}</label>
    <input :id="name" type="text" v-model="value.value" :class="{'error-elem': hasError}" v-on:input="validateInput"/>
    <div v-for="error in errors">
      <div class="error" v-if="hasError">{{error.message}}</div>
    </div>
  </fieldset>
</template>

<script>
  let validationRulesMap = {
    'req': {
      func: (value) => {
        return !(value === '' || value === undefined || value === null)
      },
      message: 'Field is required'
    },
    'digits': {
      func: (value) => {
        return (/^\d+$/).test(value)
      },
      message: 'Only numbers allowed'
    }
  }

  export default {
    name: 'base-element',
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        hasError: false,
        errors: [{
          message: ''
        }]
      }
    },
    methods: {
      validateInput () {
        let { value, validations } = this.value
        let validationRule, validationObj

        /* clear errors */
        this.hasError = false
        this.errors = []

        for (let i = 0; i < validations.length; i++) {
          validationRule = validations[i]
          validationObj = validationRulesMap[validationRule.expr]

          if (validationObj) {
            let isValid = validationObj.func(value)

            if (!isValid) {
              this.hasError = true
              this.errors.push({
                message: validationObj.message
              })
            }
          }
        }
      }
    }
  }
</script>

<style>
  .error {
    color: red;
    border: 1px solid red;
    padding: 10px;
  }
  .error-elem {
    border: 1px solid red;
  }
</style>

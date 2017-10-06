<template>
  <div class="form-tester">
    <h3>Testing Form Elements with 2 way binding !</h3>
    <div class="row">
      <div class="half-col">
        <form-element v-model="formElements"></form-element>
      </div>
      <div class="half-col">
        <ul class="form-values">
          <li v-for="(elementConfig, elementName) in formElements">
            <b>{{elementName}}</b> = {{elementConfig.value}}
          </li>
        </ul>
      </div>
    </div>
    <button v-on:click="submitForm">Submit</button>
  </div>
</template>

<script>
  import FormElement from '../components/FormElement.vue'

  export default {
    name: 'FormTester',
    data () {
      let formElements = {
        fname: {
          type: 'text-element',
          value: 'Anupama',
          label: 'Enter Name',
          validations: [{
            expr: 'req'
          }]
        },
        age: {
          type: 'text-element',
          value: '',
          label: 'Enter Age',
          validations: [{
            expr: 'digits'
          }]
        },
        checking: {
          type: 'checkbox-element',
          value: true,
          label: 'All Good ?'
        },
        desc: {
          type: 'textarea-element',
          value: '',
          label: 'Enter Description'
        },
        country: {
          type: 'dropdown-element',
          value: 3,
          label: 'Select Country',
          options: [{
            id: 1,
            name: 'India'
          }, {
            id: 2,
            name: 'US'
          }, {
            id: 3,
            name: 'UK'
          }]
        },
        yesno: {
          type: 'radio-element',
          value: 2,
          label: 'Select Yes/No',
          options: [{
            id: 1,
            name: 'Yes'
          }, {
            id: 2,
            name: 'No'
          }]
        }
      }
      return {
        formElements: formElements
      }
    },
    components: {
      FormElement
    },
    methods: {
      submitForm () {
        console.log('Entire form object')
        console.log(this.formElements)
      }
    }
  }
</script>

<style>
  .row {
    width: 100%;
  }
  .half-col {
    width: 45%;
    display: inline-block;
    vertical-align: text-top;
  }
  .form-values {
    list-style: none;
    text-align: left;
  }
</style>

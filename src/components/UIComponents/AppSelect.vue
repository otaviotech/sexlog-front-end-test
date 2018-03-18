<template>
  <div :class="wrapperClass">
    <div>
      <label :for="inputId" :class="labelClass" :id="labelId">{{ labelText }}</label>
    </div>
    <div :class="inputWrapperClass">
      <select :class="inputClass"
              :id="inputId"
              :placeholder="inputPlaceholder"
              @input="onSelectInput">
        <option v-for="option in options"
                :value="option.value"
                :key="option.value"
                :selected="option.selected">
                {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    wrapperClass: {
      type: String,
      required: false,
    },
    inputClass: {
      type: String,
      required: false,
    },
    inputId: {
      type: String,
      required: true,
    },
    inputWrapperClass: {
      type: String,
      required: false,
    },
    inputPlaceholder: {
      type: String,
      required: false,
      default: 'Selecione',
    },
    labelText: {
      type: String,
      required: false,
    },
    labelClass: {
      type: String,
      required: false,
    },
    labelId: {
      type: String,
      required: false,
    },
    labelWrapperClass: {
      type: String,
      required: false,
    },
    options: {
      type: Array || Object,
      required: true,
    },
    initValue: {
      required: false,
      default: '',
    },
  },
  methods: {
    addPlaceholderOption(placeholder) {
      this.options.unshift({
        label: placeholder,
        value: '',
      });
    },
    selectOption(value) {
      this.options.forEach((option, i) => {
        this.options[i].selected = (option.value === value) ? 'selected' : '';
      });
    },
    onSelectInput(event) {
      this.selectOption(event.target.value);
      this.$emit('input', event.target.value);
    },
    checkInitialValue() {
      if (this.inputPlaceholder.length) {
        this.addPlaceholderOption(this.inputPlaceholder);
      }
      this.selectOption(this.initValue);
    },
  },
  beforeMount() {
    this.checkInitialValue();
  },
};
</script>

<style>

</style>

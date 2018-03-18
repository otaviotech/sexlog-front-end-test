<template>
  <div :class="wrapperClass">
    <div>
      <label :for="inputId" :class="labelClass" :id="labelId">{{ labelText }}</label>
    </div>
    <div :class="inputWrapperClass">

      <input type="text"
             :class="inputClass"
             :id="inputId"
             :placeholder="inputPlaceholder"
             @input="onTextFieldInput" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
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
  },
  methods: {
    onTextFieldInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style>

</style>

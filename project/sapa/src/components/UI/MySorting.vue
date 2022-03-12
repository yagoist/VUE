<template>
  <select
    v-model="modelValue"
    @change="changeOption"
  >
      <option
        disabled value="">
        Сортировка списка
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
  </select>
</template>

<script>
export default {
    name: 'my-sorting',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            console.log(event)
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>

</style>
<template>
  <button
    type="button"
    class="px-1 py-1 font-bold text-white shadow-lg
    \ rounded hover:bg-red-800 bg-red-500
    \ focus:outline-none focus:shadow-outline"
  >
    {{name}}
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: [
    'name',
  ]
}

</script>

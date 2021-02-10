<template>
  <div class="flex flex-col items-start w-full h-56 bg-red-800">

    <SearchBox placeholder="Search for a star or a video"
               class="w-3/4 my-3 ml-2" />

    <div class="mb-1 ml-2 text-white ">
      <a href="">
        Link
      </a>
    </div>
    <div class="mb-1 ml-2 text-white">
      <a href="">
        Link
      </a>
    </div>
    <div class="mb-1 ml-2 text-white">
      <a href="">
        Link
      </a>
    </div>

    <Button class="mb-1 ml-2" name="SIGN IN" />
      <Button class="ml-2" name="JOIN US" />

  </div>
</template>

<script>
import SearchBox from './UI/SearchBox.vue'
import Button from './UI/Button.vue'

export default {
  name: 'Burger',
  components: {
    SearchBox,
    Button,
  }
}
</script>

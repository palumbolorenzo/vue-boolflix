<template>
  <div>
    <lang-flag
      iso="en"
      title="Some title"
    />
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
name: 'MovieCard',
components: {
    LangFlag,
}
}
</script>

<style lang="scss" scoped>

</style>
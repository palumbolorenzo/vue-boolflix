<template>
  <div>
    <div class="header">
      <div>
        <img
          src="@/img/boolflix.png"
          alt=""
        >
      </div>
      <div>
        <form @submit.prevent="$emit('changeQuery', queryString)">
          <input
            id="query"
            v-model="queryString"
            type="text"
            name="query"
          >
          <a class="btn btn-dark">
            Search
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'HeaderPage',
data() {
  return {
    queryString: '',
  }
}
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #000000;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img {
    width: 100px;
}

img:hover {
  transform: scale(1.05);
  cursor: pointer;
  transition-duration: .5s;
}

a {
  margin: .5rem;
}
</style>
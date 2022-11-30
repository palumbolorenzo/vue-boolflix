<template>
  <div>
    <div class="header">
      <div>
        <img
          src="@/img/Netflix_icon.svg.png"
          alt=""
        >
      </div>
      <div>
        <input type="text">
        <a class="btn btn-dark">
          Search
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'HeaderPage'
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #000000;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img {
    width: 100px;
}
</style>
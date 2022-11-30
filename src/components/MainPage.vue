<template>
  <div>
    <img src="@/img/Netflix-Background-prueba-1.jpeg">
    <FilmsList />
    <SeriesList />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList.vue';
import SeriesList from '@/components/SeriesList.vue';

export default {
name: 'MainPage',
components: {
  FilmsList,
  SeriesList
}
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
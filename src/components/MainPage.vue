<template>
  <div>
    <!-- <img
      src="@/img/Netflix-Background-prueba-1.jpeg"
      class="background"
    > -->
    <h1>MOVIES</h1>
    <div class="movies-container">
      <ul
        v-for="objMovie in arrMovies"
        :key="objMovie.id"
        class="movie-card"
      >
        <li>
          <img
            :src="objMovie.poster-path"
            alt="movie-pic"
          >
        </li> 
        <li>
          <h6>Titolo: </h6>{{ objMovie.title }}
        </li>  
        <li><h6>Titolo Originale: </h6>{{ objMovie.original_title }}</li>  
        <li><h6>Lingua: </h6>{{ objMovie.original_language }}</li>  
        <li><h6>Voto: </h6>{{ objMovie.vote_average }}</li>  
      </ul>
    </div>
    <h1>TV SERIES</h1>
    <ul
      v-for="objTv in arrTv"
      :key="objTv.id"
      class="movie-card"
    >
      <li>{{ objTv.name }}</li>  
      <li>{{ objTv.original_name }}</li>  
      <li>{{ objTv.original_language }}</li>  
      <li>{{ objTv.vote_average }}</li>  
    </ul>  
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
},
props: {
  arrMovies: Array,
  arrTv: Array,
}
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

li {
  list-style-type: none;
}

.background {
  position: relative;
}

.movies-container {
  margin: 0 auto;
  width: 1000px;
  overflow: scroll;
  display: flex;
  gap: 1rem;
}
.movie-card {
  min-width: 200px;
  min-height: 400px;
  background-color: #3c3c3c;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.movie-card:hover {
  opacity: .8;
  cursor: pointer;
}

h6 {
  display: inline;
}
</style>
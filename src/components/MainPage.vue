<template>
  <div class="background">
    <!-- <img
      src="@/img/Netflix-Background-prueba-1.jpeg"
      class="background"
    > -->
    <div class="title text-white text-uppercase">
      movies
    </div>
    <div class="movies-container">
      <div
        v-for="objMovie in arrMovies"
        :key="objMovie.id"
        class="movie-card"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w300${objMovie.poster_path}`"
          alt="movie-pic"
          class="movie-above"
        >
         
        <ul class="card-data">
          <li class="text-white">
            <h6>Titolo: </h6>{{ objMovie.title }}
          </li> 
          <li class="text-white">
            <h6>Titolo Originale: </h6>{{ objMovie.original_title }}
          </li>
          <li class="text-white">
            <h6>Lingua: </h6>{{ objMovie.original_language }}
          </li>
          <li class="text-white">
            <h6>Voto: </h6>{{ objMovie.vote_average }}
          </li>
        </ul>
      </div>
    </div>
    <div class="title text-white text-uppercase">
      tv series
    </div>
    <div class="movies-container">
      <div
        v-for="objTv in arrTv"
        :key="objTv.id"
        class="movie-card"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w300${objTv.poster_path}`"
          alt="movie-pic"
          class="movie-above"
        >

        <ul class="card-data"> 
          <li class="text-white">
            <h6>Titolo: </h6>{{ objTv.name }}
          </li> 
          <li class="text-white">
            <h6>Titolo Originale: </h6>{{ objTv.original_name }}
          </li>
          <li class="text-white">
            <h6>Lingua: </h6>{{ objTv.original_language }}
          </li>
          <li class="text-white">
            <h6>Voto: </h6>{{ objTv.vote_average }}
          </li>
        </ul>
      </div> 
    </div> 
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
.background {
  background-image: url('@/img/image.jpg');
  background-position: center;
  background-size: cover;
}

img {
  width: 100%;
}

li {
  list-style-type: none;
}

.title {
  padding: 1.5rem 5rem;
}

.movies-container {
  margin: 0 auto;
  width: 1100px;
  overflow: scroll;
  display: flex;
  gap: 1rem;
}
.movie-card {
  width: 300px;
  position: relative;
}

.card-data {
  position: absolute;
  bottom: 100px;
  width: 300px;
  height: 150px;
  padding: 2rem 0;
  opacity: 0;
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.movie-above {
  width: 300px;
  height: 450px;
  border-radius: 1rem;
}

.movie-above:hover {
  filter: brightness(50%);
  cursor: pointer;
}

h6 {
  display: inline;
}

.movie-card:hover .card-data {
  opacity: 1;
  cursor: pointer;
}
</style>
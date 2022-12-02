<template>
  <div id="app">
    <HeaderPage @changeQuery="search" />
    <MainPage
      :arr-movies="arrMovies"
      :arr-tv="arrTv"
    />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage
  },
  data() {
    return {
      urlApi: 'https://api.themoviedb.org/3',
      apiKey: '8f0095fdcb4465f6313c3c6e71d9cde1',
      resultsLanguage: 'it-IT',
      arrMovies: [],
      arrTv: [],
    };
  },
  methods: {
    search(queryString) {
      axios.get(`${this.urlApi}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: queryString,
          language: this.resultsLanguage,
        }
      })
        .then((responseAxios) => {
          this.arrMovies = responseAxios.data.results
          console.log(this.arrMovies)
        });

      axios.get(`${this.urlApi}/search/tv`, {
        params: {
          api_key: this.apiKey,
          query: queryString,
          language: this.resultsLanguage,
        }
      })
        .then((responseAxios) => {
          this.arrTv = responseAxios.data.results
          console.log(this.arrTv)
        });
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: #000000;
}
</style>

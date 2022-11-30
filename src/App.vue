<template>
  <div id="app">
    <HeaderPage />
    <MainPage />
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
      urlApi: 'https://flynn.boolean.careers/exercises/api/array/music',
      movies: null,
    };
  },
  created() {
    axios.get(this.urlApi)
      .then((axiosResponse) => {
        console.log(axiosResponse);
        this.discs = axiosResponse.data.response;
      });
  },
}
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

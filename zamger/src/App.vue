<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import store from './store';
  import Home from './Home';
  import Login from './components/Login';
  export default {
  name: 'App',
  components: {},
  store,
  data: function(){
  return {title: 'hahha'}
  }
  }
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  }
  html, body{
  height:100%;
  margin:0px;
  padding:0px;
  }
</style>

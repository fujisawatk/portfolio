<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
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
}

/* profile page*/

.detail{
  margin-top: 30px;
}

.icon{
  display: flex;
  list-style: none;
  font-size: 40px;
  justify-content: center;
}
.icon-twitter{
  transform: translate(-50px, 0);
  display: list-item;
  cursor: pointer;
}
.icon-github{
  display: list-item;
  cursor: pointer;
}
.content{
  width: 100%;
  height: calc(100vh - 30px);
}
.languages{
  margin-top: 50px;
}
.language-left{
  margin-left: 200px;
}
.language-right{
  margin-right: 200px;
}
.card img{
  width: 100%;
}
</style>

<template>
  <div id="app">
    <div class="nav">
      <div class="left">
        <router-link to="/">Memorea</router-link>
      </div>
      <div class="right">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
}
.nav {
  display: flex;
}
.left {
  flex: 1;
  text-align: left;
}
.right {
  flex: 1;
  text-align: right;
}
</style>

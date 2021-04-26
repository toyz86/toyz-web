<template>
  <div>
    <Header class="header" />
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/header.vue';
export default {
  components: {
    Header,
  },
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html::-webkit-scrollbar { 
  width: 0 !important;
  display: none; 
}  

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.blurin {
  filter: blur(10px);
  transition: 0.5s ease-in-out;
}

.darker {
  background:rgba(0, 0, 120, 0.1);
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

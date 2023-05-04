<template>
    <div class="page-wrapper">
        <Navbar />
        <RouterView></RouterView>
        <!-- <Footer /> -->
    </div>
</template>

<script >
import Navbar from './components/Navbar.vue'
// import Footer from './components/Footer.vue'
// import ThemeButton from './components/ThemeButton.vue';


export default {
  name: 'App',
    components: {
        Navbar,
        // Footer,
        // ThemeButton,
        
    }
}


</script>

<style >
/* :root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;

}

:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #ba55ff;
  --text-primary-color: #ddd;
} */



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary); */
}
</style>

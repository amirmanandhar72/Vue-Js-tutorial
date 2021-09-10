<template>
<h1> Welcome</h1>
<Parent/>

</template>

<script>
import Parent from './components/Parent.vue' 
// Uncomment Below part for basic looping and if else exampes 
// import Home from './components/Home.vue' 



export default {
  name: 'App',
  components: { 
    Parent,
    // Home
    
  }
}
</script>

<template>
<h1> Welcome</h1>
<Form/>




</template>

<script>
// import HtmlBiding from './components/HtmlBiding.vue'
// import Parent from './components/Parent.vue' 
// Uncomment Below part for basic looping and if else exampes 
// import Home from './components/Home.vue' 
// import Student from './components/Student.vue'
// import Teacher from './components/Teacher.vue'
// import SimpleForm from './components/SimpleForm.vue'
// import Home from './routing/Home.vue';
import Form from './routing/Form.vue';

// import Services from './routing/Services.vue';
// import axios from 'axios'  




export default {
  name: 'App',
  components: { 
    // Parent,
   //Home
    // HtmlBiding,
    // Student,
    // Teacher,
    // SimpleForm
    // Home,
    Form,
    // Services,
   
  
    },

  data(){
    return {
        base_url:"https://jsonplaceholder.typicode.com/posts"
,
      tab: "SimpleForm",
      list:[]
      
    }
  }
}
</script>

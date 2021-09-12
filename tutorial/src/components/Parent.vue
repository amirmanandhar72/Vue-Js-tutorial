<template>
    <h1> I am parent </h1>

    <ul>
    <li v-for="user in users" :key="user.name">
    <Child :mancheharu="user"/>
    </li>
    </ul>
   
  

</template>

<script>
import Child from './Child.vue'
export default {
    name:'Parent',
    components:{
        Child,
    
    },
    data(){
        return {
            users:[
                {
                    name:"amir",
                    email:"amir@gmail.com"
                },
                 {
                    name:"hada",
                    email:"hada@gmail.com"
                },
                 {
                    name:"duwal",
                    email:"duwal@gmail.com"
                },
            ]
        }
    }

        
    
}
</script>
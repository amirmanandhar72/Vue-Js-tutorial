<template>
    <h1>Service</h1>
    {{id}}
</template>
<script>
import { useRoute } from "vue-router";
export default {
    name:"Service",
    data(){
        return{
            id:null
        }
    },
    mounted(){
        const route=useRoute();
        console.warn("route",route.params.name)
      
    }
}
</script>
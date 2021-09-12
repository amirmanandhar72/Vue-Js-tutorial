<template>
<h2>Student</h2>
<span>my name is :{{name}}</span>
<Teacher :name="names"/>
</template>
<script>
import Teacher from './Teacher.vue'
export default{
    name:"Student",
    components:{
        Teacher,
    },
    props:{
        name:String

    },
    data(){
        return {
            names:"Peter"
        }
    }
}
</script>
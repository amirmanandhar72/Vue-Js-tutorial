<template>
<!-- <form method="POST"> -->
    <h1>This is form for routing pupose</h1>
    <input type="text" name="name" placeholder="EnterName" v-model='name'/><br/>
    {{name}}
    <input type="email" name="email" placeholder="enterEmail" v-model='email'/><br/>
    {{email}}
    <button @click="newfunction()">Submit</button> 
<!-- </form> -->
</template>
<script>
export default {
    name:"Form",
    methods:{
        newfunction(){
            console.log(this.email,this.name)
        }
    }, 
    data(){
        return{
            email:"",
            name:''
        }
    }
}

</script>
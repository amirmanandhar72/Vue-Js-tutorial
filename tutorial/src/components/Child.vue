<template>
<div class="container">
<h1>{{mancheharu.name}}</h1>
<h2>{{mancheharu.email}}</h2>
<button v-on:click="showDetails(mancheharu.name)">See details</button> 
</div>

</template>
<script>
export default{
    name:"Child",
    props:{
        mancheharu:Object,
    },
    methods:{
        showDetails(x){
            alert(x)
        }
    }
}

</script>
<style scoped>
.container{
    background-color:pink;
    padding:10px;
    color:blue;
}
h2{
    border-bottom: 1px solid red;
    font-size:15px;
}
</style>


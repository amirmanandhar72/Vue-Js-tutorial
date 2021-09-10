<template>
{{normalText}}
<h2> {{sathikoname}}</h2>
<h1>{{apedon.name}}</h1>
<h1>{{apedon.address}}</h1>
<button v-on:click="apekofunction()">Malai thicha hai</button>

<button v-on:click="nayafunction()">Console hera hai </button>
</template>
<script>
export default{
    name:'Child',
    props:{
            normalText:String,
            sathikoname:String,
            apedon:Object,
            apekofunction:Function,
            nayafunction:Function

    }
}

</script>

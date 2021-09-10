<template>
    <h1> I am parent </h1>
    <Child :sathikoname="name"   :apedon="mancheharu" :apekofunction="getDetailsOfApeDon" normalText="helloworld" :nayafunction="apelepadyopuipui"/> 
  

</template>

<script>
import Child from './Child.vue'
export default {
    name:'Parent',
    components:{
        Child
    },
    data(){
        return {
            name:"amira",
            no:9900,
            mancheharu:{
                name:"apedon",
                address:"ittachen"
            }
        }}
        ,
    methods:{
            getDetailsOfApeDon(){
                alert("ape live in ittachen")
            },

            apelepadyopuipui(){
                console.log("ape ape k cha ape")
            }
    }
    
}
</script>
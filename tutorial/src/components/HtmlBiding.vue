<template>

<h2>{{text}}</h2>
<div v-html="tag + hellotag + newtag">
    
</div>
</template>
<script>
export default{
    name:"HtmlBiding",
    data(){
        return {
            text:"Amir",
            tag:"<h2>Html biding through export</h2>",
            hellotag:"<h3>This is from export</h3>",
            newtag:"<input type='text'/>name",
            namess:"k cha hajur"
        }
    }
}

</script>
<template>
 <input type="email" placeholder="Email" v-model="email" /><br/>
<input type="password" placeholder="password" v-model="password"/>
<br/>
<button type="button" v-on:click="getData()">Get data</button>
{{email}}
{{password}}
<br/>
<br/>
<h3>Programming language</h3>
<label for="java">Java</label>
<input type ="checkbox" value="java" id="java" v-model="Programming"/>
<label for="php">php</label>
<input type ="checkbox" value="php" id="php" v-model="Programming"/>
<label for="python">python</label>
<input type ="checkbox" value="python" id="python" v-model="Programming"/>

<h4>Programming:{{Programming}}</h4>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1>Gender radio buttion</h1>
<label for="male">Male</label>
<input type ="radio" value="male" id="male" v-model="Gender" name="gender"/>
<label for="female">Female</label>
<input type ="radio" value="female" id="female" v-model="Gender" name="gender"/>
<label for="Other">Other</label>
<input type ="radio" value="other" id="other" v-model="Gender" name="gender"/>
<br/>
The selected Gender is :{{Gender}}



<h1>Profession radiobutton</h1>
<label for="Student">Student</label>
<input type ="radio" value="student" id="student" v-model="profession" name="profession"/>
<label for="dev">Dev</label>
<input type ="radio" value="dev" id="dev" v-model="profession" name="profession"/>
<label for="Other">Other</label>
<input type ="radio" value="other" id="other" v-model="profession" name="profession"/>
<br/>
The selected profession is :{{profession}}

<br/>
<br/>

<h1>Show And Else</h1>
<h3 v-if="show">IF condition in vue</h3>
<h3 v-else> Else condition in vue</h3> 
<br/>
<br/>
<h1>For loop in Vue</h1>
<ul>
<li v-for="item in items" :key="item">
{{item}}</li>
</ul>

<br/>
<br/>
<h2>For loop for array of object</h2>
<ul>
<li v-for="user in users" :key="user.name">
User name is {{user.name}}

User email is {{user.email}}</li>
</ul> 


</template>
<script>
export default{
    name:"Home",

    data(){

    return {
    email:null,
    password:null,
    value:100,
    Programming:[],
    Gender:null,
    profession:null,
    show:false,
    items:["hello","brother","k","cha"],
    users:[{
        name:"amir",
        email:"amir@gmail.com"
    },
    {
        name:"amiraaa",
        email:"amiramir@gmail.com"
    },

    ]

    }},
    methods:{
        getData()
        {
           console.log("done");
        },
        }
}
</script>
<style>
h1 {
    color:"orange";
}
</style>
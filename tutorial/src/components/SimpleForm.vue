<template>
    <form>
    {{form}}
    <br/>
        <label>Email:</label>
    
        <input type="email" placeholder="Enter email" v-model="form.email" />
    
        <br/>
        <label>password:</label>
        <input type="password" placeholder="Enter Password" v-model="form.password" />
    <br/>
        <label>Country:</label>
    
        <select v-model="form.country"> 
    
            <option>Nepal</option>
            <option>US</option> 
             <option>INdia</option> 
             <option>China</option>
        </select>
<br/>
    <h3>Gender</h3>
        <label>Male:</label>
        <input type="radio" name="gender" value="male" v-model="form.gender" />
        <label>FeMale:</label>
        <input type="radio" name="gender" value="female" v-model="form.gender" />

        
        <h3>Programming Language</h3>
         <label>Python</label>
        <input type="checkbox"  value="python" v-model="form.programming_language" />
        <label>PHP</label>
        <input type="checkbox"  value="pHP" v-model="form.programming_language" />
        <label>JAVA</label>
        <input type="checkbox"  value="jAVA" v-model="form.programming_language" />
        <label>. Net</label>
        <input type="checkbox"  value="net" v-model="form.programming_language" />


        
        <button type="submit" v-on:click="SeeDetails()">Log in </button>
    
    
    
    </form>
</template>
<script>
export default {
    name: "SimpleForm",
    data() {
        return {
            form: {
                email: null,
                password: null,
                country: null,
                gender: null,
                programming_language: [],
            },
            error:[]
        }
    },
    methods: {
        SeeDetails() {
            this.error=[]
            for(const item in this.form){
                if(this.form[item]==null  || this.form[item]=="" || this.form[item].length==0){
                    this.error.push(item)
                }
                if(this.error.length==0){
                    alert("data has been submitted");
                }
                  console.warn(this.error)
            }
          
        }
    },

}
</script>

const { createApp } = Vue

createApp({
  data() {
    return {
      mailsList : [],
    }
  },
  methods:{
    getEmail(){
      for(let i = 0; i < 10; i++){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
              this.mailsList.push(response.data.response)
        })
      }
      console.log(this.mailsList)
    }
  },
  created(){
    this.getEmail()
  }
  
}).mount('#app')
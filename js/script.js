const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: []
      }
    },
    created(){
        const emailsI = []
        for(i = 1; i<= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const email = response.data.response;
                this.emails.push(email);
            })
        }
        console.log(this.emails);
    }
  }).mount('#app')
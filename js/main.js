

const { createApp } = Vue

createApp({
    data() {
        return {
            allEmail: []
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                this.allEmail.push(resp.data.response)
            })
        }
    }
}).mount('#app')
const MyNameApp = {
    data() {
        return {
            name: '',
            age: '',
            input_name: '',
            teste_dimas: '',
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()
            //console.log('Caiu aqui!')
            console.log(this.input_name)

            this.name = this.input_name
            this.age = this.teste_dimas
        }
    }
}

Vue.createApp(MyNameApp).mount('#app');
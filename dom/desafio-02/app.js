new Vue({
    el: "#desafio",
    data: {
        valor: ""
    },
    methods: {
        showAlert() {
            alert("Alert!");
        },
        saveValue(event) {
            this.valor = event.target.value;
        }
    }
})
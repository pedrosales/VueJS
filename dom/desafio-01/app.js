new Vue({
    el: "#desafio",
    data: {
        name: "Pedro Ivo",
        age: 32,
        img: "shiba-p.jpg"
    },
    methods: {
        random() {
            return Math.random();
        },
        text() {
            return this.name;
        }
    }
});
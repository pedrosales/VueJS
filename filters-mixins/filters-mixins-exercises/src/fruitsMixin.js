export default {
    methods: {
        add() {
            this.fruits.push(this.fruit);
            this.fruit = "";
        },
    },
    data() {
        return {
            fruit: "",
            fruits: ["banana", "apple", "orange"],
        };
    }
}
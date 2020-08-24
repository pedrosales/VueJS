export default {
    data() {
        return {
            countCharacters: "Pedro é legal"
        }
    },
    computed: {
        whiteSpaces() {
            return this.text.split(" ").join(",");
        },
        countChar() {
            // const words = this.countCharacters.split(" ");
            // let wordsCount = [];

            // words.forEach((word) => {
            //     wordsCount.push(`${word} (${word.length})`);
            // });

            // return wordsCount.join(" ");

            return this.countCharacters.split(" ").map(word => `${word} (${word.length})`).join(" ");
        },
    },
}
new Vue({
    el: "#app",
    data: {
        players: {
            Player: {
                life: 100
            },
            Monster: {
                life: 100
            }
        },
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = this.monsterLife = 100;
            this.logs = [];
        },
        attack(special) {
            this.hurt("monsterLife", 5, 10, special, "Jogador", "Monstro", "player");

            if (this.monsterLife > 0)
                this.hurt("playerLife", 7, 12, false, "Monstro", "Player", "monster");
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`Player healed with ${heal}.`, "player");
        },
        healAndHurt() {
            this.heal(10, 15);
            this.hurt("playerLife", 7, 12, false, "Monstro", "Player", "monster");
        },
        hurt(prop, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);
            this.registerLog(`${source} attacked ${target} with ${hurt}.`, cls)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registerLog(text, cls) {
            this.logs.unshift({
                text,
                cls
            });
        }
    },
    watch: {
        hasResult(value) {
            if (value)
                this.running = false;
        }
    }
});
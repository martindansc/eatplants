class Player {
    constructor(id) {
        this.id = id;
        this.initialized = false;
        this.pos_x = 0;
        this.pos_y = 0;
        this.role = 'none';
    }
}

class Game {
    constructor() {
        this.init();
    }

    init() {
        this.playing = false;
        this.players = {};
        this.actions = {};
    }

    addPlayer(id) {
        this.players[id] = new Player();
    }

    startGame() {
        
    }

    movePlayer(id, new_pos_x, new_pos_y) {

    }

    update(delta) {
        if(this.playing) {
            
        }
    }
}

module.exports = { Game }
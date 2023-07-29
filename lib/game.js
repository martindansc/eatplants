class Player {
    constructor(id) {
        this.id = id;
        this.initialized = false;
        this.pos_x = 0;
        this.pos_y = 0;
        this.role = 'none';
    }
}

class Plant {
    constructor(pos_x, pos_y, type) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.type = type;
    }
}

class Game {
    constructor() {
        this.init();
        this.x_tiles = 64;
        this.y_tiles = 40;
    }

    init() {
        this.playing = false;
        this.players = {};
        this.actions = {};
        this.plants = {};
        
    }

    addPlayer(id) {
        this.players[id] = new Player();
    }

    initPlants(){
        for (let x=0; x<this.x_tiles ; x++){
            for (let y=0; y<this.y_tiles ; y++){
                if(Math.random() < 0.025) {
                    if(!(x in this.plants)) {
                        this.plants[x] = {};
                    }
                    this.plants[x][y] = new Plant(x, y,'plant' + ( Math.floor(Math.random() * 3)+1));
                }
            }
        }
    }

    startGame() {
        this.initPlants();
        console.log(this.plants)
        
    }

    movePlayer(id, new_pos_x, new_pos_y) {

    }

    update(delta) {
        if(this.playing) {
            
        }

        return {plants: this.plants};
    }
}

module.exports = { Game }
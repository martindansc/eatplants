class Player {
    constructor(id, game) {
        this.id = id;
        this.pos_x = Math.floor(Math.random() * game.x_tiles);
        this.pos_y = Math.floor(Math.random() * game.x_tiles);
        this.role = 'none';
<<<<<<< HEAD
        this.alive = false;
=======
        this.score = 0;
>>>>>>> de0c529 (print players)
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
        this.players[id] = new Player(id, this);
        console.log("player added")
        console.log(this.players)
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
<<<<<<< HEAD
        console.log(this.plants);
=======
        this.addPlayer("hola");
        
>>>>>>> de0c529 (print players)
    }

    addAction(id, action_data) {
        if(!this.playing) return;
        if(!this.alive) return;

        action_data.player = this.players[id];

        this.actions[id] = action_data;
    }

    update(delta) {
        if(this.playing) {
            for(const id_player in this.actions) {
                
            }
        }

        return {plants: this.plants, players: this.players};
    }
    
}

module.exports = { Game }
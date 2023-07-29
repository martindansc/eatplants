class GameHelpers {
    static cellHasPlant(pos_x, pos_y, game) {
        for(const x in game.plants) {
            for(const y in game.plants[x]) {
                const plant = game.plants[x][y];
                const diff_x = plant.pos_x - pos_x;
                const diff_y = plant.pos_y - pos_y;
                if(diff_x >= 0 && diff_x < 2 && diff_y >= 0 && diff_y < 2) {
                    return plant;
                }
            }
        }
        return null;
    }

    static cellHasPlayers(pos_x, pos_y, game) {
        const hit_players = [];
        for(const player_id in game.players){
            const player = game.players[player_id];
            const diff_x = player.pos_x - pos_x;
            const diff_y = player.pos_y - pos_y;
            if(diff_x >= 0 && diff_x < 1 && diff_y >= 0 && diff_y < 1) {
                hit_players.push(player);
            }
        }

        return hit_players;
    }
}

module.exports = {GameHelpers}
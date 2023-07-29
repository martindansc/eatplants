actions = {
    moveBug: function(player, action, game) {
        if(player.role != "bug") {
            console.log("Trying to cheat?");
            return;
        };

        const dir = action.direction;

        if(dir == "up" && player.pos_x > 0) {
            player.pos_x -= 1;
        }
        else if(dir == "down" && player.pos_x < game.x_tiles - 1) {
            player.pos_x += 1;

        }
        else if(dir == "rigth" && player.pos_y < game.y_tiles - 1) {
            player.pos_y += 1;
        }
        else if(dir == "left" && pos_y > 0) {
            player.pos_y -= -1;
        }
        else {
            console.log("Invalid movement direction");
        }

        console.log("Player updated", game.player);
    }
}

module.exports = [actions];

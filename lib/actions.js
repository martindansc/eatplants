actions = {
	moveBug: function(player, action, game) {
		if(player.role != "bug") {
			console.log("Trying to cheat?");
			return;
		}

		const dir = action.direction;

		if(dir == "left" && player.pos_x > 0) {
			player.pos_x -= 1;
		}
		else if(dir == "right" && player.pos_x < game.x_tiles - 1) {
			player.pos_x += 1;

		}
		else if(dir == "down" && player.pos_y < game.y_tiles - 1) {
			player.pos_y += 1;
		}
		else if(dir == "up" && player.pos_y > 0) {
			player.pos_y -= 1;
		}

		console.log("Player updated", player);
	},
	kill: function(player, action, game) {
		if(player.role != "hunter") {
			console.log("Trying to cheat?");
			return;
		}

		for (key in game.players) {
			const player = game.players[key];
			if(Math.abs(player.x - action.pos_x ) + Math.abs(player.y == action.pos_y) < 2) {
				player.alive = false;
			}
		}
	}
}

module.exports = { actions };

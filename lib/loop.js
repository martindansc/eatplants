
function startLoop(game) {
    const tickLengthMs = 1000 / 20
    var previousTick = Date.now()
    var actualTicks = 0

    const gameLoop = () => {
        var now = Date.now()

        actualTicks++
        if (previousTick + tickLengthMs <= now) {
            const delta = (now - previousTick) / 1000
            previousTick = now

            game.update(delta);

            console.log('delta', delta, '(target: ' + tickLengthMs +' ms)', 'node ticks', actualTicks)
            actualTicks = 0;
        }

        if (now - previousTick + 16 < tickLengthMs) {
            setTimeout(gameLoop, now - previousTick - 16)
        } else {
            setImmediate(gameLoop)
        }
    }

    gameLoop();
}

module.exports = { startLoop }

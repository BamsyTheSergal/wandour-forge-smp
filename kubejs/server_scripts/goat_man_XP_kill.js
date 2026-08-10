EntityEvents.death("goat_man:goat_man", event => {
    let player = event.source.player

    if (player) {
        player.giveExperiencePoints(12000)
    }
})
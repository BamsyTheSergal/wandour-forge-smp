ItemEvents.entityInteracted(event => {
    const player = event.player
    const target = event.target
    if (target.type != 'minecraft:player') return
    if (target.name.string != 'Wandour') return
    if (player.distanceToEntity(target) > 1.3) return
    player.potionEffects.add('minecraft:instant_health', 1, 0)
    player.server.runCommandSilent(
        `playsound minecraft:item.honey_bottle.drink player @a ${target.x} ${target.y} ${target.z} 2 1`
    )
    player.server.runCommandSilent(
        `particle minecraft:heart ${target.x} ${target.y + 1} ${target.z} 0.4 0.5 0.4 0.1 6`
    )
})
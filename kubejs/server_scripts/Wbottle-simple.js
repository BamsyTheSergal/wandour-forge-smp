ItemEvents.entityInteracted(event => {
    const player = event.player
    const target = event.target
    const item = event.item
    if (target.type != 'minecraft:player') return
    if (target.name.string != 'Wandour') return
    if (player.distanceToEntity(target) > 1.3) return
    if (item.id != 'minecraft:glass_bottle') return
    item.count--
    player.give(
        Item.of('vintagedelight:nut_milk_bottle')
            .withName("Dragon Nut Milk")
    )
    player.server.runCommandSilent(
        `playsound minecraft:entity.cow.milk player @a ${target.x} ${target.y} ${target.z} 2 1`
    )
    player.server.runCommandSilent(
        `particle minecraft:heart ${target.x} ${target.y + 1} ${target.z} 0.4 0.5 0.4 0.1 6`
    )
})
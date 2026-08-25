EntityEvents.spawned(event => {
    let entity = event.entity

    if (entity.type == 'minecraft:experience_orb') {
        entity.mergeNbt({
            Value: entity.nbt.Value * 3
        })
    }
})

LootJS.modifiers(event => {
    event
        .addLootTypeModifier(LootType.ENTITY)
        .matchEntity(entity => {
            entity.isMonster(true)
        })
        .killedByPlayer()
        .randomChance(0.25)
        .addWeightedLoot([
            Item.of('heart_crystals:heart_crystal_dust').withChance(90),
            Item.of('heart_crystals:heart_crystal_shard').withChance(8),
            Item.of('heart_crystals:heart_crystal').withChance(2)
        ])
    event
        .addEntityLootModifier("goat_man:goat_man")
        .pool(pool => {
            pool.addLoot("heart_crystals:heart_crystal")
            pool.limitCount([1, 8])
        })
        .pool(pool => {
            pool.addLoot("minecraft:netherite_ingot")
            pool.limitCount([1, 12])
        })
        .pool(pool => {
            pool.addLoot("minecraft:nether_star")
            pool.limitCount([1, 8])
        })
    event
        .addEntityLootModifier("minecraft:wither")
        .pool(pool => {
            pool.addLoot("heart_crystals:heart_crystal")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.addLoot("minecraft:nether_star")
            pool.limitCount([1, 2])
        })
})
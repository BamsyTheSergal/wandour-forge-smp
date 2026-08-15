LootJS.modifiers(event => {
    event
        .addEntityLootModifier("minecraft:ender_dragon")
        .pool(pool => {
            pool.addLoot("heart_crystals:heart_crystal")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.addLoot("heart_crystals:heart_crystal_shard")
            pool.limitCount([4, 32])
        })
        .pool(pool => {
            pool.addLoot("heart_crystals:heart_crystal_dust")
            pool.limitCount([16, 48])
        })
        .pool(pool => {
            pool.randomChance(0.50)
            pool.addLoot("minecraft:dragon_breath")
            pool.limitCount([8, 24])
        })
        .pool(pool => {
            pool.addLoot("minecraft:dragon_egg")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.randomChance(0.50)
            pool.addLoot("minecraft:dragon_head")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.randomChance(0.75)
            pool.addLoot("ends_delight:dragon_tooth")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.randomChance(0.45)
            pool.addLoot("ends_delight:non_hatchable_dragon_egg")
            pool.limitCount([2, 10])
        })
        .pool(pool => {
            pool.addLoot("ends_delight:dragon_leg")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.addLoot("ends_delight:raw_dragon_meat")
            pool.limitCount([12, 32])
        })
        .pool(pool => {
            pool.randomChance(0.80)
            pool.addLoot("irons_spellbooks:dragonskin")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.randomChance(0.85)
            pool.addLoot("amendments:dragon_charge")
            pool.limitCount([1, 16])
        })
        .pool(pool => {
            pool.randomChance(0.50)
            pool.addLoot("irons_spellbooks:epic_ink")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.randomChance(0.20)
            pool.addLoot("irons_spellbooks:legendary_ink")
            pool.limitCount([1, 1])
        })
})
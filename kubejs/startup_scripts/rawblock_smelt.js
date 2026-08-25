ServerEvents.recipes(event => {
    event.smelting(
        'minecraft:iron_block',
        'minecraft:raw_iron_block'
    )
    .xp(6.3)
    .cookingTime(1600)

    event.smelting(
        'minecraft:copper_block',
        'minecraft:raw_copper_block'
    )
    .xp(6.3)
    .cookingTime(1600)

    event.smelting(
        'minecraft:gold_block',
        'minecraft:raw_gold_block'
    )
    .xp(6.3)
    .cookingTime(1600)
    event.blasting(
        'minecraft:iron_block',
        'minecraft:raw_iron_block'
    )
    .xp(6.3)
    .cookingTime(800)

    event.blasting(
        'minecraft:copper_block',
        'minecraft:raw_copper_block'
    )
    .xp(6.3)
    .cookingTime(800)

    event.blasting(
        'minecraft:gold_block',
        'minecraft:raw_gold_block'
    )
    .xp(6.3)
    .cookingTime(800)
})

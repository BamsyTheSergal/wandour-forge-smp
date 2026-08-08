// priority: 0
// ae
// Visit the wiki for more info - https://kubejs.com/
ServerEvents.tags('item', event => {
  // Add items to tags
  event.add('minecraft:sponge_crafting_material', 'minecraft:tube_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:brain_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:bubble_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:fire_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:horn_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_tube_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_brain_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_bubble_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_fire_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_horn_coral_block')

  event.add('sliceanddice:allowed_tools', '#minecraft:pickaxes')
  // Remove items from tags
  event.remove('minecraft:coral_blocks', 'minecraft:tube_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:brain_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:bubble_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:fire_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:horn_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_tube_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_brain_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_bubble_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_fire_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_horn_coral_block')
});
ServerEvents.recipes(event => {
  // --- Recipes ---
  event.shapeless('minecraft:sponge', ['#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material']).id('bamsy:coral_to_sponge');
  event.shapeless('farmersdelight:rich_soil_farmland', ['farmersdelight:rich_soil', '#minecraft:hoes']).id('bamsy:hoe_richsoil_to_richfarmland');
});
ServerEvents.recipes(event => {
  event.recipes.createCrushing(
    [
      Item.of('irons_spellbooks:arcane_essence').withChance(0.05),
                               Item.of('irons_spellbooks:arcane_essence').withChance(0.8)
    ],
    'kubejs:arcane_shard')
});
ServerEvents.recipes(event => {
  event.recipes.createMixing(
    Fluid.of('irons_spellbooks:common_ink', 500),
                             [
                               '2x minecraft:copper_ingot',
                             Fluid.of('create_enchantment_industry:ink', 250),
                             Fluid.of('create_wizardry:mana', 250)
                             ]
  )
});
LootJS.modifiers((event) => {
  event.addBlockLootModifier("kubejs:arcane_essence_ore").removeLoot("kubejs:arcane_essence_ore").addLoot(LootEntry.of("kubejs:arcane_shard").limitCount([3, 5])).applyOreBonus("minecraft:fortune");
});

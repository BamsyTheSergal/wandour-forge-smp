Platform.mods.kubejs.name = 'Bamsy Mod'

StartupEvents.registry('block', event => {
  event.create('arcane_essence_ore')
    .displayName('Arcane Ore')
    .soundType('nether_ore')
    .hardness(3)
    .resistance(2)
    .tagBlock('forge:ores/arcane_essence')
    .requiresTool(true)
    .tagBlock('forge:ores')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
})


StartupEvents.registry('item', event => {
  event.create('arcane_shard')
  .displayName('Arcane Shard')
  .tooltip('This is a shard, seems it needs to be processed further...')
  .rarity('rare')
  .glow(true)
  .maxStackSize(64)
  event.create('carbon_rich_iron')
  .displayName('Carbon Rich Iron')
  .tooltip('This is a raw bit of iron, seems it needs to be processed further...')
  .rarity('uncommon')
  .maxStackSize(64)
})

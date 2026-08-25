ServerEvents.recipes((event) => {
    const { tconstruct } = event.recipes;
    //steel
    tconstruct.melting(Fluid.of("tconstruct:molten_steel", 120), "kubejs:carbon_rich_iron").temperature(900).time(88);


});

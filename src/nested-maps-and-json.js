const monsters = [
	{
        name: 'Cacodemon',
        health: 400,
        attacks: [{type: 'Plasma Ball', damage: { min: 10, max: 60 } }],
    },
    {
        name: 'Baron of Hell',
        health: 1000,
        attacks: [
            { type: 'claw', damage: {min: 15, max: 75 } },
            { type: 'fireball', damage: { min: 15, max: 75 } },
        ],
    },
    {
        name: 'Cyberdemon',
        health: 4000,
        attacks: [{ type: 'rocket', damage: { min: 20, max: 200 } }],
    },
    {
        name: 'Hell Knight',
        health: 800,
        attacks: [{ type: 'Claw', damage: { min: 15, max: 75 } }],
    },
    {
        name: 'Imp',
        health: 200,
        attacks: [{ type: 'Demon Fire', damage: {min: 10, max: 100 } }],
    },
    {
        name: 'Lost Soul',
        health: 100,
        attacks: [{ type: 'Charge', damage: { min: 5, max: 25 } }],
    },
    {
        name: 'Pinky',
        health: 300,
        attacks: [{type: 'Rocket Barrage', damage: {min: 5, max: 50 } }],
    },
    {
        name: 'Revenant',
        health: 500,
        attacks: [{type: 'Rocket Barrage', damage: { min: 10, max: 100 } }],
    },
    {
        name: 'Spectre',
        health: 200,
        attacks: [{type: 'Enraged Lunge', damage: { min: 5, max: 50 } }],
    },
    {
        name: 'Spider Mastermind',
        health: 2000,
        attacks: [{ type: 'Chaingun', damage: { min: 10, max: 100 } }],
    },
    {
        name: 'Arch Vile',
        health: 1000,
        attacks: [{ type: 'Fireball', damage: { min: 25, max: 100 } }],
    },
    {
        name: 'Zombieman',
        health: 200,
        attacks: [{ type: 'Shotgun', damage: { min: 5, max: 50 } }],
    },
]

const clonedMonsters = structuredClone(monsters)

const monstersWithEnhancedDamage = clonedMonsters.map((monster) => {
	const localMonster = { ...monster }

    localMonster.attacks.map((attack) => {
        attack.damage.max = attack.damage.max + 15

      return attack  
    })
    return monster
});

console.log(JSON.stringify(monsters, null, 4), "original monsters");
console.log(JSON.stringify(monstersWithEnhancedDamage, null, 2));
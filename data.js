// =============================================================================
// data.js — POKED Pokémon Data
// Gen 9 Scarlet/Violet Doubles OU / VGC Reference
// All 50 Pokémon used in competitive play.
//
// HOW TO USE:
//   Include this file with <script src="data.js"></script>
//   Then access the global `POKEMON` array anywhere in your JS.
//
// STRUCTURE OF EACH OBJECT:
//   id             — Pokédex-style number (1–50, site-internal ordering)
//   name           — Pokémon name (string)
//   types          — Array of type strings (e.g. ["Fire", "Dark"])
//   baseStats      — Object: { hp, atk, def, spa, spd, spe } (numbers)
//   roles          — Array of role strings
//   abilities      — String describing common abilities
//   items          — Array of common item strings
//   moves          — Array of common move strings
//   teraTypes      — Array of preferred Tera Type strings
//   strengths      — String describing competitive strengths
//   weaknesses     — String describing competitive weaknesses
//   checksAndCounters — String (general checks/counters info)
//   pokemonCounters — Array of specific Pokémon counter names
//   synergies      — Array of teammate/synergy Pokémon names
//   playstyle      — String describing how to use this Pokémon
//   tier           — Meta tier string: "S", "A+", "A", "B+", "B", "C+", "C"
// =============================================================================

const POKEMON = [
  // ─────────────────────────────────────────────────────────────────────────
  // #1 — INCINEROAR
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Incineroar",
    types: ["Fire", "Dark"],
    baseStats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    roles: ["Fake Out Support", "Intimidate Pivot", "Redirector-lite"],
    abilities: "Intimidate",
    items: ["Safety Goggles", "Sitrus Berry", "Assault Vest", "Shuca Berry"],
    moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Knock Off", "Will-O-Wisp", "Snarl", "Taunt"],
    teraTypes: ["Grass", "Ghost", "Water", "Fire"],
    strengths: "Intimidate + Fake Out + Parting Shot give constant tempo; bulky; fits almost any team",
    weaknesses: "Slow; weak to Ground, Water, Rock, Fighting; low damage output",
    checksAndCounters: "Water/Ground types, Defiant/Competitive/Mirror Armor/Clear Body/Inner Focus (ignore Intimidate/Fake Out); Ghost types vs Fake Out",
    pokemonCounters: ["Landorus-Therian", "Urshifu-Rapid-Strike"],
    synergies: ["Rillaboom", "Flutter Mane"],
    playstyle: "Pivot-and-chip support; Fake Out turn 1, Intimidate switching, Parting Shot to reset momentum",
    tier: "S"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #2 — RILLABOOM
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    name: "Rillaboom",
    types: ["Grass"],
    baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
    roles: ["Grassy Terrain Attacker", "Fake Out + Priority Support"],
    abilities: "Grassy Surge",
    items: ["Assault Vest", "Miracle Seed", "Choice Band", "Sitrus Berry"],
    moves: ["Grassy Glide", "Fake Out", "Wood Hammer", "High Horsepower", "U-turn", "Knock Off", "Drum Beating"],
    teraTypes: ["Fire", "Water", "Grass", "Poison"],
    strengths: "Priority Grassy Glide in terrain; terrain halves Earthquake and heals; strong Fake Out",
    weaknesses: "Weak to Fire, Flying, Ice, Poison, Bug; Wood Hammer recoil",
    checksAndCounters: "Flying types (Tornadus, Pelipper), Fire types (Torkoal, Chi-Yu), Poison types; Heat/Flying Tera",
    pokemonCounters: ["Tornadus", "Torkoal"],
    synergies: ["Incineroar", "Urshifu-Rapid-Strike"],
    playstyle: "Terrain setter that doubles as a fast, priority-based damage dealer",
    tier: "S"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #3 — FLUTTER MANE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Flutter Mane",
    types: ["Ghost", "Fairy"],
    baseStats: { hp: 55, atk: 55, def: 55, spa: 135, spd: 135, spe: 135 },
    roles: ["Fast Special Attacker", "Speed Control (Icy Wind/Tailwind)", "Choice Scarf Cleaner"],
    abilities: "Protosynthesis",
    items: ["Booster Energy", "Choice Specs", "Focus Sash", "Choice Scarf"],
    moves: ["Moonblast", "Shadow Ball", "Dazzling Gleam", "Icy Wind", "Protect", "Taunt", "Thunderbolt"],
    teraTypes: ["Fairy", "Ghost", "Grass", "Water"],
    strengths: "Fastest threat with huge special power; Ghost/Fairy coverage hits nearly everything",
    weaknesses: "Extremely frail; low HP/defenses; weak to Ghost, Steel, Ground, Fire, Dark",
    checksAndCounters: "Fake Out, Dark types (Kingambit, Grimmsnarl), Steel types, priority moves like Sucker Punch",
    pokemonCounters: ["Kingambit", "Grimmsnarl"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Glass-cannon sweeper that thrives behind Fake Out and redirection",
    tier: "S"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #4 — URSHIFU-RAPID-STRIKE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Urshifu-Rapid-Strike",
    types: ["Water", "Fighting"],
    baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    roles: ["Physical Wallbreaker", "Water/Fighting Attacker", "Surging Strikes Crit Sweeper"],
    abilities: "Unseen Fist",
    items: ["Mystic Water", "Focus Sash", "Choice Scarf", "Shuca Berry"],
    moves: ["Surging Strikes", "Close Combat", "Aqua Jet", "U-turn", "Protect", "Detect", "Ice Spinner"],
    teraTypes: ["Water", "Fighting", "Grass", "Fire"],
    strengths: "Always-crit Surging Strikes ignores boosts and breaks Protect; Aqua Jet priority",
    weaknesses: "Weak to Flying, Psychic, Fairy, Electric, Grass; Close Combat drops defenses",
    checksAndCounters: "Flying/Fairy/Psychic types (Tornadus, Flutter Mane, Farigiraf), Intimidate, Fake Out; Amoonguss redirect",
    pokemonCounters: ["Tornadus", "Flutter Mane"],
    synergies: ["Rillaboom", "Tornadus"],
    playstyle: "Consistent heavy hitter, hits through Protect, wins mirror and trades via priority",
    tier: "S"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #5 — AMOONGUSS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Amoonguss",
    types: ["Grass", "Poison"],
    baseStats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
    roles: ["Redirection Support (Rage Powder)", "Spore Pivot", "Sleep Support"],
    abilities: "Regenerator (Effect Spore)",
    items: ["Rocky Helmet", "Sitrus Berry", "Covert Cloak", "Mental Herb"],
    moves: ["Rage Powder", "Spore", "Pollen Puff", "Clear Smog", "Protect", "Sludge Bomb"],
    teraTypes: ["Water", "Dark", "Fairy", "Steel"],
    strengths: "Redirects attacks for sweepers; Spore sleeps threats; strong Regenerator pivot",
    weaknesses: "Weak to Fire, Flying, Ice, Psychic; slow; low damage",
    checksAndCounters: "Fire/Flying/Poison-spamming, Grass-immune ability Overcoat, Safety Goggles, Fire coverage and Taunt",
    pokemonCounters: ["Torkoal", "Chi-Yu"],
    synergies: ["Flutter Mane", "Iron Hands"],
    playstyle: "Defensive supporter who protects partners and disrupts opposing plans",
    tier: "S"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #6 — LANDORUS-THERIAN
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    name: "Landorus-Therian",
    types: ["Ground", "Flying"],
    baseStats: { hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91 },
    roles: ["Intimidate Pivot", "Physical Attacker", "Spread-Damage Attacker"],
    abilities: "Intimidate",
    items: ["Choice Scarf", "Assault Vest", "Life Orb", "Sitrus Berry"],
    moves: ["Earthquake", "Rock Slide", "U-turn", "Stomping Tantrum", "Protect", "Sludge Bomb", "Taunt"],
    teraTypes: ["Steel", "Water", "Flying", "Ghost"],
    strengths: "Intimidate on switch, strong bulk and speed, hits very hard",
    weaknesses: "Weak to Water, Ice, Grass; Earthquake hits partners",
    checksAndCounters: "Ice Beam/Icy Wind, Water types, Intimidate immunity (Inner Focus/Clear Body), Flying-types and Levitate",
    pokemonCounters: ["Iron Bundle", "Rillaboom"],
    synergies: ["Tornadus", "Amoonguss"],
    playstyle: "Pivot that either supports with Intimidate or breaks teams with Earthquake",
    tier: "S"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #7 — TORNADUS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Tornadus",
    types: ["Flying"],
    baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
    roles: ["Tailwind Speed Control", "Prankster Support (Taunt, Rain Dance)", "Special Attacker"],
    abilities: "Prankster (Defiant)",
    items: ["Focus Sash", "Covert Cloak", "Sitrus Berry", "Safety Goggles"],
    moves: ["Tailwind", "Bleakwind Storm", "Taunt", "Rain Dance", "Protect", "Icy Wind", "Heat Wave"],
    teraTypes: ["Ghost", "Water", "Steel", "Flying"],
    strengths: "Priority Tailwind/Taunt; strong spread damage; great speed control",
    weaknesses: "Frail; weak to Electric, Rock, Ice; Prankster fails vs Dark types",
    checksAndCounters: "Dark types (Grimmsnarl, Kingambit), Chi-Yu, Electric/Rock Moves; priority attackers like Fake Out",
    pokemonCounters: ["Grimmsnarl", "Tyranitar"],
    synergies: ["Urshifu-Rapid-Strike", "Landorus-Therian"],
    playstyle: "Speed control support that sets Tailwind and Taunt turns before dying or Protecting",
    tier: "A+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #8 — OGERPON-WELLSPRING
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    name: "Ogerpon-Wellspring",
    types: ["Grass", "Water"],
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    roles: ["Physical Attacker", "Rain Booster", "Follow Me Support"],
    abilities: "Water Absorb",
    items: ["Wellspring Mask (fixed)"],
    moves: ["Ivy Cudgel", "Follow Me", "Horn Leech", "Spiky Shield", "Play Rough", "Knock Off", "U-turn"],
    teraTypes: ["Water", "Grass"],
    strengths: "Strong Terastallized offense, fast, Follow Me for redirection, resists Water/Ground",
    weaknesses: "Weak to Flying, Poison, Bug, Ice, Fire (Tera dependent); one-time Tera",
    checksAndCounters: "Flying types (Tornadus), Fire attacks, Poison types; Tera Blast Fire",
    pokemonCounters: ["Tornadus", "Torkoal"],
    synergies: ["Incineroar", "Pelipper"],
    playstyle: "Fast Tera-ing attacker that redirects and applies pressure",
    tier: "A+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #9 — OGERPON-HEARTHFLAME
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    name: "Ogerpon-Hearthflame",
    types: ["Grass", "Fire"],
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    roles: ["Sun-based Physical Attacker", "Follow Me Support"],
    abilities: "Mold Breaker",
    items: ["Hearthflame Mask (fixed)"],
    moves: ["Ivy Cudgel", "Follow Me", "Horn Leech", "Spiky Shield", "Wood Hammer", "Knock Off", "Swords Dance"],
    teraTypes: ["Fire"],
    strengths: "Huge damage with Ivy Cudgel; Mold Breaker ignores Fake Out-blocking abilities",
    weaknesses: "Weak to Water, Rock, Flying, Ground; one-time Tera",
    checksAndCounters: "Water types, Rock/Ground attackers, Rain",
    pokemonCounters: ["Urshifu-Rapid-Strike", "Landorus-Therian"],
    synergies: ["Torkoal", "Incineroar"],
    playstyle: "Brute force attacker that benefits from Sun support",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #10 — URSALUNA-BLOODMOON
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    name: "Ursaluna-Bloodmoon",
    types: ["Normal", "Ground"],
    baseStats: { hp: 113, atk: 70, def: 120, spa: 135, spd: 65, spe: 52 },
    roles: ["Special Wallbreaker", "Trick Room Attacker"],
    abilities: "Mind's Eye",
    items: ["Assault Vest", "Life Orb", "Choice Specs", "Silk Scarf"],
    moves: ["Blood Moon", "Hyper Voice", "Earth Power", "Vacuum Wave", "Protect", "Swords Dance"],
    teraTypes: ["Normal", "Ground", "Fire"],
    strengths: "Massive Special Attack; Blood Moon spams freely; strong bulk",
    weaknesses: "Weak to Fighting, Ground, Water; no real spreading; slow",
    checksAndCounters: "Fighting types (Iron Hands), Ghost-Tera, Fake Out, Armor Tail",
    pokemonCounters: ["Iron Hands", "Annihilape"],
    synergies: ["Farigiraf", "Torkoal"],
    playstyle: "Hard-hitting Trick Room-friendly special bear",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #11 — CHIEN-PAO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    name: "Chien-Pao",
    types: ["Dark", "Ice"],
    baseStats: { hp: 80, atk: 120, def: 80, spa: 90, spd: 65, spe: 135 },
    roles: ["Fast Physical Sweeper", "Sword of Ruin Support", "Snow Offense"],
    abilities: "Sword of Ruin",
    items: ["Focus Sash", "Life Orb", "Choice Band", "Clear Amulet"],
    moves: ["Icicle Crash", "Sucker Punch", "Sacred Sword", "Protect", "Ice Shard", "Throat Chop"],
    teraTypes: ["Dark", "Fighting", "Ice", "Ghost"],
    strengths: "Huge speed and offense; Sword of Ruin lowers Defense of all other Pokemon",
    weaknesses: "Frail; weak to Fire, Fighting, Rock, Steel",
    checksAndCounters: "Fire types (Torkoal, Chi-Yu), Fighting types, Steel types, Fake Out",
    pokemonCounters: ["Torkoal", "Iron Hands"],
    synergies: ["Rillaboom", "Incineroar"],
    playstyle: "Fast Snow Warning sweeper that uses Sword of Ruin to break walls",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #12 — CHI-YU
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    name: "Chi-Yu",
    types: ["Fire", "Dark"],
    baseStats: { hp: 55, atk: 80, def: 80, spa: 135, spd: 120, spe: 100 },
    roles: ["Fire/Dark Special Attacker", "Spread Fire Blaster", "Beads of Ruin Support"],
    abilities: "Beads of Ruin",
    items: ["Choice Specs", "Choice Scarf", "Focus Sash", "Life Orb"],
    moves: ["Heat Wave", "Dark Pulse", "Overheat", "Snarl", "Protect", "Flamethrower"],
    teraTypes: ["Fire", "Dark", "Ghost"],
    strengths: "Strong special coverage; Beads of Ruin reduces SpD for the whole field",
    weaknesses: "Weak to Water, Fighting, Ground, Rock",
    checksAndCounters: "Ground/Water types, Fake Out, Fighting moves, Rock Slide",
    pokemonCounters: ["Landorus-Therian", "Urshifu-Rapid-Strike"],
    synergies: ["Torkoal", "Rillaboom"],
    playstyle: "Blast-everything special sweeper ideal for fast offense",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #13 — IRON HANDS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    name: "Iron Hands",
    types: ["Fighting", "Electric"],
    baseStats: { hp: 154, atk: 140, def: 108, spa: 50, spd: 68, spe: 50 },
    roles: ["Bulky Attacker", "Fake Out + Wide Guard Support", "Trick Room Attacker"],
    abilities: "Quark Drive",
    items: ["Assault Vest", "Booster Energy", "Sitrus Berry"],
    moves: ["Drain Punch", "Wild Charge", "Fake Out", "Heavy Slam", "Close Combat", "Volt Switch", "Protect"],
    teraTypes: ["Grass", "Water", "Fighting"],
    strengths: "Huge HP, strong damage, Fake Out; Drain Punch heals",
    weaknesses: "Weak to Fighting, Ground, Fire, Psychic; slow",
    checksAndCounters: "Ground/Fire types, Psychic types (Farigiraf), Landorus Intimidate",
    pokemonCounters: ["Landorus-Therian", "Farigiraf"],
    synergies: ["Amoonguss", "Farigiraf"],
    playstyle: "Tanky attacker who attacks and supports via Fake Out",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #14 — FARIGIRAF
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    name: "Farigiraf",
    types: ["Normal", "Psychic"],
    baseStats: { hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 60 },
    roles: ["Trick Room Setter", "Psychic Spammer", "Armor Tail Support"],
    abilities: "Armor Tail (Cud Chew)",
    items: ["Sitrus Berry", "Safety Goggles", "Electric Seed", "Choice Specs"],
    moves: ["Trick Room", "Psychic", "Hyper Voice", "Helping Hand", "Protect", "Foul Play", "Dazzling Gleam"],
    teraTypes: ["Fairy", "Water", "Dark", "Normal"],
    strengths: "Blocks priority; sets Trick Room; deals heavy spread/Psychic damage",
    weaknesses: "Weak to Bug, Dark, Ghost; slow",
    checksAndCounters: "Dark/Ghost types, Taunt, Fake Out, Dark Tera",
    pokemonCounters: ["Kingambit", "Grimmsnarl"],
    synergies: ["Ursaluna-Bloodmoon", "Torkoal"],
    playstyle: "Trick Room setter that protects teammates from priority",
    tier: "A+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #15 — TORKOAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 15,
    name: "Torkoal",
    types: ["Fire"],
    baseStats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
    roles: ["Sun Setter", "Eruption Spammer", "Trick Room Special Attacker"],
    abilities: "Drought",
    items: ["Charcoal", "Choice Specs", "Sitrus Berry"],
    moves: ["Eruption", "Heat Wave", "Earth Power", "Protect", "Yawn", "Body Press", "Overheat"],
    teraTypes: ["Fire", "Grass", "Water"],
    strengths: "Auto-Sun; Eruption deals massive spread damage; good defense",
    weaknesses: "Weak to Water, Rock, Ground; very slow; low HP",
    checksAndCounters: "Water types, Rock attackers, Fake Out, Rain/Sandstorm override",
    pokemonCounters: ["Urshifu-Rapid-Strike", "Pelipper"],
    synergies: ["Ogerpon-Hearthflame", "Chi-Yu"],
    playstyle: "Slow Sun setter that blasts the field",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #16 — GHOLDENGO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 16,
    name: "Gholdengo",
    types: ["Steel", "Ghost"],
    baseStats: { hp: 87, atk: 60, def: 95, spa: 133, spd: 91, spe: 84 },
    roles: ["Special Attacker", "Bulky Pivot", "Good as Fire/Ghost-immune"],
    abilities: "Good as Gold",
    items: ["Choice Specs", "Choice Scarf", "Air Balloon", "Life Orb"],
    moves: ["Make It Rain", "Shadow Ball", "Nasty Plot", "Protect", "Trick", "Thunderbolt", "Focus Blast"],
    teraTypes: ["Water", "Fairy", "Fire", "Flying"],
    strengths: "Immune to status/Fake Out-style opposing moves; strong Special Attack; good typing",
    weaknesses: "Weak to Fire, Ground, Ghost, Dark",
    checksAndCounters: "Dark types, Fire/Ground types, Dark Moves like Knock Off",
    pokemonCounters: ["Kingambit", "Landorus-Therian"],
    synergies: ["Rillaboom", "Urshifu-Rapid-Strike"],
    playstyle: "Wall-ignoring special attacker that cannot be taunted or burned",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #17 — KINGAMBIT
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 17,
    name: "Kingambit",
    types: ["Dark", "Steel"],
    baseStats: { hp: 100, atk: 135, def: 120, spa: 60, spd: 85, spe: 50 },
    roles: ["Defiant Attacker", "Supreme Overlord Sweeper", "Bulky Wallbreaker"],
    abilities: "Defiant (Supreme Overlord)",
    items: ["Assault Vest", "Black Glasses", "Focus Sash", "Lum Berry"],
    moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Swords Dance", "Protect", "Low Kick"],
    teraTypes: ["Dark", "Flying", "Ghost"],
    strengths: "Defiant punishes Intimidate; Supreme Overlord gets stronger as allies faint",
    weaknesses: "Weak to Fighting, Fire, Ground; slow",
    checksAndCounters: "Fighting/Ground/Fire attackers, Tera Fighting",
    pokemonCounters: ["Iron Hands", "Landorus-Therian"],
    synergies: ["Incineroar", "Grimmsnarl"],
    playstyle: "Late-game finisher that grows stronger as allies faint",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #18 — DRAGONITE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 18,
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    roles: ["Multiscale Bulky Attacker", "Dragon Dance/Tailwind Sweeper"],
    abilities: "Multiscale (Inner Focus)",
    items: ["Loaded Dice", "Lum Berry", "Choice Band", "Sitrus Berry"],
    moves: ["Extreme Speed", "Dragon Dance", "Dragon Claw", "Fire Punch", "Protect", "Tailwind"],
    teraTypes: ["Normal", "Fairy", "Fire", "Flying"],
    strengths: "Priority Extreme Speed; Multiscale for bulk; no Intimidate issues",
    weaknesses: "Weak to Ice, Rock, Dragon, Fairy",
    checksAndCounters: "Ice/Fairy attackers, Rock Slide, Fake Out chip",
    pokemonCounters: ["Iron Bundle", "Tyranitar"],
    synergies: ["Amoonguss", "Rillaboom"],
    playstyle: "Bulky setup attacker that cleans up with Extreme Speed",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #19 — ARCHALUDON
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 19,
    name: "Archaludon",
    types: ["Steel", "Dragon"],
    baseStats: { hp: 90, atk: 105, def: 130, spa: 125, spd: 65, spe: 85 },
    roles: ["Rain Special Attacker", "Electro Shot Sweeper", "Bulky Steel"],
    abilities: "Stamina (Sturdy)",
    items: ["Assault Vest", "Power Herb", "Leftovers", "Choice Specs"],
    moves: ["Electro Shot", "Flash Cannon", "Draco Meteor", "Body Press", "Protect", "Snarl"],
    teraTypes: ["Fire", "Flying", "Electric", "Steel"],
    strengths: "Great bulk with Stamina; strong rain/electric spam",
    weaknesses: "Weak to Fighting, Ground (not Rock/Steel); no strong Priority",
    checksAndCounters: "Fighting/Ground types, Chi-Yu, Torkoal",
    pokemonCounters: ["Landorus-Therian", "Iron Hands"],
    synergies: ["Pelipper", "Incineroar"],
    playstyle: "Rain special sweeper that pivots Stamina bulk into offense",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #20 — PELIPPER
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 20,
    name: "Pelipper",
    types: ["Water", "Flying"],
    baseStats: { hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 },
    roles: ["Rain Setter", "Tailwind Support", "Hurricane Attacker"],
    abilities: "Drizzle (Keen Eye)",
    items: ["Damp Rock", "Focus Sash", "Sitrus Berry", "Safety Goggles"],
    moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard", "Protect", "Scald", "Hydro Pump"],
    teraTypes: ["Ghost", "Grass", "Steel"],
    strengths: "Reliable Rain setter; Tailwind support",
    weaknesses: "Weak to Rock, Electric; low offense",
    checksAndCounters: "Electric/Rock types, Fake Out",
    pokemonCounters: ["Raging Bolt", "Iron Hands"],
    synergies: ["Archaludon", "Urshifu-Rapid-Strike"],
    playstyle: "Weather setter and Tailwind support for Rain teams",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #21 — GRIMMSNARL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 21,
    name: "Grimmsnarl",
    types: ["Dark", "Fairy"],
    baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
    roles: ["Screens Support", "Prankster Light Screen/Reflect", "Taunt/Spirit Break Support"],
    abilities: "Prankster (Frisk)",
    items: ["Light Clay", "Sitrus Berry", "Covert Cloak", "Focus Sash"],
    moves: ["Light Screen", "Reflect", "Spirit Break", "Foul Play", "Parting Shot", "Thunder Wave", "Taunt"],
    teraTypes: ["Fairy", "Dark", "Ghost"],
    strengths: "Priority screens; Thunder Wave and Parting Shot add utility",
    weaknesses: "Weak to Steel, Poison, Fairy, Bug; mediocre bulk",
    checksAndCounters: "Dark-type counters negate Prankster; Poison/Steel attackers",
    pokemonCounters: ["Gholdengo", "Glimmora"],
    synergies: ["Kingambit", "Dragonite"],
    playstyle: "Screens setter that supports slower sweepers",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #22 — SNEASLER
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 22,
    name: "Sneasler",
    types: ["Fighting", "Poison"],
    baseStats: { hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120 },
    roles: ["Fast Fighter", "Fake Out Support", "Unburden Sweeper"],
    abilities: "Unburden (Poison Touch)",
    items: ["Grassy Seed", "Focus Sash", "Psychic Seed", "White Herb"],
    moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect", "Gunk Shot", "Throat Chop", "Acrobatics"],
    teraTypes: ["Fighting", "Poison", "Flying", "Ghost"],
    strengths: "Fast with huge damage; Unburden doubles speed after item use",
    weaknesses: "Frail; weak to Psychic, Ground, Flying",
    checksAndCounters: "Psychic types, Fake Out, Ghost types",
    pokemonCounters: ["Farigiraf", "Indeedee-F"],
    synergies: ["Amoonguss", "Whimsicott"],
    playstyle: "Speedy cleaner that thrives after Seed activation",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #23 — MAUSHOLD
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 23,
    name: "Maushold",
    types: ["Normal"],
    baseStats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
    roles: ["Follow Me Support", "Friend Guard", "Population Bomb Attacker"],
    abilities: "Friend Guard (Technician)",
    items: ["Wide Lens", "Sitrus Berry", "Rocky Helmet"],
    moves: ["Follow Me", "Population Bomb", "Super Fang", "Feint", "Encore", "Protect", "Taunt"],
    teraTypes: ["Ghost", "Normal", "Poison"],
    strengths: "Redirects and tanks; Population Bomb hits up to 10 times",
    weaknesses: "Weak to Fighting; mediocre bulk",
    checksAndCounters: "Fighting types, Intimidate, Taunt",
    pokemonCounters: ["Iron Hands", "Annihilape"],
    synergies: ["Flutter Mane", "Iron Hands"],
    playstyle: "Fast Follow Me support that protects fragile attackers",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #24 — INDEEDEE-F
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 24,
    name: "Indeedee-F",
    types: ["Psychic", "Normal"],
    baseStats: { hp: 70, atk: 55, def: 65, spa: 95, spd: 105, spe: 85 },
    roles: ["Psychic Terrain Support", "Follow Me", "Helping Hand/Trick Room Support"],
    abilities: "Psychic Surge (Own Tempo)",
    items: ["Psychic Seed", "Sitrus Berry", "Mental Herb", "Safety Goggles"],
    moves: ["Follow Me", "Helping Hand", "Psychic", "Dazzling Gleam", "Protect", "Trick Room", "Hyper Voice"],
    teraTypes: ["Fairy", "Water", "Dark"],
    strengths: "Blocks priority via terrain; reliable Follow Me",
    weaknesses: "Weak to Dark, Ghost, Bug",
    checksAndCounters: "Dark/Ghost types, Terrain removal",
    pokemonCounters: ["Kingambit", "Grimmsnarl"],
    synergies: ["Ursaluna-Bloodmoon", "Torkoal"],
    playstyle: "Support that enables Trick Room teams with redirection",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #25 — WHIMSICOTT
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 25,
    name: "Whimsicott",
    types: ["Grass", "Fairy"],
    baseStats: { hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116 },
    roles: ["Tailwind Support", "Prankster Disruptor", "Encore/Taunt Support"],
    abilities: "Prankster (Infiltrator)",
    items: ["Focus Sash", "Covert Cloak", "Mental Herb"],
    moves: ["Tailwind", "Moonblast", "Encore", "Taunt", "Protect", "Helping Hand", "Beat Up"],
    teraTypes: ["Ghost", "Steel", "Fairy"],
    strengths: "Priority Tailwind; Encore locks opponents",
    weaknesses: "Frail; weak to Fire, Flying, Poison, Ice, Steel",
    checksAndCounters: "Dark types, Fake Out, Rock/Flying attackers",
    pokemonCounters: ["Torkoal", "Tyranitar"],
    synergies: ["Sneasler", "Rillaboom"],
    playstyle: "Fast support that sets Tailwind and disrupts",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #26 — RAGING BOLT
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 26,
    name: "Raging Bolt",
    types: ["Electric", "Dragon"],
    baseStats: { hp: 125, atk: 73, def: 91, spa: 137, spd: 89, spe: 75 },
    roles: ["Special Attacker", "Bulky Special Sweeper", "Calm Mind Attacker"],
    abilities: "Protosynthesis",
    items: ["Booster Energy", "Assault Vest", "Leftovers", "Life Orb"],
    moves: ["Thunderclap", "Thunderbolt", "Draco Meteor", "Calm Mind", "Protect", "Volt Switch", "Dragon Pulse"],
    teraTypes: ["Fairy", "Electric", "Fire"],
    strengths: "Great bulk and offensive stats; Thunderclap priority",
    weaknesses: "Weak to Ground, Ice, Dragon, Fairy",
    checksAndCounters: "Ground types (Landorus-T, Garchomp), Dark types, Ice",
    pokemonCounters: ["Landorus-Therian", "Garchomp"],
    synergies: ["Amoonguss", "Incineroar"],
    playstyle: "Bulky special attacker that either sets up or pressures",
    tier: "A"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #27 — IRON BUNDLE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 27,
    name: "Iron Bundle",
    types: ["Ice", "Water"],
    baseStats: { hp: 56, atk: 80, def: 114, spa: 124, spd: 60, spe: 136 },
    roles: ["Fast Special Attacker", "Freeze-Dry Sniper", "Icy Wind Support"],
    abilities: "Quark Drive",
    items: ["Booster Energy", "Focus Sash", "Choice Specs", "Choice Scarf"],
    moves: ["Freeze-Dry", "Hydro Pump", "Icy Wind", "Protect", "Flip Turn", "Snowscape"],
    teraTypes: ["Water", "Ice", "Ghost"],
    strengths: "Extremely fast; Freeze-Dry hits Water types; Icy Wind speed control",
    weaknesses: "Frail; weak to Fire, Fighting, Rock, Steel",
    checksAndCounters: "Fire/Rock types, Fake Out, Steel attackers",
    pokemonCounters: ["Torkoal", "Tyranitar"],
    synergies: ["Rillaboom", "Incineroar"],
    playstyle: "Fast speed control and special sweeper",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #28 — HATTERENE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 28,
    name: "Hatterene",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
    roles: ["Trick Room Attacker", "Magic Bounce Support", "Psychic Spammer"],
    abilities: "Magic Bounce (Anticipation)",
    items: ["Life Orb", "Sitrus Berry", "Focus Sash"],
    moves: ["Dazzling Gleam", "Psychic", "Trick Room", "Mystical Fire", "Protect", "Mystical Power"],
    teraTypes: ["Fairy", "Fire", "Water"],
    strengths: "Reflects status moves; Fairy/Psychic strength",
    weaknesses: "Weak to Steel, Ghost, Poison; very slow",
    checksAndCounters: "Steel types, Ghost/Dark types, Fake Out",
    pokemonCounters: ["Kingambit", "Gholdengo"],
    synergies: ["Farigiraf", "Incineroar"],
    playstyle: "Trick Room attacker with Magic Bounce utility",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #29 — ANNIHILAPE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 29,
    name: "Annihilape",
    types: ["Fighting", "Ghost"],
    baseStats: { hp: 110, atk: 115, def: 80, spa: 50, spd: 90, spe: 90 },
    roles: ["Rage Fist Bulky Attacker", "Bulk Up Sweeper", "Fighting/Ghost Wallbreaker"],
    abilities: "Defiant (Inner Focus)",
    items: ["Leftovers", "Choice Band", "Lum Berry", "Sitrus Berry"],
    moves: ["Rage Fist", "Drain Punch", "Bulk Up", "Protect", "Coaching", "Gunk Shot", "Taunt"],
    teraTypes: ["Water", "Fighting", "Fairy", "Ghost"],
    strengths: "Rage Fist scales with damage taken; bulky; Defiant punishes Intimidate",
    weaknesses: "Weak to Flying, Psychic, Ghost, Fairy",
    checksAndCounters: "Flying/Psychic types, Fake Out, Intimidate immunity",
    pokemonCounters: ["Tornadus", "Farigiraf"],
    synergies: ["Amoonguss", "Incineroar"],
    playstyle: "Bulky attacker that grows stronger when hit",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #30 — VOLCARONA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 30,
    name: "Volcarona",
    types: ["Bug", "Fire"],
    baseStats: { hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100 },
    roles: ["Quiver Dance Sweeper", "Bug/Fire Special Attacker"],
    abilities: "Flame Body (Swarm)",
    items: ["Heavy-Duty Boots", "Focus Sash", "Sitrus Berry", "Charcoal"],
    moves: ["Quiver Dance", "Heat Wave", "Bug Buzz", "Protect", "Giga Drain", "Fiery Dance", "Tera Blast"],
    teraTypes: ["Grass", "Water", "Ground"],
    strengths: "Powerful setup attacker with great special stats",
    weaknesses: "4x weak to Rock; weak to Water, Flying",
    checksAndCounters: "Rock types, Water attackers, Fake Out, Tera blast Rock",
    pokemonCounters: ["Tyranitar", "Landorus-Therian"],
    synergies: ["Torkoal", "Hatterene"],
    playstyle: "Setup special attacker that threatens sweeps",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #31 — NINETALES-ALOLA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 31,
    name: "Ninetales-Alola",
    types: ["Ice", "Fairy"],
    baseStats: { hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109 },
    roles: ["Aurora Veil Support", "Snow Special Attacker", "Blizzard Spammer"],
    abilities: "Snow Warning (Snow Cloak)",
    items: ["Light Clay", "Focus Sash", "Icy Rock", "Sitrus Berry"],
    moves: ["Aurora Veil", "Blizzard", "Moonblast", "Freeze-Dry", "Protect", "Encore", "Icy Wind"],
    teraTypes: ["Fairy", "Water", "Steel"],
    strengths: "Snow setter with fast Aurora Veil; Blizzard never misses in Snow",
    weaknesses: "Frail; weak to Fire, Steel, Rock, Poison",
    checksAndCounters: "Fire/Rock/Steel types, Fake Out",
    pokemonCounters: ["Torkoal", "Gholdengo"],
    synergies: ["Chien-Pao", "Iron Bundle"],
    playstyle: "Aurora Veil support or Blizzard attacker",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #32 — PALAFIN
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 32,
    name: "Palafin",
    types: ["Water"],
    baseStats: { hp: 100, atk: 160, def: 97, spa: 106, spd: 87, spe: 100 },
    roles: ["Hero Sweeper", "Jet Punch Sweeper", "Pivot"],
    abilities: "Zero to Hero",
    items: ["Mystic Water", "Choice Band", "Sitrus Berry", "Focus Sash"],
    moves: ["Jet Punch", "Wave Crash", "Close Combat", "Flip Turn", "Protect", "Haze", "Rock Slide"],
    teraTypes: ["Water", "Fighting", "Fairy"],
    strengths: "Switching into Hero form creates massive offense; priority Jet Punch",
    weaknesses: "Weak to Grass, Electric; weak before Hero",
    checksAndCounters: "Grass types, Electric types, Fake Out",
    pokemonCounters: ["Amoonguss", "Rillaboom"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Pivot that comes in as Hero to sweep",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #33 — GARCHOMP
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 33,
    name: "Garchomp",
    types: ["Dragon", "Ground"],
    baseStats: { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 },
    roles: ["Physical Attacker", "Rough Skin Bulky Attacker", "Speed Offense"],
    abilities: "Rough Skin (Sand Veil)",
    items: ["Yache Berry", "Focus Sash", "Life Orb", "Rocky Helmet"],
    moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect", "Stomping Tantrum", "Swords Dance"],
    teraTypes: ["Steel", "Fire", "Poison"],
    strengths: "Fast and bulky with strong STAB attacks",
    weaknesses: "4x weak to Ice, weak to Dragon, Fairy",
    checksAndCounters: "Ice moves, Fairy types, Intimidate",
    pokemonCounters: ["Iron Bundle", "Ninetales-Alola"],
    synergies: ["Tornadus", "Amoonguss"],
    playstyle: "Powerful physical attacker with wide coverage",
    tier: "B+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #34 — TYRANITAR
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 34,
    name: "Tyranitar",
    types: ["Rock", "Dark"],
    baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    roles: ["Sand Setter", "Rock/Dark Attacker", "Bulky Pivot"],
    abilities: "Sand Stream (Unnerve)",
    items: ["Assault Vest", "Chople Berry", "Choice Band", "Black Glasses"],
    moves: ["Rock Slide", "Knock Off", "Crunch", "Protect", "High Horsepower", "Dragon Dance", "Low Kick"],
    teraTypes: ["Dark", "Ghost", "Steel", "Fire"],
    strengths: "Auto-sets Sand; strong Special Defense boost; strong offense",
    weaknesses: "4x weak to Fighting; weak to Water, Grass, Ground",
    checksAndCounters: "Fighting/Water/Grass attackers, Fake Out",
    pokemonCounters: ["Iron Hands", "Urshifu-Rapid-Strike"],
    synergies: ["Landorus-Therian"],
    playstyle: "Sand setter that threatens with Rock Slide/Knock Off",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #35 — SALAMENCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 35,
    name: "Salamence",
    types: ["Dragon", "Flying"],
    baseStats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
    roles: ["Intimidate Pivot", "Tailwind Attacker", "Dragon Dance Sweeper"],
    abilities: "Intimidate (Moxie)",
    items: ["Choice Scarf", "Life Orb", "Sitrus Berry", "Mystic Water"],
    moves: ["Dual Wingbeat", "Double-Edge", "Hurricane", "Tailwind", "Protect", "Draco Meteor", "Dragon Dance"],
    teraTypes: ["Flying", "Dragon", "Normal"],
    strengths: "Intimidate + speed + strong STAB",
    weaknesses: "4x weak to Ice; weak to Rock, Dragon, Fairy",
    checksAndCounters: "Ice moves, Fairy types, Fake Out",
    pokemonCounters: ["Iron Bundle", "Ninetales-Alola"],
    synergies: ["Amoonguss", "Landorus-Therian"],
    playstyle: "Aggressive Intimidator with flexible offense",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #36 — HYDREIGON
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 36,
    name: "Hydreigon",
    types: ["Dark", "Dragon"],
    baseStats: { hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98 },
    roles: ["Special Attacker", "Dark/Dragon Spread Attacker"],
    abilities: "Levitate",
    items: ["Life Orb", "Choice Specs", "Focus Sash", "Choice Scarf"],
    moves: ["Draco Meteor", "Dark Pulse", "Hyper Voice", "Protect", "Flamethrower", "Snarl"],
    teraTypes: ["Dark", "Dragon", "Fairy"],
    strengths: "Strong special coverage; immune to Ground via Levitate",
    weaknesses: "4x weak to Fairy; weak to Bug, Dragon, Fighting",
    checksAndCounters: "Fairy types, Fake Out, Fighting types",
    pokemonCounters: ["Flutter Mane", "Primarina"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Strong special attacker with good speed",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #37 — PRIMARINA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 37,
    name: "Primarina",
    types: ["Water", "Fairy"],
    baseStats: { hp: 80, atk: 74, def: 74, spa: 126, spd: 116, spe: 60 },
    roles: ["Special Attacker", "Rain Attacker", "Sound-based Spread Attacker"],
    abilities: "Liquid Voice (Torrent)",
    items: ["Throat Spray", "Choice Specs", "Sitrus Berry"],
    moves: ["Hyper Voice", "Moonblast", "Hydro Pump", "Protect", "Icy Wind", "Haze"],
    teraTypes: ["Water", "Fairy", "Grass"],
    strengths: "Hyper Voice becomes a strong Water spread move; bulky special",
    weaknesses: "Weak to Electric, Poison, Grass; slow",
    checksAndCounters: "Grass/Electric types, Fake Out, Poison moves",
    pokemonCounters: ["Amoonguss", "Raging Bolt"],
    synergies: ["Pelipper", "Incineroar"],
    playstyle: "Spread-damage special attacker with great bulk",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #38 — BASCULEGION
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 38,
    name: "Basculegion",
    types: ["Water", "Ghost"],
    baseStats: { hp: 120, atk: 112, def: 65, spa: 80, spd: 75, spe: 78 },
    roles: ["Rain Physical Attacker", "Last Respects Attacker"],
    abilities: "Swift Swim (Adaptability)",
    items: ["Choice Band", "Mystic Water", "Sitrus Berry"],
    moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect", "Shadow Ball", "Flip Turn"],
    teraTypes: ["Water", "Ghost"],
    strengths: "Strong Rain sweeper with great HP",
    weaknesses: "Weak to Grass, Electric, Ghost, Dark",
    checksAndCounters: "Grass/Electric/Ghost types, Fake Out",
    pokemonCounters: ["Amoonguss", "Rillaboom"],
    synergies: ["Pelipper", "Politoed"],
    playstyle: "Rain physical sweeper that grows stronger with fallen allies",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #39 — POLITOED
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 39,
    name: "Politoed",
    types: ["Water"],
    baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
    roles: ["Rain Setter", "Perish Song Support", "Helping Hand/Encore Support"],
    abilities: "Drizzle (Water Absorb)",
    items: ["Damp Rock", "Sitrus Berry", "Focus Sash", "Mental Herb"],
    moves: ["Weather Ball", "Hypnosis", "Helping Hand", "Protect", "Ice Beam", "Muddy Water"],
    teraTypes: ["Grass", "Fairy", "Steel"],
    strengths: "Rain setter with bulk; versatile support moves",
    weaknesses: "Weak to Grass, Electric",
    checksAndCounters: "Grass/Electric types, Fake Out",
    pokemonCounters: ["Amoonguss", "Raging Bolt"],
    synergies: ["Basculegion", "Primarina"],
    playstyle: "Rain setter with utility",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #40 — GLIMMORA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 40,
    name: "Glimmora",
    types: ["Rock", "Poison"],
    baseStats: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
    roles: ["Hazard Setter", "Special Attacker", "Toxic Debris Support"],
    abilities: "Toxic Debris (Corrosion)",
    items: ["Focus Sash", "Power Herb", "Life Orb"],
    moves: ["Mortal Spin", "Sludge Bomb", "Earth Power", "Protect", "Spiky Shield", "Energy Ball"],
    teraTypes: ["Grass", "Ghost", "Water"],
    strengths: "Toxic Spikes support; strong special offense",
    weaknesses: "4x weak to Ground; weak to Water, Ice, Psychic",
    checksAndCounters: "Ground/Water types, Fake Out",
    pokemonCounters: ["Landorus-Therian", "Urshifu-Rapid-Strike"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Hazard-based special attacker",
    tier: "C+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #41 — SCREAM TAIL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 41,
    name: "Scream Tail",
    types: ["Psychic", "Fairy"],
    baseStats: { hp: 115, atk: 65, def: 99, spa: 65, spd: 115, spe: 111 },
    roles: ["Bulky Support", "Disable/Encore Support", "Fake-Out Resistor"],
    abilities: "Protosynthesis",
    items: ["Booster Energy", "Sitrus Berry", "Covert Cloak"],
    moves: ["Perish Song", "Encore", "Disable", "Protect", "Dazzling Gleam", "Helping Hand", "Taunt"],
    teraTypes: ["Water", "Steel", "Fairy"],
    strengths: "Great bulk and speed; support options",
    weaknesses: "Weak to Steel, Poison; low damage",
    checksAndCounters: "Steel/Poison attackers, Taunt",
    pokemonCounters: ["Gholdengo", "Glimmora"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Fast bulky support that disrupts opponents",
    tier: "C+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #42 — WALKING WAKE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 42,
    name: "Walking Wake",
    types: ["Water", "Dragon"],
    baseStats: { hp: 99, atk: 83, def: 91, spa: 125, spd: 83, spe: 109 },
    roles: ["Special Attacker", "Rain Sweeper", "Hydro Steam Attacker"],
    abilities: "Protosynthesis",
    items: ["Booster Energy", "Choice Specs", "Life Orb"],
    moves: ["Hydro Steam", "Draco Meteor", "Flamethrower", "Protect", "Flip Turn", "Dragon Pulse"],
    teraTypes: ["Fire", "Water", "Dragon"],
    strengths: "Very strong Water/Dragon offense; fast",
    weaknesses: "Weak to Dragon, Fairy, Electric, Grass",
    checksAndCounters: "Fairy types, Grass/Electric, Fake Out",
    pokemonCounters: ["Flutter Mane", "Raging Bolt"],
    synergies: ["Pelipper", "Incineroar"],
    playstyle: "Strong Rain/Sun special sweeper",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #43 — IRON VALIANT
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 43,
    name: "Iron Valiant",
    types: ["Fairy", "Fighting"],
    baseStats: { hp: 74, atk: 130, def: 90, spa: 120, spd: 60, spe: 116 },
    roles: ["Mixed Attacker", "Fast Fairy/Fighting Sweeper", "Swords Dance Attacker"],
    abilities: "Quark Drive",
    items: ["Booster Energy", "Focus Sash", "Life Orb"],
    moves: ["Spirit Break", "Close Combat", "Moonblast", "Protect", "Swords Dance", "Knock Off"],
    teraTypes: ["Fairy", "Fighting", "Ghost"],
    strengths: "Fast and powerful; flexible mixed offense",
    weaknesses: "Frail; weak to Steel, Flying, Poison, Psychic, Fairy",
    checksAndCounters: "Steel/Flying/Psychic types, Fake Out",
    pokemonCounters: ["Gholdengo", "Tornadus"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Fast mixed attacker with strong coverage",
    tier: "C+"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #44 — ROTOM-WASH
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 44,
    name: "Rotom-Wash",
    types: ["Electric", "Water"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    roles: ["Bulky Pivot", "Will-O-Wisp Support", "Special Tank"],
    abilities: "Levitate",
    items: ["Sitrus Berry", "Leftovers", "Safety Goggles"],
    moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect", "Volt Switch", "Hex"],
    teraTypes: ["Fairy", "Steel", "Water"],
    strengths: "Great typing and bulk; Will-O-Wisp cripples physical attackers",
    weaknesses: "Weak to Ghost, Grass, Dark",
    checksAndCounters: "Grass/Ghost/Dark attackers",
    pokemonCounters: ["Rillaboom", "Kingambit"],
    synergies: ["Incineroar", "Tornadus"],
    playstyle: "Bulky pivot that controls physical attackers",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #45 — WEEZING-GALAR
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 45,
    name: "Weezing-Galar",
    types: ["Poison", "Fairy"],
    baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
    roles: ["Neutralizing Gas Support", "Fairy Wind Support", "Bulky Pivot"],
    abilities: "Neutralizing Gas (Levitate)",
    items: ["Sitrus Berry", "Rocky Helmet", "Safety Goggles"],
    moves: ["Fairy Wind", "Strange Steam", "Will-O-Wisp", "Protect", "Poison Gas", "Taunt"],
    teraTypes: ["Steel", "Fairy", "Water"],
    strengths: "Neutralizing Gas shuts off opposing abilities (Intimidate, Protosynthesis)",
    weaknesses: "Weak to Ground, Psychic",
    checksAndCounters: "Ground/Psychic types, Fake Out",
    pokemonCounters: ["Landorus-Therian", "Farigiraf"],
    synergies: ["Ursaluna-Bloodmoon", "Iron Hands"],
    playstyle: "Ability-disabling support",
    tier: "C"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #46 — PORYGON2
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 46,
    name: "Porygon2",
    types: ["Normal"],
    baseStats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60 },
    roles: ["Trick Room Support", "Eviolite Tank", "Download Attacker"],
    abilities: "Download (Trace)",
    items: ["Eviolite"],
    moves: ["Trick Room", "Tri Attack", "Recover", "Ice Beam", "Protect", "Foul Play", "Thunderbolt"],
    teraTypes: ["Fairy", "Ghost", "Water"],
    strengths: "Eviolite bulk; Trick Room setter",
    weaknesses: "Weak to Fighting; slow",
    checksAndCounters: "Fighting types, Fake Out",
    pokemonCounters: ["Iron Hands", "Annihilape"],
    synergies: ["Ursaluna-Bloodmoon", "Torkoal"],
    playstyle: "Bulky Trick Room support",
    tier: "C"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #47 — GOUGING FIRE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 47,
    name: "Gouging Fire",
    types: ["Fire", "Dragon"],
    baseStats: { hp: 105, atk: 115, def: 121, spa: 65, spd: 93, spe: 91 },
    roles: ["Physical Attacker", "Fire/Dragon Wallbreaker", "Sun Attacker"],
    abilities: "Protosynthesis",
    items: ["Booster Energy", "Assault Vest", "Life Orb"],
    moves: ["Heat Crash", "Breaking Swipe", "Dragon Dance", "Protect", "Flare Blitz", "Burning Bulwark"],
    teraTypes: ["Fire", "Dragon", "Fairy"],
    strengths: "Great bulk; strong Fire/Dragon STABs",
    weaknesses: "Weak to Rock, Ground, Dragon, Water",
    checksAndCounters: "Water/Ground/Rock types",
    pokemonCounters: ["Urshifu-Rapid-Strike", "Landorus-Therian"],
    synergies: ["Torkoal", "Amoonguss"],
    playstyle: "Bulky physical attacker with Sun synergy",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #48 — OGERPON-CORNERSTONE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 48,
    name: "Ogerpon-Cornerstone",
    types: ["Grass", "Rock"],
    baseStats: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    roles: ["Physical Attacker", "Follow Me Support", "Defensive Pivot"],
    abilities: "Sturdy",
    items: ["Cornerstone Mask (fixed)"],
    moves: ["Ivy Cudgel", "Follow Me", "Horn Leech", "Spiky Shield", "Power Whip", "Swords Dance"],
    teraTypes: ["Rock"],
    strengths: "Rock/Grass typing with Sturdy; strong offense",
    weaknesses: "Weak to Fighting, Ice, Steel, Bug; one-time Tera",
    checksAndCounters: "Fighting/Ice/Steel types, Fake Out",
    pokemonCounters: ["Iron Hands", "Kingambit"],
    synergies: ["Incineroar", "Amoonguss"],
    playstyle: "Sturdy redirecting attacker",
    tier: "C"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #49 — DONDOZO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 49,
    name: "Dondozo",
    types: ["Water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    roles: ["Commander Tank", "Order Up Attacker", "Trick Room Tank"],
    abilities: "Unaware (Oblivious)",
    items: ["Leftovers", "Sitrus Berry"],
    moves: ["Order Up", "Wave Crash", "Earthquake", "Protect", "Yawn", "Rest"],
    teraTypes: ["Water", "Dragon", "Fairy"],
    strengths: "Huge HP; Commander boosts stats with Tatsugiri",
    weaknesses: "Weak to Grass, Electric",
    checksAndCounters: "Grass/Electric types, Fake Out",
    pokemonCounters: ["Amoonguss", "Rillaboom"],
    synergies: ["Tatsugiri"],
    playstyle: "Commander-based tank that boosts and attacks",
    tier: "B"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // #50 — TATSUGIRI
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 50,
    name: "Tatsugiri",
    types: ["Dragon", "Water"],
    baseStats: { hp: 68, atk: 50, def: 60, spa: 120, spd: 95, spe: 82 },
    roles: ["Commander Pair", "Special Attacker", "Support"],
    abilities: "Commander (Storm Drain)",
    items: ["Choice Scarf", "Focus Sash", "Sitrus Berry"],
    moves: ["Draco Meteor", "Muddy Water", "Icy Wind", "Protect", "Hydro Pump", "Taunt"],
    teraTypes: ["Dragon", "Water", "Fairy"],
    strengths: "Commander with Dondozo gives immense boosts",
    weaknesses: "Frail; weak to Grass, Electric, Fairy, Dragon",
    checksAndCounters: "Grass/Electric types, Fake Out",
    pokemonCounters: ["Flutter Mane", "Raging Bolt"],
    synergies: ["Dondozo"],
    playstyle: "Commander pair with Dondozo",
    tier: "B"
  }
];
const DEX = {
  "Incineroar": 727, "Rillaboom": 812, "Flutter Mane": 987,
  "Urshifu-Rapid-Strike": 10191, "Amoonguss": 591,
  "Landorus-Therian": 10021, "Tornadus": 641,
  "Ogerpon-Wellspring": 10273, "Ogerpon-Hearthflame": 10274,
  "Ursaluna-Bloodmoon": 10272, "Chien-Pao": 1002, "Chi-Yu": 1004,
  "Iron Hands": 992, "Farigiraf": 981, "Torkoal": 324,
  "Gholdengo": 1000, "Kingambit": 983, "Dragonite": 149,
  "Archaludon": 1018, "Pelipper": 279, "Grimmsnarl": 861,
  "Sneasler": 903, "Maushold": 925, "Indeedee-F": 10186,
  "Whimsicott": 547, "Raging Bolt": 1021, "Iron Bundle": 991,
  "Hatterene": 858, "Annihilape": 979, "Volcarona": 637,
  "Ninetales-Alola": 10104, "Palafin": 10256, "Garchomp": 445,
  "Tyranitar": 248, "Salamence": 373, "Hydreigon": 635,
  "Primarina": 730, "Basculegion": 902, "Politoed": 186,
  "Glimmora": 970, "Scream Tail": 985, "Walking Wake": 1009,
  "Iron Valiant": 1006, "Rotom-Wash": 10009, "Weezing-Galar": 10167,
  "Porygon2": 233, "Gouging Fire": 1020, "Ogerpon-Cornerstone": 10275,
  "Dondozo": 977, "Tatsugiri": 978
};

function getImage(name) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${DEX[name]}.png`;
}
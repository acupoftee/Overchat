
const heroes = []
export const heroesNames = [
  'ANA',
  'BASTION',
  'DVA',
  'GENJI',
  'HANZO',
  'DOOMFIST',
  'JUNKRAT',
  'LUCIO',
  'MCCREE',
  'MEI',
  'MERCY',
  'ORISA',
  'PHARAH',
  'REAPER',
  'REINHARDT',
  'ROADHOG',
  'SOLDIER76',
  'SOMBRA',
  'SYMMETRA',
  'TORNBJORN',
  'TRACER',
  'WINDOWMAKER',
  'WINSTON',
  'ZARYA',
  'ZENYATTA',
]
heroesNames.forEach((hero) => {
  heroes.push({
    name: hero,
    img: `../images/${hero}.jpg`,
  })
})

export default heroes

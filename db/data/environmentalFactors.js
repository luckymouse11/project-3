//carbon footprint
// Food production is responsible for one-quarter of the world’s greenhouse gas emissions
// You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local
// Less meat is nearly always better for your carbon footprint than sustainable meat

//land use
//Half of the world’s habitable land is used for agriculture
//For much of human history, most of the world’s land was wilderness: forests, grasslands and shrubbery dominated its landscapes. Over the last few centuries, this has changed dramatically: wild habitats have been squeezed out by turning it into agricultural land.
//If we rewind 1000 years, it is estimated that only 4 million square kilometers – less than 4% of the world’s ice-free and non-barren land area was used for farming.
//In the visualization we see the breakdown of global land area today. 10% of the world is covered by glaciers, and a further 19% is barren land – deserts, dry salt flats, beaches, sand dunes, and exposed rocks. This leaves what we call ‘habitable land’. Half of all habitable land is used for agriculture.

//water use

//scarcity-weighted water use

//water pollution 
// Eutrophication – the pollution of water bodies and ecosystems with excess nutrients – is a major environmental problem. 
// The runoff of nitrogen and other nutrients from agricultural production systems is a leading contributor.

//////

//Food accounts for over a quarter (26%) of global greenhouse gas emissions1;
//Half of the world’s habitable (ice- and desert-free) land is used for agriculture;
//70% of global freshwater withdrawals are used for agriculture2;
//78% of global ocean and freshwater eutrophication (the pollution of waterways with nutrient-rich pollutants) is caused by agriculture3;
//94% of mammal biomass (excluding humans) is livestock. This means livestock outweigh wild mammals by a factor of 15-to-1.4 Of the 28,000 species evaluated to be threatened with extinction on the IUCN Red List, agriculture and aquaculture is listed as a threat for 24,000 of them.5
//Food, therefore, lies at the heart of trying to tackle climate change, reducing water stress, pollution, restoring lands back to forests or grasslands, and protecting the world’s wildlife. //

//envfactors graphs
import carbonfootprintgraph from './images/carbon-footprint-graph.png'
import landusegraph from './images/land-use-graph.png'
import waterusegraph from './images/water-use-graph.png'
import waterpollutiongraph from './images/water-pollution-graph.png'
import scarcityweightedwaterusegraph from './images/scarcity-weighted-water-pollution-graph.png'

//envfactors 2nd graphic
import globallanduse from './images/global-land-use-graphic.png'
import GHGsfromfood from './images/GHGs-come-from-food.png'


export default [
  {
    name: 'Carbon Footprint',
    image: 'Carbon Footprint image',
    totalGraph: { carbonfootprintgraph },
    secondGraphic: { GHGsfromfood },
    description: 'Food production is responsible for one-quarter of the world’s greenhouse gas emissions. You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local. Less meat is nearly always better for your carbon footprint than sustainable meat.'
  },
  {
    name: 'Land Use',
    image: 'waterpic',
    totalGraph: { landusegraph },
    secondGraphic: { globallanduse },
    description: 'Half of the world’s habitable land is used for agriculture. For much of human history, most of the world’s land was wilderness: forests, grasslands and shrubbery dominated its landscapes. Over the last few centuries, this has changed dramatically: wild habitats have been squeezed out by turning it into agricultural land. If we rewind 1000 years, it is estimated that only 4 million square kilometers – less than 4% of the world’s ice-free and non-barren land area was used for farming. 10% of the world is covered by glaciers, and a further 19% is barren land – deserts, dry salt flats, beaches, sand dunes, and exposed rocks. This leaves what we call ‘habitable land’. Half of all habitable land is used for agriculture.'
  },
  {
    name: 'Water Use',
    image: 'waterpic',
    totalGraph: { waterusegraph },
    secondGraphic: 'detailed water info here',
    description: 'water water water'
  },
  {
    name: 'Scarcity-Weighted Water Use',
    image: 'waterpic',
    totalGraph: { scarcityweightedwaterusegraph } ,
    secondGraphic: 'detailed water info here',
    description: 'water water water'
  },
  {
    name: 'Water Pollution',
    image: 'waterpic',
    totalGraph: { waterpollutiongraph },
    secondGraphic: 'detailed water info here',
    description: 'Eutrophication – the pollution of water bodies and ecosystems with excess nutrients – is a major environmental problem. The runoff of nitrogen and other nutrients from agricultural production systems is a leading contributor.'
  }

]
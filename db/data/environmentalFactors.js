//scarcity-weighted water use
//Water scarcity is more extreme than water stress, and occurs when water demand exceeds internal water resources.

//water use - definitions --
//Water withdrawals, are defined as freshwater taken from ground or surface water sources, either permanently or temporarily, and conveyed to a place of use.

//intro/desc for env factors main page--
//94% of mammal biomass (excluding humans) is livestock. This means livestock outweigh wild mammals by a factor of 15-to-1.4 Of the 28,000 species evaluated to be threatened with extinction on the IUCN Red List, agriculture and aquaculture is listed as a threat for 24,000 of them
//Food, therefore, lies at the heart of trying to tackle climate change, reducing water stress, pollution, restoring lands back to forests or grasslands, and protecting the world’s wildlife. //

//envfactors graphs
import carbonfootprintgraph from 'client/src/images/carbonFootprint/carbon-footprint-graph.png'
import landusegraph from 'client/src/images/landUse/land-use-graph.png'
import waterusegraph from 'client/src/images/waterUse/water-use-graph.png'
import waterpollutiongraph from 'client/src/images/waterPollution/water-pollution-graph.png'
import scarcityweightedwaterusegraph from 'client/src/images/scarcityWater/scarity-weighted-water-use-graph.png'

//envfactors 2nd graphic
import globallanduse from 'client/src/images/landUse/global-land-use-graphic.png'
import GHGsfromfood from 'client/src/images/carbonFootprint/GHGs-come-from-food.png'

//images
import carbonFootprintImage from 'client/src/images/carbonFootprint/carbon-footprint-graph.png'
import landUseImage from 'client/src/images/landUse/land-use.png'
import waterUseImage from 'client/src/images/waterUse/water-image.png'

export default [
  {
    name: 'Carbon Footprint',
    image: { carbonFootprintImage },
    totalGraph: { carbonfootprintgraph },
    secondGraphic: { GHGsfromfood },
    description: 'Food production is responsible for one-quarter of the world’s greenhouse gas emissions. You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local. Less meat is nearly always better for your carbon footprint than sustainable meat.'
  },
  {
    name: 'Land Use',
    image: { landUseImage },
    totalGraph: { landusegraph },
    secondGraphic: { globallanduse },
    description: 'Half of the world’s habitable land is used for agriculture. For much of human history, most of the world’s land was wilderness: forests, grasslands and shrubbery dominated its landscapes. Over the last few centuries, this has changed dramatically: wild habitats have been squeezed out by turning it into agricultural land. If we rewind 1000 years, it is estimated that only 4 million square kilometers – less than 4% of the world’s ice-free and non-barren land area was used for farming. 10% of the world is covered by glaciers, and a further 19% is barren land – deserts, dry salt flats, beaches, sand dunes, and exposed rocks. This leaves what we call ‘habitable land’. Half of all habitable land is used for agriculture.'
  },
  {
    name: 'Water Use',
    image: { waterUseImage },
    totalGraph: { waterusegraph },
    secondGraphic: 'detailed water info here',
    description: 'Water withdrawals, are defined as freshwater taken from ground or surface water sources, either permanently or temporarily, and conveyed to a place of use. 70% of global freshwater withdrawals are used for agriculture. A growing global population and economic shift towards more resource-intensive consumption patterns means global freshwater use — that is, freshwater withdrawals for agriculture, industry and municipal uses — has increased nearly six-fold since 1900. Rates of global freshwater use increased sharply from the 1950s onwards, but since 2000 appears to be plateauing, or at least slowing'
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
    description: 'Eutrophication – the pollution of water bodies and ecosystems with excess nutrients – is a major environmental problem. The runoff of nitrogen and other nutrients from agricultural production systems is a leading contributor. 78% of global ocean and freshwater eutrophication (the pollution of waterways with nutrient-rich pollutants) is caused by agriculture.'
  }

]
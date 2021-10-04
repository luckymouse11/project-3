//intro/desc for env factors main page--
//Biomass, the weight or total quantity of living organisms of one animal or plant species (species biomass) or of all the species in a community (community biomass), commonly referred to a unit area or volume of habitat. The weight or quantity of organisms in an area at a given moment is the standing crop. 

//water scarcity -- https://www.sciencedirect.com/topics/engineering/water-withdrawal
//env fact all -- https://ourworldindata.org/environmental-impacts-of-food#

//envfactors image
import co2 from 'client/src/images/carbonFootprint/co2-image.png'
import landuse from 'client/src/images/landUse/land-use.png'
import wateruse from 'client/src/images/waterUse/water-image.png'
import waterpollution from 'client/src/images/waterPollution/water-pollution.png'
import scarcitywateruse from 'client/src/images/scarcityWeightedWaterUse/scarcity-weighted-water-use.png'

//envfactors totalgraphs
import carbonfootprintgraph from 'client/src/images/carbonFootprint/carbon-footprint-graph.png'
import landusegraph from 'client/src/images/landUse/land-use-graph.png'
import waterusegraph from 'client/src/images/waterUse/water-use-graph.png'
import waterpollutiongraph from 'client/src/images/waterPollution/water-pollution-graph.png'
import scarcityweightedwaterusegraph from 'client/src/images/scarcityWeightedWaterUse/scarcity-weighted-water-use-graph.png'

//envfactors 2nd graphic
import globallanduse from 'client/src/images/landUse/global-land-use-graphic.png'
import GHGsfromfood from 'client/src/images/carbonFootprint/GHGs-come-from-food.png'

export default [
  {
    name: 'Carbon Footprint',
    image: { co2 },
    totalGraph: { carbonfootprintgraph },
    secondGraphic: { GHGsfromfood },
    description: 'Food production is responsible for one-quarter of the world’s greenhouse gas emissions. You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local. Less meat is nearly always better for your carbon footprint than sustainable meat.'
  },
  {
    name: 'Land Use',
    image: { landuse },
    totalGraph: { landusegraph },
    secondGraphic: { globallanduse },
    description: 'Half of the world’s habitable land is used for agriculture. For much of human history, most of the world’s land was wilderness: forests, grasslands and shrubbery dominated its landscapes. Over the last few centuries, this has changed dramatically: wild habitats have been squeezed out by turning it into agricultural land. If we rewind 1000 years, it is estimated that only 4 million square kilometers – less than 4% of the world’s ice-free and non-barren land area was used for farming. 10% of the world is covered by glaciers, and a further 19% is barren land – deserts, dry salt flats, beaches, sand dunes, and exposed rocks. This leaves what we call ‘habitable land’. Half of all habitable land is used for agriculture.'
  },
  {
    name: 'Water Use',
    image: { wateruse },
    totalGraph: { waterusegraph },
    secondGraphic: 'detailed water info here', //TO FIND
    description: 'Water withdrawals, are defined as freshwater taken from ground or surface water sources, either permanently or temporarily, and conveyed to a place of use. 70% of global freshwater withdrawals are used for agriculture. A growing global population and economic shift towards more resource-intensive consumption patterns means global freshwater use — that is, freshwater withdrawals for agriculture, industry and municipal uses — has increased nearly six-fold since 1900. Rates of global freshwater use increased sharply from the 1950s onwards, but since 2000 appears to be plateauing, or at least slowing'
  },
  {
    name: 'Scarcity-Weighted Water Use',
    image: { scarcitywateruse },
    totalGraph: { scarcityweightedwaterusegraph } ,
    secondGraphic: 'second graphic', //TO FIND
    description: 'Water is a precious resource in our planet. Its relative availability—71% of the Earth’s surface is water—has been responsible for a lack of further efforts towards water consumption efficiency. The total amount of water is 1.38×1018 m3. Only 2.6% is freshwater, and out of that, 10% alone is accessible, around 3.7×1015 m3. Water scarcity occurs when water demand exceeds internal water resources. Recently, numerous reports have estimated that by 2025 two-thirds of the population will suffer water scarcity. '
  },
  {
    name: 'Water Pollution',
    image: { waterpollution },
    totalGraph: { waterpollutiongraph },
    secondGraphic: 'detailed water info here', //TO ADD
    description: 'Eutrophication – the pollution of water bodies and ecosystems with excess nutrients – is a major environmental problem. The runoff of nitrogen and other nutrients from agricultural production systems is a leading contributor. 78% of global ocean and freshwater eutrophication (the pollution of waterways with nutrient-rich pollutants) is caused by agriculture.'
  }

]
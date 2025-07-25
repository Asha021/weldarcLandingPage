import React from 'react'
import HeroSec from './HeroSec'
// import ProductSec from './ProductsSec'
import ProductSec from './Product/ProductsSec'
import WeldarcMac from './ProductComparision/WeldarcMac'
import WhyChoose from './ProductComparision/WhyChoose'
import Graph from './Graph'
import Clients from './Clients'
import CTA from './CTA'

const Home = () => {
  return (
    <div>
      <HeroSec />
      <ProductSec />
      <WeldarcMac />
      <WhyChoose />
      <Graph />
      <Clients />
      <CTA />
    </div>
  )
}

export default Home

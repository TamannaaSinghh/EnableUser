import React from 'react'
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AdditionalServices from '@/components/AdditionalServices';
import AccessibilityCalculator from '@/components/AccessibilityCalculator';

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <AccessibilityCalculator />
      <AdditionalServices/>
    </div>
  )
}

export default page
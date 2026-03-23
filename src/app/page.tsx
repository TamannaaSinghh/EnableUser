import React from 'react'

import ResearchHero from '@/components/ResearchHero';
import ScannerSection from '@/components/ScannerSection';
import SolutionsSection from '@/components/SolutionsSection';
import LegalAssuranceSection from '@/components/LegalAssuranceSection';
import TailoredSolutionsSection from '@/components/TailoredSolutionsSection';

function page() {
  return (
    <div>
      <ResearchHero />
      <ScannerSection />
      <SolutionsSection/>
      <LegalAssuranceSection/>
      <TailoredSolutionsSection/>
    </div>
  );
}

export default page
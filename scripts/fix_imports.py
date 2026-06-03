from pathlib import Path

mapping = {
    'Hero': '@/components/pages/home/Hero',
    'ClinicHeroSection': '@/components/pages/home/ClinicHeroSection',
    'WelcomeSection': '@/components/pages/home/WelcomeSection',
    'PharmacySection': '@/components/pages/home/PharmacySection',
    'PathologySection': '@/components/pages/home/PathologySection',
    'HospitalSection': '@/components/pages/home/HospitalSection',
    'KeyFeatures': '@/components/pages/home/KeyFeatures',
    'PlatformFeatures': '@/components/pages/home/PlatformFeatures',
    'WhyToChooseSection': '@/components/pages/home/WhyToChooseSection',
    'AllInOneHealthcareSolution': '@/components/pages/home/AllInOneHealthcareSolution',
    'IndustryFocusSection': '@/components/pages/home/IndustryFocusSection',
    'FeatureSection': '@/components/pages/home/FeatureSection',
    'ServiceOfferings': '@/components/pages/home/ServiceOfferings',
    'TechStack': '@/components/pages/home/TechStack',
    'HealthcareIcons': '@/components/pages/home/HealthcareIcons',
    'AboutHero': '@/components/pages/about/AboutHero',
    'BusinessMetricsSection': '@/components/pages/about/BusinessMetricsSection',
    'AboutImageSplitSection': '@/components/pages/about/AboutImageSplitSection',
    'MissionVisionSection': '@/components/pages/about/MissionVisionSection',
    'CompanyWorkingSteps': '@/components/pages/about/CompanyWorkingSteps',
    'InnovationWheelSection': '@/components/pages/about/InnovationWheelSection',
    'ContactHero': '@/components/pages/contact/ContactHero',
    'Contact': '@/components/pages/contact/Contact',
    'ClientsHero': '@/components/pages/clients/ClientsHero',
    'BlogHero': '@/components/pages/blog/BlogHero',
    'BlogGrid': '@/components/pages/blog/BlogGrid',
    'PackageSection': '@/components/shared/PackageSection',
    'Services': '@/components/pages/services/Services',
    'AppDevelopmentHero': '@/components/pages/services/app-development/AppDevelopmentHero',
    'AppDevelopmentTypesSection': '@/components/pages/services/app-development/AppDevelopmentTypesSection',
    'AppDevRoadmap': '@/components/pages/services/app-development/AppDevRoadmap',
    'WebsiteDevHero': '@/components/pages/services/website-development/WebsiteDevHero',
    'WebsiteTypesSection': '@/components/pages/services/website-development/WebsiteTypesSection',
    'WebDevRoadmap': '@/components/pages/services/website-development/WebDevRoadmap',
    'SMMHero': '@/components/pages/services/smm/SMMHero',
    'SMMTypesSection': '@/components/pages/services/smm/SMMTypesSection',
    'SMMRoadmap': '@/components/pages/services/smm/SMMRoadmap',
    'SystemSoftwareTypesSection': '@/components/pages/services/system-software-development/SystemSoftwareTypesSection',
    'SystemSoftwareRoadmap': '@/components/pages/services/system-software-development/SystemSoftwareRoadmap',
    'SEOHero': '@/components/pages/services/seo/SEOHero',
    'SEOTypesSection': '@/components/pages/services/seo/SEOTypesSection',
    'SEORoadmap': '@/components/pages/services/seo/SEORoadmap',
    'GraphicDesignHero': '@/components/pages/services/graphic-design/GraphicDesignHero',
    'DesignServicesSection': '@/components/pages/services/graphic-design/DesignServicesSection',
    'GraphicDesignRoadmap': '@/components/pages/services/graphic-design/GraphicDesignRoadmap',
    'UIUXHero': '@/components/pages/services/ui-ux/UIUXHero',
    'UIUXTypesSection': '@/components/pages/services/ui-ux/UIUXTypesSection',
    'UIUXRoadmap': '@/components/pages/services/ui-ux/UIUXRoadmap',
    'ContentWritingHero': '@/components/pages/services/content-writing/ContentWritingHero',
    'ContentTypesSection': '@/components/pages/services/content-writing/ContentTypesSection',
    'ContentWritingRoadmap': '@/components/pages/services/content-writing/ContentWritingRoadmap',
    'HMSOrbit': '@/components/pages/hospital-management/HMSOrbit',
    'StatisticsSection': '@/components/pages/hospital-management/StatisticsSection',
    'HMSCrossLayout': '@/components/pages/hospital-management/HMSCrossLayout',
    'HospitalSoftwareSection': '@/components/pages/hospital-management/HospitalSoftwareSection',
    'HmsModulesWithVideo': '@/components/pages/hospital-management/HmsModulesWithVideo',
    'HMSBenefitsSection': '@/components/pages/hospital-management/HMSBenefitsSection',
    'PharmacyManagement': '@/components/pages/pharmacy-management/PharmacyManagement',
    'PharmacyBenefitsSection': '@/components/pages/pharmacy-management/PharmacyBenefitsSection',
    'PharmacyTargetAudience': '@/components/pages/pharmacy-management/PharmacyTargetAudience',
    'PharmacyModulesWithVideo': '@/components/pages/pharmacy-management/PharmacyModulesWithVideo',
    'PharmacyTrialSection': '@/components/pages/pharmacy-management/PharmacyTrialSection',
    'PharmacyWorkflow': '@/components/pages/pharmacy-management/PharmacyWorkflow',
    'PathologyManagement': '@/components/pages/pathology-management/PathologyManagement',
    'PathologyBenefitsSection': '@/components/pages/pathology-management/PathologyBenefitsSection',
    'PathologyModulesWithVideo': '@/components/pages/pathology-management/PathologyModulesWithVideo',
    'ScalableSolution': '@/components/pages/pathology-management/ScalableSolution',
    'PathologyTargetAudience': '@/components/pages/pathology-management/PathologyTargetAudience',
    'PathologyWorkflow': '@/components/pages/pathology-management/PathologyWorkflow',
    'PathologyTrialSection': '@/components/pages/pathology-management/PathologyTrialSection',
    'RamroGadiBenefitsSection': '@/components/pages/ramro-gadi/RamroGadiBenefitsSection',
    'RamroGadiAboutSection': '@/components/pages/ramro-gadi/RamroGadiAboutSection',
    'ProductShowcase': '@/components/pages/products/ProductShowcase',
    'ServiceDetailLayout': '@/components/shared/ServiceDetailLayout',
    'Testimonials': '@/components/shared/Testimonials',
    'HMSTrialSection': '@/components/shared/HMSTrialSection',
}

root = Path('d:/FullStackprojects/medimaster/medimaster')
base_dirs = [root / 'src' / 'app', root / 'src' / 'components']
changed_files = []
for base in base_dirs:
    for path in sorted(base.rglob('*')):
        if path.suffix not in {'.js', '.jsx', '.ts', '.tsx'}:
            continue
        text = path.read_text(encoding='utf-8')
        new_text = text
        for key, new_path in mapping.items():
            old_path = f"@/components/sections/{key}"
            new_text = new_text.replace(old_path, new_path)
        if new_text != text:
            path.write_text(new_text, encoding='utf-8')
            changed_files.append(path)

print(f'FILES_CHANGED {len(changed_files)}')
for p in changed_files:
    print(p)

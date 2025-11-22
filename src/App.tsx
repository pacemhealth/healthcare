import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Eager load critical pages
import HomePage from './app/page';

// Lazy load all other pages for better performance
const ProductsPage = lazy(() => import('./app/products/page'));
const Division1Page = lazy(() => import('./app/products/division1/page'));
const Division2Page = lazy(() => import('./app/products/division2/page'));
const Division3Page = lazy(() => import('./app/products/division3/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const InvestorsPage = lazy(() => import('./app/investors/page'));
const CEOMessage = lazy(() => import('./app/ceo-message/page'));
const OurApproachPage = lazy(() => import('./app/our-approach/page'));

// Services
const ServicesPage = lazy(() => import('./app/services/page'));
const MarketAccessPage = lazy(() => import('./app/services/market-access/page'));
const ProcurementSourcingPage = lazy(() => import('./app/services/procurement-sourcing/page'));
const SupplyChainLogisticsPage = lazy(() => import('./app/services/supply-chain-logistics/page'));
const QualityAssurancePage = lazy(() => import('./app/services/quality-assurance/page'));
const WholesaleDistributionPage = lazy(() => import('./app/services/wholesale-distribution/page'));
const RegulatoryServicesPage = lazy(() => import('./app/services/regulatory/page'));
const MedicalServicesPage = lazy(() => import('./app/services/medical-services/page'));
const ComplianceTrainingPage = lazy(() => import('./app/services/compliance-training/page'));
const InfrastructurePlanningPage = lazy(() => import('./app/services/infrastructure-planning/page'));

// Advanced Solutions
const AdvancedSolutionsPage = lazy(() => import('./app/advanced-solutions/page'));
const DigitalHealthPlatformsPage = lazy(() => import('./app/advanced-solutions/digital-health-platforms/page'));
const FleetEquipmentManagementPage = lazy(() => import('./app/advanced-solutions/fleet-equipment-management/page'));
const MobileDiagnosticsPage = lazy(() => import('./app/advanced-solutions/mobile-diagnostics/page'));
const HealthIntelligenceAnalyticsPage = lazy(() => import('./app/advanced-solutions/health-intelligence-analytics/page'));
const MedtracePharmaceuticalTrackingPage = lazy(() => import('./app/advanced-solutions/medtrace-pharmaceutical-tracking/page'));
const Asset360EquipmentLifecyclePage = lazy(() => import('./app/advanced-solutions/asset360-equipment-lifecycle/page'));
const FieldproBiomedicalNetworkPage = lazy(() => import('./app/advanced-solutions/fieldpro-biomedical-network/page'));

// About
const AboutPage = lazy(() => import('./app/about/page'));
const BoardPage = lazy(() => import('./app/about/board/page'));
const ManagementPage = lazy(() => import('./app/about/management/page'));
const SustainabilityPage = lazy(() => import('./app/about/sustainability/page'));
const CommitmentsPage = lazy(() => import('./app/about/commitments/page'));
const EnvironmentalResponsibilityPage = lazy(() => import('./app/about/sustainability/environmental-responsibility/page'));
const AmaraOkonkwoPage = lazy(() => import('./app/about/management/amara-okonkwo/page'));
const DavidSeyakerPage = lazy(() => import('./app/about/management/david-seyaker/page'));
const JamesKariukiPage = lazy(() => import('./app/about/management/james-kariuki/page'));
const JenniferChenPage = lazy(() => import('./app/about/management/jennifer-chen/page'));
const LisaThompsonPage = lazy(() => import('./app/about/management/lisa-thompson/page'));
const MichaelAndersonPage = lazy(() => import('./app/about/management/michael-anderson/page'));
const RobertWilliamsPage = lazy(() => import('./app/about/management/robert-williams/page'));
const SarahMitchellPage = lazy(() => import('./app/about/management/sarah-mitchell/page'));
const FatimaDialloPage = lazy(() => import('./app/about/management/fatima-diallo/page'));
const KwameMensahPage = lazy(() => import('./app/about/management/kwame-mensah/page'));
const ThandiweMoyoPage = lazy(() => import('./app/about/management/thandiwe-moyo/page'));
const MohammedHassanPage = lazy(() => import('./app/about/management/mohammed-hassan/page'));
const GraceWanjiruPage = lazy(() => import('./app/about/management/grace-wanjiru/page'));
const YoussefElAminPage = lazy(() => import('./app/about/management/youssef-el-amin/page'));
const AdaezeNwachukwuPage = lazy(() => import('./app/about/management/adaeze-nwachukwu/page'));

// Programs
const ProgramsPage = lazy(() => import('./app/programs/page'));
const HealthcareDevelopmentPage = lazy(() => import('./app/programs/healthcare-development/page'));
const PacemExcellencePage = lazy(() => import('./app/programs/pacem-excellence/page'));
const PediatricPharmacyPage = lazy(() => import('./app/programs/pediatric-pharmacy/page'));

// News
const NewsMedia = lazy(() => import('./app/news/page'));
const PacemHealthLaunches = lazy(() => import('./app/news/pacem-health-launches/page'));
const AfDBPartnership = lazy(() => import('./app/news/afdb-partnership/page'));
const ProductCatalogLaunch = lazy(() => import('./app/news/product-catalog-launch/page'));
const InfantNutritionProduct = lazy(() => import('./app/news/infant-nutrition-product/page'));
const KenyaMOHPartnership = lazy(() => import('./app/news/kenya-moh-partnership/page'));
const DigitalFleetPlatform = lazy(() => import('./app/news/digital-fleet-platform/page'));
const Ghana75kPatients = lazy(() => import('./app/news/ghana-75k-patients/page'));
const AfricaMarketEntry = lazy(() => import('./app/news/africa-market-entry/page'));
const PharmaceuticalHubLaunch = lazy(() => import('./app/news/pharmaceutical-hub-launch/page'));
const UniversityPartnership = lazy(() => import('./app/news/university-partnership/page'));
const HospitalPharmacyImpact = lazy(() => import('./app/news/hospital-pharmacy-impact/page'));
const MedicalEquipmentDeployment = lazy(() => import('./app/news/medical-equipment-deployment/page'));
const WHOCollaboration = lazy(() => import('./app/news/who-collaboration/page'));
const DigitalHealthPlatform = lazy(() => import('./app/news/digital-health-platform/page'));
const MaternalHealthImpact = lazy(() => import('./app/news/maternal-health-impact/page'));

// Legal Pages
const PrivacyPolicyPage = lazy(() => import('./app/privacy/page'));
const TermsOfServicePage = lazy(() => import('./app/terms/page'));
const CookieSettingsPage = lazy(() => import('./app/cookies/page'));
const AccessibilityPage = lazy(() => import('./app/accessibility/page'));

// Insights
const InsightsPage = lazy(() => import('./app/insights/page'));
const InsightsCaseStudiesPage = lazy(() => import('./app/insights/case-studies/page'));
const InsightsEventsSpeakingPage = lazy(() => import('./app/insights/events-speaking/page'));
const InsightsPartnershipsPage = lazy(() => import('./app/insights/partnerships/page'));
const InsightsPublicationsPage = lazy(() => import('./app/insights/publications/page'));
const InsightsReportsPage = lazy(() => import('./app/insights/reports/page'));

// Shop
const ShopPage = lazy(() => import('./app/shop/page'));
const EducationTrainingPage = lazy(() => import('./app/shop/education-training/page'));
const TrainingSimulationKitsPage = lazy(() => import('./app/shop/training-simulation-kits/page'));
const MedicalEquipmentPage = lazy(() => import('./app/shop/medical-equipment/page'));
const PartsAccessoriesPage = lazy(() => import('./app/shop/parts-accessories/page'));
const ColdChainTransportPage = lazy(() => import('./app/shop/cold-chain-transport/page'));
const DigitalHealthDataPage = lazy(() => import('./app/shop/digital-health-data/page'));
const RefurbishedEquipmentPage = lazy(() => import('./app/shop/refurbished-equipment/page'));

// Shop - Product Detail Pages
const SolarVaccineRefrigeratorPage = lazy(() => import('./app/shop/cold-chain-transport/solar-vaccine-refrigerator/page'));

// Support
const SupportPage = lazy(() => import('./app/support/page'));
const RequestEquipmentQuote = lazy(() => import('./app/support/request-equipment-quote/page'));
const RequestEquipmentDemo = lazy(() => import('./app/support/request-equipment-demo/page'));
const TrainingEducation = lazy(() => import('./app/support/training-education/page'));
const PlatformSystemsSupport = lazy(() => import('./app/support/platform-systems-support/page'));
const TechnicalSupport = lazy(() => import('./app/support/technical-support/page'));
const ProductEquipmentDocumentation = lazy(() => import('./app/support/product-equipment-documentation/page'));
const SparePartsRepair = lazy(() => import('./app/support/spare-parts-repair/page'));
const CareerStaffing = lazy(() => import('./app/support/career-staffing/page'));
const ProcurementSupplyChain = lazy(() => import('./app/support/procurement-supply-chain/page'));
const DonorNGOGovernment = lazy(() => import('./app/support/donor-ngo-government/page'));
const BillingFinance = lazy(() => import('./app/support/billing-finance/page'));
const DigitalHealthIntegration = lazy(() => import('./app/support/digital-health-integration/page'));
const SitePlanningReadiness = lazy(() => import('./app/support/site-planning-readiness/page'));
const DistributorsAgentsResellers = lazy(() => import('./app/support/distributors-agents-resellers/page'));
const ProductSafetyCompliance = lazy(() => import('./app/support/product-safety-compliance/page'));
const GeneralInquiry = lazy(() => import('./app/support/general-inquiry/page'));

// Careers
const CareersPage = lazy(() => import('./app/careers/page'));
const DistributionOperationsJobs = lazy(() => import('./app/careers/distribution-operations/page'));
const ClinicalPharmacyJobs = lazy(() => import('./app/careers/clinical-pharmacy/page'));
const HealthSystemsAdvisoryJobs = lazy(() => import('./app/careers/health-systems-advisory/page'));
const TechnologyInnovationJobs = lazy(() => import('./app/careers/technology-innovation/page'));
const BusinessOperationsJobs = lazy(() => import('./app/careers/business-operations/page'));
const TrainingEducationJobs = lazy(() => import('./app/careers/training-education/page'));
const RegionalCountryLeadershipJobs = lazy(() => import('./app/careers/regional-country-leadership/page'));
const ProgramManagementJobs = lazy(() => import('./app/careers/program-management/page'));

// Product Categories
const GenericPharmaceuticalsPage = lazy(() => import('./app/products/categories/generic-pharmaceuticals/page'));
const BrandedPatentedPharmaceuticalsPage = lazy(() => import('./app/products/categories/branded-patented-pharmaceuticals/page'));
const OverTheCounterProductsPage = lazy(() => import('./app/products/categories/over-the-counter-products/page'));
const MedicalConsumablesPage = lazy(() => import('./app/products/categories/medical-consumables/page'));
const SurgicalProceduralSuppliesPage = lazy(() => import('./app/products/categories/surgical-procedural-supplies/page'));
const DiagnosticEquipmentSuppliesPage = lazy(() => import('./app/products/categories/diagnostic-equipment-supplies/page'));
const DurableMedicalEquipmentPage = lazy(() => import('./app/products/categories/durable-medical-equipment/page'));
const LaboratoryEquipmentInstrumentationPage = lazy(() => import('./app/products/categories/laboratory-equipment-instrumentation/page'));
const LaboratoryReagentsChemicalsPage = lazy(() => import('./app/products/categories/laboratory-reagents-chemicals/page'));
const EducationalTrainingSuppliesPage = lazy(() => import('./app/products/categories/educational-training-supplies/page'));
const ResearchDevelopmentEquipmentPage = lazy(() => import('./app/products/categories/research-development-equipment/page'));
const InventoryManagementSystemsPage = lazy(() => import('./app/products/categories/inventory-management-systems/page'));
const HospitalClinicalPharmacyServicesPage = lazy(() => import('./app/products/categories/hospital-clinical-pharmacy-services/page'));
const TechnologySolutionsPage = lazy(() => import('./app/products/categories/technology-solutions/page'));
const RegulatoryComplianceQualityAssurancePage = lazy(() => import('./app/products/categories/regulatory-compliance-quality-assurance/page'));
const ClinicalServicesTrainingPage = lazy(() => import('./app/products/categories/clinical-services-training/page'));
const PreventiveCareProductsPage = lazy(() => import('./app/products/categories/preventive-care-products/page'));
const MaternalChildHealthPage = lazy(() => import('./app/products/categories/maternal-child-health/page'));
const NutritionSupplementsPage = lazy(() => import('./app/products/categories/nutrition-supplements/page'));
const HealthEducationAwarenessPage = lazy(() => import('./app/products/categories/health-education-awareness/page'));
const EmergencyResponseDisasterReliefPage = lazy(() => import('./app/products/categories/emergency-response-disaster-relief/page'));
const WaterSanitationHygienePage = lazy(() => import('./app/products/categories/water-sanitation-hygiene/page'));

// Product Subcategories - Division 1 (Pharmaceuticals)
const AntiInfectivesPage = lazy(() => import('./app/products/subcategories/anti-infectives/page'));
const PatentedNCDTreatmentsPage = lazy(() => import('./app/products/subcategories/patented-ncd-treatments/page'));
const SpecialtyMedicationsPage = lazy(() => import('./app/products/subcategories/specialty-medications/page'));
const VaccinesPage = lazy(() => import('./app/products/subcategories/vaccines/page'));
const PainFeverReliefPage = lazy(() => import('./app/products/subcategories/pain-fever-relief/page'));
const ColdFluMedicationsPage = lazy(() => import('./app/products/subcategories/cold-flu-medications/page'));
const AllergyAntihistaminesPage = lazy(() => import('./app/products/subcategories/allergy-antihistamines/page'));
const DigestiveHealthPage = lazy(() => import('./app/products/subcategories/digestive-health/page'));
const WomensHealthOTCPage = lazy(() => import('./app/products/subcategories/womens-health-otc/page'));
const OralHealthPage = lazy(() => import('./app/products/subcategories/oral-health/page'));
const EyeEarCarePage = lazy(() => import('./app/products/subcategories/eye-ear-care/page'));
const SkinCareTopicalsPage = lazy(() => import('./app/products/subcategories/skin-care-topicals/page'));
const VitaminsSupplementsPage = lazy(() => import('./app/products/subcategories/vitamins-supplements/page'));

// Product Subcategories - Medical Consumables
const InjectionInfusionPage = lazy(() => import('./app/products/subcategories/injection-infusion/page'));
const WoundCareDressingsPage = lazy(() => import('./app/products/subcategories/wound-care-dressings/page'));
const PersonalProtectiveEquipmentPage = lazy(() => import('./app/products/subcategories/personal-protective-equipment/page'));
const DiagnosticTestingSuppliesPage = lazy(() => import('./app/products/subcategories/diagnostic-testing-supplies/page'));
const ChronicDiseaseManagementConsumablesPage = lazy(() => import('./app/products/subcategories/chronic-disease-management-consumables/page'));
const MaternalChildHealthConsumablesPage = lazy(() => import('./app/products/subcategories/maternal-child-health-consumables/page'));

// Product Subcategories - Surgical & Procedural
const SurgicalInstrumentsPage = lazy(() => import('./app/products/subcategories/surgical-instruments/page'));
const SurgicalConsumablesPage = lazy(() => import('./app/products/subcategories/surgical-consumables/page'));
const SuturingClosurePage = lazy(() => import('./app/products/subcategories/suturing-closure/page'));
const SterilizationDisinfectionPage = lazy(() => import('./app/products/subcategories/sterilization-disinfection/page'));
const OperatingRoomSuppliesPage = lazy(() => import('./app/products/subcategories/operating-room-supplies/page'));
const ProceduralPacksPage = lazy(() => import('./app/products/subcategories/procedural-packs/page'));
const SpecialtySurgicalInstrumentsPage = lazy(() => import('./app/products/subcategories/specialty-surgical-instruments/page'));
const ElectrosurgicalEquipmentPage = lazy(() => import('./app/products/subcategories/electrosurgical-equipment/page'));
const SurgicalLightingVisualizationPage = lazy(() => import('./app/products/subcategories/surgical-lighting-visualization/page'));
const MinimallyInvasiveSurgeryPage = lazy(() => import('./app/products/subcategories/minimally-invasive-surgery/page'));

// Product Subcategories - Diagnostic Equipment
const DiagnosticImagingEquipmentPage = lazy(() => import('./app/products/subcategories/diagnostic-imaging-equipment/page'));
const PatientMonitoringVitalsPage = lazy(() => import('./app/products/subcategories/patient-monitoring-vitals/page'));
const PointOfCareTestingPage = lazy(() => import('./app/products/subcategories/point-of-care-testing/page'));
const RespiratoryOxygenTherapyPage = lazy(() => import('./app/products/subcategories/respiratory-oxygen-therapy/page'));

// Product Subcategories - Durable Medical Equipment
const HospitalBedsFurniturePage = lazy(() => import('./app/products/subcategories/hospital-beds-furniture/page'));
const ExaminationTreatmentTablesPage = lazy(() => import('./app/products/subcategories/examination-treatment-tables/page'));
const WheelchairsMobilityAidsPage = lazy(() => import('./app/products/subcategories/wheelchairs-mobility-aids/page'));
const PatientLiftsTransferPage = lazy(() => import('./app/products/subcategories/patient-lifts-transfer/page'));
const StretchersTransportPage = lazy(() => import('./app/products/subcategories/stretchers-transport/page'));
const MedicalCartsStoragePage = lazy(() => import('./app/products/subcategories/medical-carts-storage/page'));

// Product Subcategories - Laboratory Equipment
const LaboratoryEquipmentPage = lazy(() => import('./app/products/subcategories/laboratory-equipment/page'));
const ClinicalLabAnalyzersPage = lazy(() => import('./app/products/subcategories/clinical-lab-analyzers/page'));
const ClinicalChemistryAnalyzersPage = lazy(() => import('./app/products/subcategories/clinical-chemistry-analyzers/page'));
const HematologyCoagulationPage = lazy(() => import('./app/products/subcategories/hematology-coagulation/page'));
const MicrobiologySerologyPage = lazy(() => import('./app/products/subcategories/microbiology-serology/page'));
const MicroscopyImagingSystemsPage = lazy(() => import('./app/products/subcategories/microscopy-imaging-systems/page'));
const CentrifugesSampleProcessingPage = lazy(() => import('./app/products/subcategories/centrifuges-sample-processing/page'));
const IncubatorsEnvironmentalChambersPage = lazy(() => import('./app/products/subcategories/incubators-environmental-chambers/page'));
const SterilizationAutoclaveEquipmentPage = lazy(() => import('./app/products/subcategories/sterilization-autoclave-equipment/page'));
const LaboratoryRefrigerationStoragePage = lazy(() => import('./app/products/subcategories/laboratory-refrigeration-storage/page'));
const LaboratoryFurnitureWorkstationsPage = lazy(() => import('./app/products/subcategories/laboratory-furniture-workstations/page'));
const LaboratorySafetyContainmentPage = lazy(() => import('./app/products/subcategories/laboratory-safety-containment/page'));
const AdvancedAnalyticalInstrumentsPage = lazy(() => import('./app/products/subcategories/advanced-analytical-instruments/page'));

// Product Subcategories - Laboratory Reagents
const ClinicalChemistryReagentsPage = lazy(() => import('./app/products/subcategories/clinical-chemistry-reagents/page'));
const HematologyCoagulationReagentsPage = lazy(() => import('./app/products/subcategories/hematology-coagulation-reagents/page'));
const ImmunologySerologyReagentsPage = lazy(() => import('./app/products/subcategories/immunology-serology-reagents/page'));
const MicrobiologyCultureMediaPage = lazy(() => import('./app/products/subcategories/microbiology-culture-media/page'));
const MolecularBiologyReagentsPage = lazy(() => import('./app/products/subcategories/molecular-biology-reagents/page'));
const BloodBankTransfusionReagentsPage = lazy(() => import('./app/products/subcategories/blood-bank-transfusion-reagents/page'));
const UrinalysisBodyFluidReagentsPage = lazy(() => import('./app/products/subcategories/urinalysis-body-fluid-reagents/page'));
const LaboratoryChemicalsSolventsPage = lazy(() => import('./app/products/subcategories/laboratory-chemicals-solvents/page'));
const LaboratoryConsumablesReagentsPage = lazy(() => import('./app/products/subcategories/laboratory-consumables-reagents/page'));
const SpecimenCollectionProcessingPage = lazy(() => import('./app/products/subcategories/specimen-collection-processing/page'));

// Product Subcategories - Educational & Training
const AnatomicalModelsTeachingAidsPage = lazy(() => import('./app/products/subcategories/anatomical-models-teaching-aids/page'));
const MedicalSimulationTaskTrainersPage = lazy(() => import('./app/products/subcategories/medical-simulation-task-trainers/page'));
const NursingClinicalSkillsTrainingPage = lazy(() => import('./app/products/subcategories/nursing-clinical-skills-training/page'));
const LaboratoryScienceEducationPage = lazy(() => import('./app/products/subcategories/laboratory-science-education/page'));
const TrainingConsumablesPracticeSuppliesPage = lazy(() => import('./app/products/subcategories/training-consumables-practice-supplies/page'));

// Product Subcategories - Research & Development
const BiotechnologyLifeSciencesResearchPage = lazy(() => import('./app/products/subcategories/biotechnology-life-sciences-research/page'));
const InfectiousDiseaseResearchPage = lazy(() => import('./app/products/subcategories/infectious-disease-research/page'));
const ClinicalResearchTrialsPage = lazy(() => import('./app/products/subcategories/clinical-research-trials/page'));
const EnvironmentalFieldResearchPage = lazy(() => import('./app/products/subcategories/environmental-field-research/page'));

// Product Subcategories - Inventory Management
const InventoryTrackingPage = lazy(() => import('./app/products/subcategories/inventory-tracking/page'));
const AutomatedOrderingSystemsPage = lazy(() => import('./app/products/subcategories/automated-ordering-systems/page'));
const StorageOrganizationPage = lazy(() => import('./app/products/subcategories/storage-organization/page'));

// Product Subcategories - Hospital/Clinical Pharmacy Services
const InpatientPharmacyOperationsPage = lazy(() => import('./app/products/subcategories/inpatient-pharmacy-operations/page'));
const CriticalCareEmergencyPharmacyPage = lazy(() => import('./app/products/subcategories/critical-care-emergency-pharmacy/page'));
const SpecializedDiseaseProgramPharmacyPage = lazy(() => import('./app/products/subcategories/specialized-disease-program-pharmacy/page'));
const PharmaceuticalCarePage = lazy(() => import('./app/products/subcategories/pharmaceutical-care/page'));
const PatientCareServicesPage = lazy(() => import('./app/products/subcategories/patient-care-services/page'));
const PainPalliativeCarePage = lazy(() => import('./app/products/subcategories/pain-palliative-care/page'));

// Product Subcategories - Technology Solutions
const PharmacyManagementSoftwarePage = lazy(() => import('./app/products/subcategories/pharmacy-management-software/page'));
const ClinicalDecisionSupportPage = lazy(() => import('./app/products/subcategories/clinical-decision-support/page'));
const DigitalHealthIntegrationPharmacyPage = lazy(() => import('./app/products/subcategories/digital-health-integration-pharmacy/page'));

// Product Subcategories - Regulatory/Compliance
const GoodPharmacyPracticePage = lazy(() => import('./app/products/subcategories/good-pharmacy-practice/page'));
const LicensingCertificationSupportPage = lazy(() => import('./app/products/subcategories/licensing-certification-support/page'));
const QualityControlSystemsPage = lazy(() => import('./app/products/subcategories/quality-control-systems/page'));

// Product Subcategories - Clinical Services & Training
const PharmacistEducationPage = lazy(() => import('./app/products/subcategories/pharmacist-education/page'));
const TrainingCapacityBuildingPage = lazy(() => import('./app/products/subcategories/training-capacity-building/page'));

// Product Subcategories - Preventive Care
const VaccinationImmunizationPage = lazy(() => import('./app/products/subcategories/vaccination-immunization/page'));
const DiseasePreventionSuppliesPage = lazy(() => import('./app/products/subcategories/disease-prevention-supplies/page'));
const FirstAidWoundCarePage = lazy(() => import('./app/products/subcategories/first-aid-wound-care/page'));

// Product Subcategories - Maternal & Child Health
const MaternalChildHealthPharmaPage = lazy(() => import('./app/products/subcategories/maternal-child-health-pharma/page'));
const PrenatalCareProductsPage = lazy(() => import('./app/products/subcategories/prenatal-care-products/page'));
const SafeDeliverySuppliesPage = lazy(() => import('./app/products/subcategories/safe-delivery-supplies/page'));
const PostnatalNewbornCarePage = lazy(() => import('./app/products/subcategories/postnatal-newborn-care/page'));
const ChildNutritionGrowthPage = lazy(() => import('./app/products/subcategories/child-nutrition-growth/page'));

// Product Subcategories - Nutrition & Supplements
const MicronutrientSupplementsPage = lazy(() => import('./app/products/subcategories/micronutrient-supplements/page'));
const TherapeuticFoodsPage = lazy(() => import('./app/products/subcategories/therapeutic-foods/page'));
const FortifiedFoodsPage = lazy(() => import('./app/products/subcategories/fortified-foods/page'));

// Product Subcategories - Health Education
const HealthEducationMaterialsPage = lazy(() => import('./app/products/subcategories/health-education-materials/page'));
const BehaviorChangeCommunicationPage = lazy(() => import('./app/products/subcategories/behavior-change-communication/page'));
const CommunityHealthMonitoringPage = lazy(() => import('./app/products/subcategories/community-health-monitoring/page'));
const HealthScreeningProgramsPage = lazy(() => import('./app/products/subcategories/health-screening-programs/page'));
const NonCommunicableDiseasesPage = lazy(() => import('./app/products/subcategories/non-communicable-diseases/page'));
const EducationalMaterialsCurriculaPage = lazy(() => import('./app/products/subcategories/educational-materials-curricula/page'));

// Product Subcategories - Emergency Response
const EmergencyMedicalSuppliesPage = lazy(() => import('./app/products/subcategories/emergency-medical-supplies/page'));
const OutbreakResponseEquipmentPage = lazy(() => import('./app/products/subcategories/outbreak-response-equipment/page'));
const DisasterPreparednessSystemsPage = lazy(() => import('./app/products/subcategories/disaster-preparedness-systems/page'));

// Product Subcategories - WASH
const WaterQualityTreatmentPage = lazy(() => import('./app/products/subcategories/water-quality-treatment/page'));
const SanitationInfrastructurePage = lazy(() => import('./app/products/subcategories/sanitation-infrastructure/page'));
const HygienePromotionSuppliesPage = lazy(() => import('./app/products/subcategories/hygiene-promotion-supplies/page'));

// Product Subcategories - Therapeutics
const TherapeuticRehabilitationPage = lazy(() => import('./app/products/subcategories/therapeutic-rehabilitation/page'));
const LaboratoryConsumablesPage = lazy(() => import('./app/products/subcategories/laboratory-consumables/page'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0033A0] mx-auto"></div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* About */}
              <Route path="/ceo-message" element={<CEOMessage />} />
              <Route path="/our-approach" element={<OurApproachPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              
              {/* About - New Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/board" element={<BoardPage />} />
              <Route path="/about/management" element={<ManagementPage />} />
              <Route path="/about/commitments" element={<CommitmentsPage />} />
              <Route path="/about/sustainability" element={<SustainabilityPage />} />
              <Route path="/about/sustainability/environmental-responsibility" element={<EnvironmentalResponsibilityPage />} />
              <Route path="/about/management/amara-okonkwo" element={<AmaraOkonkwoPage />} />
              <Route path="/about/management/david-seyaker" element={<DavidSeyakerPage />} />
              <Route path="/about/management/james-kariuki" element={<JamesKariukiPage />} />
              <Route path="/about/management/jennifer-chen" element={<JenniferChenPage />} />
              <Route path="/about/management/lisa-thompson" element={<LisaThompsonPage />} />
              <Route path="/about/management/michael-anderson" element={<MichaelAndersonPage />} />
              <Route path="/about/management/robert-williams" element={<RobertWilliamsPage />} />
              <Route path="/about/management/sarah-mitchell" element={<SarahMitchellPage />} />
              <Route path="/about/management/fatima-diallo" element={<FatimaDialloPage />} />
              <Route path="/about/management/kwame-mensah" element={<KwameMensahPage />} />
              <Route path="/about/management/thandiwe-moyo" element={<ThandiweMoyoPage />} />
              <Route path="/about/management/mohammed-hassan" element={<MohammedHassanPage />} />
              <Route path="/about/management/grace-wanjiru" element={<GraceWanjiruPage />} />
              <Route path="/about/management/youssef-el-amin" element={<YoussefElAminPage />} />
              <Route path="/about/management/adaeze-nwachukwu" element={<AdaezeNwachukwuPage />} />
              
              {/* Products */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/division1" element={<Division1Page />} />
              <Route path="/products/division2" element={<Division2Page />} />
              <Route path="/products/division3" element={<Division3Page />} />
              
              {/* Product Categories */}
              <Route path="/products/categories/generic-pharmaceuticals" element={<GenericPharmaceuticalsPage />} />
              <Route path="/products/categories/branded-patented-pharmaceuticals" element={<BrandedPatentedPharmaceuticalsPage />} />
              <Route path="/products/categories/over-the-counter-products" element={<OverTheCounterProductsPage />} />
              <Route path="/products/categories/medical-consumables" element={<MedicalConsumablesPage />} />
              <Route path="/products/categories/surgical-procedural-supplies" element={<SurgicalProceduralSuppliesPage />} />
              <Route path="/products/categories/diagnostic-equipment-supplies" element={<DiagnosticEquipmentSuppliesPage />} />
              <Route path="/products/categories/durable-medical-equipment" element={<DurableMedicalEquipmentPage />} />
              <Route path="/products/categories/laboratory-equipment-instrumentation" element={<LaboratoryEquipmentInstrumentationPage />} />
              <Route path="/products/categories/laboratory-reagents-chemicals" element={<LaboratoryReagentsChemicalsPage />} />
              <Route path="/products/categories/educational-training-supplies" element={<EducationalTrainingSuppliesPage />} />
              <Route path="/products/categories/research-development-equipment" element={<ResearchDevelopmentEquipmentPage />} />
              <Route path="/products/categories/inventory-management-systems" element={<InventoryManagementSystemsPage />} />
              <Route path="/products/categories/hospital-clinical-pharmacy-services" element={<HospitalClinicalPharmacyServicesPage />} />
              <Route path="/products/categories/technology-solutions" element={<TechnologySolutionsPage />} />
              <Route path="/products/categories/regulatory-compliance-quality-assurance" element={<RegulatoryComplianceQualityAssurancePage />} />
              <Route path="/products/categories/clinical-services-training" element={<ClinicalServicesTrainingPage />} />
              <Route path="/products/categories/preventive-care-products" element={<PreventiveCareProductsPage />} />
              <Route path="/products/categories/maternal-child-health" element={<MaternalChildHealthPage />} />
              <Route path="/products/categories/nutrition-supplements" element={<NutritionSupplementsPage />} />
              <Route path="/products/categories/health-education-awareness" element={<HealthEducationAwarenessPage />} />
              <Route path="/products/categories/emergency-response-disaster-relief" element={<EmergencyResponseDisasterReliefPage />} />
              <Route path="/products/categories/water-sanitation-hygiene" element={<WaterSanitationHygienePage />} />
              
              {/* Product Subcategories - Pharmaceuticals */}
              <Route path="/products/subcategories/anti-infectives" element={<AntiInfectivesPage />} />
              <Route path="/products/subcategories/patented-ncd-treatments" element={<PatentedNCDTreatmentsPage />} />
              <Route path="/products/subcategories/specialty-medications" element={<SpecialtyMedicationsPage />} />
              <Route path="/products/subcategories/vaccines" element={<VaccinesPage />} />
              <Route path="/products/subcategories/pain-fever-relief" element={<PainFeverReliefPage />} />
              <Route path="/products/subcategories/cold-flu-medications" element={<ColdFluMedicationsPage />} />
              <Route path="/products/subcategories/allergy-antihistamines" element={<AllergyAntihistaminesPage />} />
              <Route path="/products/subcategories/digestive-health" element={<DigestiveHealthPage />} />
              <Route path="/products/subcategories/womens-health-otc" element={<WomensHealthOTCPage />} />
              <Route path="/products/subcategories/oral-health" element={<OralHealthPage />} />
              <Route path="/products/subcategories/eye-ear-care" element={<EyeEarCarePage />} />
              <Route path="/products/subcategories/skin-care-topicals" element={<SkinCareTopicalsPage />} />
              <Route path="/products/subcategories/vitamins-supplements" element={<VitaminsSupplementsPage />} />
              
              {/* Product Subcategories - Medical Consumables */}
              <Route path="/products/subcategories/injection-infusion" element={<InjectionInfusionPage />} />
              <Route path="/products/subcategories/wound-care-dressings" element={<WoundCareDressingsPage />} />
              <Route path="/products/subcategories/personal-protective-equipment" element={<PersonalProtectiveEquipmentPage />} />
              <Route path="/products/subcategories/diagnostic-testing-supplies" element={<DiagnosticTestingSuppliesPage />} />
              <Route path="/products/subcategories/chronic-disease-management-consumables" element={<ChronicDiseaseManagementConsumablesPage />} />
              <Route path="/products/subcategories/maternal-child-health-consumables" element={<MaternalChildHealthConsumablesPage />} />
              
              {/* Product Subcategories - Surgical */}
              <Route path="/products/subcategories/surgical-instruments" element={<SurgicalInstrumentsPage />} />
              <Route path="/products/subcategories/surgical-consumables" element={<SurgicalConsumablesPage />} />
              <Route path="/products/subcategories/suturing-closure" element={<SuturingClosurePage />} />
              <Route path="/products/subcategories/sterilization-disinfection" element={<SterilizationDisinfectionPage />} />
              <Route path="/products/subcategories/operating-room-supplies" element={<OperatingRoomSuppliesPage />} />
              <Route path="/products/subcategories/procedural-packs" element={<ProceduralPacksPage />} />
              <Route path="/products/subcategories/specialty-surgical-instruments" element={<SpecialtySurgicalInstrumentsPage />} />
              <Route path="/products/subcategories/electrosurgical-equipment" element={<ElectrosurgicalEquipmentPage />} />
              <Route path="/products/subcategories/surgical-lighting-visualization" element={<SurgicalLightingVisualizationPage />} />
              <Route path="/products/subcategories/minimally-invasive-surgery" element={<MinimallyInvasiveSurgeryPage />} />
              
              {/* Product Subcategories - Diagnostic */}
              <Route path="/products/subcategories/diagnostic-imaging-equipment" element={<DiagnosticImagingEquipmentPage />} />
              <Route path="/products/subcategories/patient-monitoring-vitals" element={<PatientMonitoringVitalsPage />} />
              <Route path="/products/subcategories/point-of-care-testing" element={<PointOfCareTestingPage />} />
              <Route path="/products/subcategories/respiratory-oxygen-therapy" element={<RespiratoryOxygenTherapyPage />} />
              
              {/* Product Subcategories - Durable Equipment */}
              <Route path="/products/subcategories/hospital-beds-furniture" element={<HospitalBedsFurniturePage />} />
              <Route path="/products/subcategories/examination-treatment-tables" element={<ExaminationTreatmentTablesPage />} />
              <Route path="/products/subcategories/wheelchairs-mobility-aids" element={<WheelchairsMobilityAidsPage />} />
              <Route path="/products/subcategories/patient-lifts-transfer" element={<PatientLiftsTransferPage />} />
              <Route path="/products/subcategories/stretchers-transport" element={<StretchersTransportPage />} />
              <Route path="/products/subcategories/medical-carts-storage" element={<MedicalCartsStoragePage />} />
              
              {/* Product Subcategories - Laboratory Equipment */}
              <Route path="/products/subcategories/laboratory-equipment" element={<LaboratoryEquipmentPage />} />
              <Route path="/products/subcategories/clinical-lab-analyzers" element={<ClinicalLabAnalyzersPage />} />
              <Route path="/products/subcategories/clinical-chemistry-analyzers" element={<ClinicalChemistryAnalyzersPage />} />
              <Route path="/products/subcategories/hematology-coagulation" element={<HematologyCoagulationPage />} />
              <Route path="/products/subcategories/microbiology-serology" element={<MicrobiologySerologyPage />} />
              <Route path="/products/subcategories/microscopy-imaging-systems" element={<MicroscopyImagingSystemsPage />} />
              <Route path="/products/subcategories/centrifuges-sample-processing" element={<CentrifugesSampleProcessingPage />} />
              <Route path="/products/subcategories/incubators-environmental-chambers" element={<IncubatorsEnvironmentalChambersPage />} />
              <Route path="/products/subcategories/sterilization-autoclave-equipment" element={<SterilizationAutoclaveEquipmentPage />} />
              <Route path="/products/subcategories/laboratory-refrigeration-storage" element={<LaboratoryRefrigerationStoragePage />} />
              <Route path="/products/subcategories/laboratory-furniture-workstations" element={<LaboratoryFurnitureWorkstationsPage />} />
              <Route path="/products/subcategories/laboratory-safety-containment" element={<LaboratorySafetyContainmentPage />} />
              <Route path="/products/subcategories/advanced-analytical-instruments" element={<AdvancedAnalyticalInstrumentsPage />} />
              
              {/* Product Subcategories - Laboratory Reagents */}
              <Route path="/products/subcategories/clinical-chemistry-reagents" element={<ClinicalChemistryReagentsPage />} />
              <Route path="/products/subcategories/hematology-coagulation-reagents" element={<HematologyCoagulationReagentsPage />} />
              <Route path="/products/subcategories/immunology-serology-reagents" element={<ImmunologySerologyReagentsPage />} />
              <Route path="/products/subcategories/microbiology-culture-media" element={<MicrobiologyCultureMediaPage />} />
              <Route path="/products/subcategories/molecular-biology-reagents" element={<MolecularBiologyReagentsPage />} />
              <Route path="/products/subcategories/blood-bank-transfusion-reagents" element={<BloodBankTransfusionReagentsPage />} />
              <Route path="/products/subcategories/urinalysis-body-fluid-reagents" element={<UrinalysisBodyFluidReagentsPage />} />
              <Route path="/products/subcategories/laboratory-chemicals-solvents" element={<LaboratoryChemicalsSolventsPage />} />
              <Route path="/products/subcategories/laboratory-consumables-reagents" element={<LaboratoryConsumablesReagentsPage />} />
              <Route path="/products/subcategories/specimen-collection-processing" element={<SpecimenCollectionProcessingPage />} />
              
              {/* Product Subcategories - Educational */}
              <Route path="/products/subcategories/anatomical-models-teaching-aids" element={<AnatomicalModelsTeachingAidsPage />} />
              <Route path="/products/subcategories/medical-simulation-task-trainers" element={<MedicalSimulationTaskTrainersPage />} />
              <Route path="/products/subcategories/nursing-clinical-skills-training" element={<NursingClinicalSkillsTrainingPage />} />
              <Route path="/products/subcategories/laboratory-science-education" element={<LaboratoryScienceEducationPage />} />
              <Route path="/products/subcategories/training-consumables-practice-supplies" element={<TrainingConsumablesPracticeSuppliesPage />} />
              
              {/* Product Subcategories - Research */}
              <Route path="/products/subcategories/biotechnology-life-sciences-research" element={<BiotechnologyLifeSciencesResearchPage />} />
              <Route path="/products/subcategories/infectious-disease-research" element={<InfectiousDiseaseResearchPage />} />
              <Route path="/products/subcategories/clinical-research-trials" element={<ClinicalResearchTrialsPage />} />
              <Route path="/products/subcategories/environmental-field-research" element={<EnvironmentalFieldResearchPage />} />
              
              {/* Product Subcategories - Inventory */}
              <Route path="/products/subcategories/inventory-tracking" element={<InventoryTrackingPage />} />
              <Route path="/products/subcategories/automated-ordering-systems" element={<AutomatedOrderingSystemsPage />} />
              <Route path="/products/subcategories/storage-organization" element={<StorageOrganizationPage />} />
              
              {/* Product Subcategories - Pharmacy Services */}
              <Route path="/products/subcategories/inpatient-pharmacy-operations" element={<InpatientPharmacyOperationsPage />} />
              <Route path="/products/subcategories/critical-care-emergency-pharmacy" element={<CriticalCareEmergencyPharmacyPage />} />
              <Route path="/products/subcategories/specialized-disease-program-pharmacy" element={<SpecializedDiseaseProgramPharmacyPage />} />
              <Route path="/products/subcategories/pharmaceutical-care" element={<PharmaceuticalCarePage />} />
              <Route path="/products/subcategories/patient-care-services" element={<PatientCareServicesPage />} />
              <Route path="/products/subcategories/pain-palliative-care" element={<PainPalliativeCarePage />} />
              
              {/* Product Subcategories - Technology */}
              <Route path="/products/subcategories/pharmacy-management-software" element={<PharmacyManagementSoftwarePage />} />
              <Route path="/products/subcategories/clinical-decision-support" element={<ClinicalDecisionSupportPage />} />
              <Route path="/products/subcategories/digital-health-integration-pharmacy" element={<DigitalHealthIntegrationPharmacyPage />} />
              
              {/* Product Subcategories - Regulatory */}
              <Route path="/products/subcategories/good-pharmacy-practice" element={<GoodPharmacyPracticePage />} />
              <Route path="/products/subcategories/licensing-certification-support" element={<LicensingCertificationSupportPage />} />
              <Route path="/products/subcategories/quality-control-systems" element={<QualityControlSystemsPage />} />
              
              {/* Product Subcategories - Training */}
              <Route path="/products/subcategories/pharmacist-education" element={<PharmacistEducationPage />} />
              <Route path="/products/subcategories/training-capacity-building" element={<TrainingCapacityBuildingPage />} />
              
              {/* Product Subcategories - Preventive Care */}
              <Route path="/products/subcategories/vaccination-immunization" element={<VaccinationImmunizationPage />} />
              <Route path="/products/subcategories/disease-prevention-supplies" element={<DiseasePreventionSuppliesPage />} />
              <Route path="/products/subcategories/first-aid-wound-care" element={<FirstAidWoundCarePage />} />
              
              {/* Product Subcategories - Maternal & Child Health */}
              <Route path="/products/subcategories/maternal-child-health-pharma" element={<MaternalChildHealthPharmaPage />} />
              <Route path="/products/subcategories/prenatal-care-products" element={<PrenatalCareProductsPage />} />
              <Route path="/products/subcategories/safe-delivery-supplies" element={<SafeDeliverySuppliesPage />} />
              <Route path="/products/subcategories/postnatal-newborn-care" element={<PostnatalNewbornCarePage />} />
              <Route path="/products/subcategories/child-nutrition-growth" element={<ChildNutritionGrowthPage />} />
              
              {/* Product Subcategories - Nutrition */}
              <Route path="/products/subcategories/micronutrient-supplements" element={<MicronutrientSupplementsPage />} />
              <Route path="/products/subcategories/therapeutic-foods" element={<TherapeuticFoodsPage />} />
              <Route path="/products/subcategories/fortified-foods" element={<FortifiedFoodsPage />} />
              
              {/* Product Subcategories - Health Education */}
              <Route path="/products/subcategories/health-education-materials" element={<HealthEducationMaterialsPage />} />
              <Route path="/products/subcategories/behavior-change-communication" element={<BehaviorChangeCommunicationPage />} />
              <Route path="/products/subcategories/community-health-monitoring" element={<CommunityHealthMonitoringPage />} />
              <Route path="/products/subcategories/health-screening-programs" element={<HealthScreeningProgramsPage />} />
              <Route path="/products/subcategories/non-communicable-diseases" element={<NonCommunicableDiseasesPage />} />
              <Route path="/products/subcategories/educational-materials-curricula" element={<EducationalMaterialsCurriculaPage />} />
              
              {/* Product Subcategories - Emergency */}
              <Route path="/products/subcategories/emergency-medical-supplies" element={<EmergencyMedicalSuppliesPage />} />
              <Route path="/products/subcategories/outbreak-response-equipment" element={<OutbreakResponseEquipmentPage />} />
              <Route path="/products/subcategories/disaster-preparedness-systems" element={<DisasterPreparednessSystemsPage />} />
              
              {/* Product Subcategories - WASH */}
              <Route path="/products/subcategories/water-quality-treatment" element={<WaterQualityTreatmentPage />} />
              <Route path="/products/subcategories/sanitation-infrastructure" element={<SanitationInfrastructurePage />} />
              <Route path="/products/subcategories/hygiene-promotion-supplies" element={<HygienePromotionSuppliesPage />} />
              
              {/* Product Subcategories - Other */}
              <Route path="/products/subcategories/therapeutic-rehabilitation" element={<TherapeuticRehabilitationPage />} />
              <Route path="/products/subcategories/laboratory-consumables" element={<LaboratoryConsumablesPage />} />
              
              {/* Programs */}
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/healthcare-development" element={<HealthcareDevelopmentPage />} />
              <Route path="/programs/pacem-excellence" element={<PacemExcellencePage />} />
              <Route path="/programs/pediatric-pharmacy" element={<PediatricPharmacyPage />} />
              
              {/* Services */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/market-access" element={<MarketAccessPage />} />
              <Route path="/services/procurement-sourcing" element={<ProcurementSourcingPage />} />
              <Route path="/services/supply-chain-logistics" element={<SupplyChainLogisticsPage />} />
              <Route path="/services/quality-assurance" element={<QualityAssurancePage />} />
              <Route path="/services/wholesale-distribution" element={<WholesaleDistributionPage />} />
              <Route path="/services/regulatory" element={<RegulatoryServicesPage />} />
              <Route path="/services/medical-services" element={<MedicalServicesPage />} />
              <Route path="/services/compliance-training" element={<ComplianceTrainingPage />} />
              <Route path="/services/infrastructure-planning" element={<InfrastructurePlanningPage />} />
              
              {/* Advanced Solutions */}
              <Route path="/advanced-solutions" element={<AdvancedSolutionsPage />} />
              <Route path="/advanced-solutions/digital-health-platforms" element={<DigitalHealthPlatformsPage />} />
              <Route path="/advanced-solutions/fleet-equipment-management" element={<FleetEquipmentManagementPage />} />
              <Route path="/advanced-solutions/mobile-diagnostics" element={<MobileDiagnosticsPage />} />
              <Route path="/advanced-solutions/health-intelligence-analytics" element={<HealthIntelligenceAnalyticsPage />} />
              <Route path="/advanced-solutions/medtrace-pharmaceutical-tracking" element={<MedtracePharmaceuticalTrackingPage />} />
              <Route path="/advanced-solutions/asset360-equipment-lifecycle" element={<Asset360EquipmentLifecyclePage />} />
              <Route path="/advanced-solutions/fieldpro-biomedical-network" element={<FieldproBiomedicalNetworkPage />} />
              
              {/* News */}
              <Route path="/news" element={<NewsMedia />} />
              <Route path="/news/pacem-health-launches" element={<PacemHealthLaunches />} />
              <Route path="/news/afdb-partnership" element={<AfDBPartnership />} />
              <Route path="/news/product-catalog-launch" element={<ProductCatalogLaunch />} />
              <Route path="/news/infant-nutrition-product" element={<InfantNutritionProduct />} />
              <Route path="/news/kenya-moh-partnership" element={<KenyaMOHPartnership />} />
              <Route path="/news/digital-fleet-platform" element={<DigitalFleetPlatform />} />
              <Route path="/news/ghana-75k-patients" element={<Ghana75kPatients />} />
              <Route path="/news/africa-market-entry" element={<AfricaMarketEntry />} />
              <Route path="/news/pharmaceutical-hub-launch" element={<PharmaceuticalHubLaunch />} />
              <Route path="/news/university-partnership" element={<UniversityPartnership />} />
              <Route path="/news/hospital-pharmacy-impact" element={<HospitalPharmacyImpact />} />
              <Route path="/news/medical-equipment-deployment" element={<MedicalEquipmentDeployment />} />
              <Route path="/news/who-collaboration" element={<WHOCollaboration />} />
              <Route path="/news/digital-health-platform" element={<DigitalHealthPlatform />} />
              <Route path="/news/maternal-health-impact" element={<MaternalHealthImpact />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/cookies" element={<CookieSettingsPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              
              {/* Insights */}
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/case-studies" element={<InsightsCaseStudiesPage />} />
              <Route path="/insights/events-speaking" element={<InsightsEventsSpeakingPage />} />
              <Route path="/insights/partnerships" element={<InsightsPartnershipsPage />} />
              <Route path="/insights/publications" element={<InsightsPublicationsPage />} />
              <Route path="/insights/reports" element={<InsightsReportsPage />} />
              
              {/* Shop */}
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/education-training" element={<EducationTrainingPage />} />
              <Route path="/shop/training-simulation-kits" element={<TrainingSimulationKitsPage />} />
              <Route path="/shop/medical-equipment" element={<MedicalEquipmentPage />} />
              <Route path="/shop/parts-accessories" element={<PartsAccessoriesPage />} />
              <Route path="/shop/cold-chain-transport" element={<ColdChainTransportPage />} />
              <Route path="/shop/digital-health-data" element={<DigitalHealthDataPage />} />
              <Route path="/shop/refurbished-equipment" element={<RefurbishedEquipmentPage />} />
              
              {/* Shop - Product Detail Pages */}
              <Route path="/shop/cold-chain-transport/solar-vaccine-refrigerator" element={<SolarVaccineRefrigeratorPage />} />
              
              {/* Support */}
              <Route path="/support" element={<SupportPage />} />
              <Route path="/support/request-equipment-quote" element={<RequestEquipmentQuote />} />
              <Route path="/support/request-equipment-demo" element={<RequestEquipmentDemo />} />
              <Route path="/support/training-education" element={<TrainingEducation />} />
              <Route path="/support/platform-systems-support" element={<PlatformSystemsSupport />} />
              <Route path="/support/technical-support" element={<TechnicalSupport />} />
              <Route path="/support/product-equipment-documentation" element={<ProductEquipmentDocumentation />} />
              <Route path="/support/spare-parts-repair" element={<SparePartsRepair />} />
              <Route path="/support/career-staffing" element={<CareerStaffing />} />
              <Route path="/support/procurement-supply-chain" element={<ProcurementSupplyChain />} />
              <Route path="/support/donor-ngo-government" element={<DonorNGOGovernment />} />
              <Route path="/support/billing-finance" element={<BillingFinance />} />
              <Route path="/support/digital-health-integration" element={<DigitalHealthIntegration />} />
              <Route path="/support/site-planning-readiness" element={<SitePlanningReadiness />} />
              <Route path="/support/distributors-agents-resellers" element={<DistributorsAgentsResellers />} />
              <Route path="/support/product-safety-compliance" element={<ProductSafetyCompliance />} />
              <Route path="/support/general-inquiry" element={<GeneralInquiry />} />
              
              {/* Careers */}
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/careers/distribution-operations" element={<DistributionOperationsJobs />} />
              <Route path="/careers/clinical-pharmacy" element={<ClinicalPharmacyJobs />} />
              <Route path="/careers/health-systems-advisory" element={<HealthSystemsAdvisoryJobs />} />
              <Route path="/careers/technology-innovation" element={<TechnologyInnovationJobs />} />
              <Route path="/careers/business-operations" element={<BusinessOperationsJobs />} />
              <Route path="/careers/training-education" element={<TrainingEducationJobs />} />
              <Route path="/careers/regional-country-leadership" element={<RegionalCountryLeadershipJobs />} />
              <Route path="/careers/program-management" element={<ProgramManagementJobs />} />
              
              {/* Catch-all route - redirects any unmatched routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';

// Complete Product Catalog Structure
const productCatalog = {
  division1: {
    id: 'division1',
    name: 'Essential Healthcare Products',
    subtitle: 'Pharmaceutical, Medical Supplies & Products Distribution',
    pillars: [
      {
        id: 'pharmaceutical-distribution',
        name: 'Pharmaceutical Distribution',
        categories: [
          {
            id: 'generic-pharmaceuticals',
            name: 'Generic Pharmaceuticals',
            subcategories: [
              {
                id: 'anti-infectives',
                name: 'Anti-Infectives',
                productGroups: [
                  { id: 'antibiotics', name: 'Antibiotics', items: ['Amoxicillin', 'Ciprofloxacin', 'Azithromycin'] },
                  { id: 'antifungals', name: 'Antifungals', items: ['Fluconazole', 'Nystatin', 'Clotrimazole'] },
                  { id: 'antivirals', name: 'Antivirals', items: ['Acyclovir', 'Oseltamivir', 'Zidovudine'] },
                  { id: 'antimalarials', name: 'Antimalarials', items: ['Artemether-Lumefantrine', 'Quinine', 'Doxycycline'] }
                ]
              },
              {
                id: 'non-communicable-diseases',
                name: 'Non-Communicable Diseases (NCDs)',
                productGroups: [
                  { id: 'antihypertensives', name: 'Antihypertensives', items: ['Amlodipine', 'Lisinopril', 'Hydrochlorothiazide'] },
                  { id: 'oral-hypoglycemics', name: 'Oral Hypoglycemics', items: ['Metformin', 'Glibenclamide', 'Insulin'] },
                  { id: 'statins', name: 'Statins', items: ['Atorvastatin', 'Simvastatin', 'Rosuvastatin'] },
                  { id: 'cardiovascular', name: 'Cardiovascular', items: ['Aspirin', 'Clopidogrel', 'Warfarin'] }
                ]
              },
              {
                id: 'pain-palliative-care',
                name: 'Pain & Palliative Care',
                productGroups: [
                  { id: 'analgesics', name: 'Analgesics', items: ['Paracetamol', 'Ibuprofen', 'Diclofenac'] },
                  { id: 'opioids', name: 'Opioids', items: ['Morphine', 'Tramadol', 'Codeine'] },
                  { id: 'muscle-relaxants', name: 'Muscle Relaxants', items: ['Diazepam', 'Baclofen'] }
                ]
              },
              {
                id: 'maternal-child-health-pharma',
                name: 'Maternal & Child Health',
                productGroups: [
                  { id: 'prenatal-vitamins', name: 'Prenatal Vitamins', items: ['Folic Acid', 'Iron Supplements', 'Calcium'] },
                  { id: 'pediatric-formulations', name: 'Pediatric Formulations', items: ['ORS', 'Zinc Sulfate', 'Vitamin A'] },
                  { id: 'contraceptives', name: 'Contraceptives', items: ['Oral contraceptives', 'Injectable contraceptives', 'Condoms'] }
                ]
              }
            ]
          },
          {
            id: 'branded-patented-pharmaceuticals',
            name: 'Branded & Patented Pharmaceuticals',
            subcategories: [
              {
                id: 'specialty-medications',
                name: 'Specialty Medications',
                productGroups: [
                  { id: 'oncology', name: 'Oncology', items: ['Chemotherapy agents', 'Targeted therapies'] },
                  { id: 'biologics', name: 'Biologics', items: ['Monoclonal antibodies', 'Growth factors'] },
                  { id: 'immunosuppressants', name: 'Immunosuppressants', items: ['Cyclosporine', 'Tacrolimus', 'Mycophenolate'] }
                ]
              },
              {
                id: 'vaccines',
                name: 'Vaccines',
                productGroups: [
                  { id: 'routine-immunization', name: 'Routine Immunization', items: ['BCG', 'DPT', 'Polio', 'Measles', 'Hepatitis B'] },
                  { id: 'specialized-vaccines', name: 'Specialized Vaccines', items: ['HPV', 'Pneumococcal', 'Meningococcal'] },
                  { id: 'travel-vaccines', name: 'Travel Vaccines', items: ['Yellow Fever', 'Typhoid', 'Japanese Encephalitis'] }
                ]
              },
              {
                id: 'patented-ncd-treatments',
                name: 'Patented NCD Treatments',
                productGroups: [
                  { id: 'advanced-diabetes', name: 'Advanced Diabetes Therapies', items: ['GLP-1 agonists', 'SGLT-2 inhibitors'] },
                  { id: 'novel-cardiovascular', name: 'Novel Cardiovascular Treatments', items: ['PCSK9 inhibitors', 'ARNi'] },
                  { id: 'respiratory-medications', name: 'Respiratory Medications', items: ['Long-acting bronchodilators', 'Biologics for asthma'] }
                ]
              }
            ]
          },
          {
            id: 'otc-products',
            name: 'Over-the-Counter (OTC) Products',
            subcategories: [
              {
                id: 'analgesics-antipyretics',
                name: 'Analgesics & Antipyretics',
                productGroups: [
                  { id: 'pain-relief', name: 'Pain Relief', items: ['Paracetamol', 'Ibuprofen', 'Aspirin'] },
                  { id: 'topical-analgesics', name: 'Topical Analgesics', items: ['Diclofenac gel', 'Menthol rubs'] }
                ]
              },
              {
                id: 'vitamins-supplements',
                name: 'Vitamins & Supplements',
                productGroups: [
                  { id: 'multivitamins', name: 'Multivitamins', items: ['Adult', 'Pediatric', 'Prenatal'] },
                  { id: 'single-vitamins', name: 'Single Vitamins', items: ['Vitamin D', 'Vitamin C', 'B-Complex'] },
                  { id: 'minerals', name: 'Minerals', items: ['Iron', 'Calcium', 'Zinc'] }
                ]
              },
              {
                id: 'digestive-health',
                name: 'Digestive Health',
                productGroups: [
                  { id: 'antacids', name: 'Antacids', items: ['Aluminum hydroxide', 'Magnesium hydroxide'] },
                  { id: 'anti-diarrheals', name: 'Anti-diarrheals', items: ['Loperamide', 'Oral rehydration salts'] },
                  { id: 'probiotics', name: 'Probiotics', items: ['Lactobacillus', 'Bifidobacterium'] }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'medical-supplies-equipment',
        name: 'Medical Supplies & Equipment',
        categories: [
          {
            id: 'medical-consumables',
            name: 'Medical Consumables',
            subcategories: [
              {
                id: 'injection-infusion',
                name: 'Injection & Infusion',
                productGroups: [
                  { id: 'syringes', name: 'Syringes', items: ['1ml', '3ml', '5ml', '10ml', '20ml', '50ml'] },
                  { id: 'needles', name: 'Needles', items: ['Various gauges and lengths'] },
                  { id: 'iv-sets', name: 'IV Sets', items: ['Standard', 'Pediatric', 'Blood transfusion sets'] },
                  { id: 'iv-cannulas', name: 'IV Cannulas', items: ['14G-24G', 'Safety cannulas'] },
                  { id: 'infusion-bags', name: 'Infusion Bags', items: ['Normal saline', 'Dextrose', 'Ringers lactate'] }
                ]
              },
              {
                id: 'wound-care-dressings',
                name: 'Wound Care & Dressings',
                productGroups: [
                  { id: 'bandages', name: 'Bandages', items: ['Elastic', 'Gauze', 'Adhesive'] },
                  { id: 'wound-dressings', name: 'Wound Dressings', items: ['Hydrocolloid', 'Foam', 'Alginate'] },
                  { id: 'sutures', name: 'Sutures', items: ['Absorbable', 'Non-absorbable', 'Various sizes'] },
                  { id: 'antiseptics', name: 'Antiseptics', items: ['Povidone iodine', 'Chlorhexidine', 'Alcohol'] }
                ]
              },
              {
                id: 'personal-protective-equipment',
                name: 'Personal Protective Equipment (PPE)',
                productGroups: [
                  { id: 'gloves', name: 'Gloves', items: ['Examination', 'Surgical', 'Nitrile', 'Latex'] },
                  { id: 'masks', name: 'Masks', items: ['Surgical', 'N95', 'KN95'] },
                  { id: 'gowns', name: 'Gowns', items: ['Isolation', 'Surgical', 'Disposable'] },
                  { id: 'face-shields', name: 'Face Shields and Eye Protection' }
                ]
              },
              {
                id: 'laboratory-consumables',
                name: 'Laboratory Consumables',
                productGroups: [
                  { id: 'blood-collection-tubes', name: 'Blood Collection Tubes', items: ['EDTA', 'Heparin', 'Serum separator'] },
                  { id: 'specimen-containers', name: 'Specimen Containers', items: ['Urine', 'Stool', 'Sputum'] },
                  { id: 'microscope-slides', name: 'Microscope Slides and Cover Slips' },
                  { id: 'pipette-tips', name: 'Pipette Tips and Laboratory Plasticware' }
                ]
              }
            ]
          },
          {
            id: 'surgical-procedural-supplies',
            name: 'Surgical & Procedural Supplies',
            subcategories: [
              {
                id: 'surgical-instruments',
                name: 'Surgical Instruments',
                productGroups: [
                  { id: 'basic-surgical-sets', name: 'Basic Surgical Sets', items: ['Scalpels', 'Forceps', 'Scissors'] },
                  { id: 'specialized-instruments', name: 'Specialized Instruments', items: ['Orthopedic', 'Cardiovascular', 'Neurosurgical'] },
                  { id: 'electrosurgical-equipment', name: 'Electrosurgical Equipment', items: ['Cautery units', 'Electrodes'] },
                  { id: 'laparoscopic-instruments', name: 'Laparoscopic Instruments', items: ['Trocars', 'Graspers', 'Scissors'] }
                ]
              },
              {
                id: 'operating-room-supplies',
                name: 'Operating Room Supplies',
                productGroups: [
                  { id: 'surgical-drapes', name: 'Surgical Drapes', items: ['Sterile', 'Disposable', 'Reusable'] },
                  { id: 'surgical-gowns-scrubs', name: 'Surgical Gowns and Scrubs' },
                  { id: 'operating-table-accessories', name: 'Operating Table Accessories' },
                  { id: 'anesthesia-supplies', name: 'Anesthesia Supplies', items: ['Masks', 'Circuits', 'Endotracheal tubes'] }
                ]
              },
              {
                id: 'procedural-packs',
                name: 'Procedural Packs',
                productGroups: [
                  { id: 'delivery-kits', name: 'Delivery Kits', items: ['Normal delivery', 'C-section'] },
                  { id: 'minor-surgery-packs', name: 'Minor Surgery Packs', items: ['Suture', 'Biopsy', 'Catheterization'] },
                  { id: 'emergency-procedure-kits', name: 'Emergency Procedure Kits', items: ['Tracheostomy', 'Chest tube insertion'] }
                ]
              }
            ]
          },
          {
            id: 'diagnostic-equipment-supplies',
            name: 'Diagnostic Equipment & Supplies',
            subcategories: [
              {
                id: 'point-of-care-testing',
                name: 'Point-of-Care Testing',
                productGroups: [
                  { id: 'rapid-diagnostic-tests', name: 'Rapid Diagnostic Tests', items: ['Malaria', 'HIV', 'Hepatitis B/C', 'Syphilis'] },
                  { id: 'pregnancy-tests', name: 'Pregnancy Tests', items: ['Urine', 'Serum'] },
                  { id: 'blood-glucose-monitors', name: 'Blood Glucose Monitors and Test Strips' },
                  { id: 'hemoglobin-meters', name: 'Hemoglobin Meters and Cuvettes' }
                ]
              },
              {
                id: 'laboratory-consumables-diag',
                name: 'Laboratory Consumables',
                productGroups: [
                  { id: 'test-tubes', name: 'Test Tubes', items: ['Glass', 'Plastic', 'Various sizes'] },
                  { id: 'pipettes', name: 'Pipettes', items: ['Serological', 'Micropipettes', 'Disposable'] },
                  { id: 'culture-media', name: 'Culture Media', items: ['Blood agar', 'MacConkey', 'Sabouraud'] },
                  { id: 'microscope-slides-staining', name: 'Microscope Slides and Staining Reagents' }
                ]
              },
              {
                id: 'diagnostic-instruments',
                name: 'Diagnostic Instruments',
                productGroups: [
                  { id: 'blood-pressure-monitors', name: 'Blood Pressure Monitors', items: ['Manual', 'Digital', 'Ambulatory'] },
                  { id: 'thermometers', name: 'Thermometers', items: ['Digital', 'Infrared', 'Tympanic'] },
                  { id: 'stethoscopes', name: 'Stethoscopes', items: ['Adult', 'Pediatric', 'Electronic'] },
                  { id: 'pulse-oximeters', name: 'Pulse Oximeters', items: ['Fingertip', 'Handheld', 'Tabletop'] }
                ]
              }
            ]
          },
          {
            id: 'durable-medical-equipment',
            name: 'Durable Medical Equipment (DME)',
            subcategories: [
              {
                id: 'patient-room-equipment',
                name: 'Patient Room Equipment',
                productGroups: [
                  { id: 'hospital-beds', name: 'Hospital Beds', items: ['Manual', 'Semi-electric', 'Full electric'] },
                  { id: 'bedside-cabinets', name: 'Bedside Cabinets and Lockers' },
                  { id: 'overbed-tables', name: 'Overbed Tables', items: ['Fixed height', 'Adjustable'] },
                  { id: 'patient-lifts', name: 'Patient Lifts', items: ['Manual', 'Electric', 'Ceiling-mounted'] }
                ]
              },
              {
                id: 'patient-mobility',
                name: 'Patient Mobility',
                productGroups: [
                  { id: 'wheelchairs', name: 'Wheelchairs', items: ['Standard', 'Lightweight', 'Electric'] },
                  { id: 'crutches', name: 'Crutches', items: ['Axillary', 'Forearm', 'Adjustable'] },
                  { id: 'walkers', name: 'Walkers', items: ['Standard', 'Wheeled', 'Rollators'] },
                  { id: 'walking-sticks', name: 'Walking Sticks and Canes' }
                ]
              },
              {
                id: 'therapeutic-equipment',
                name: 'Therapeutic Equipment',
                productGroups: [
                  { id: 'oxygen-concentrators', name: 'Oxygen Concentrators', items: ['Stationary', 'Portable'] },
                  { id: 'nebulizers', name: 'Nebulizers', items: ['Compressor', 'Ultrasonic', 'Mesh'] },
                  { id: 'suction-machines', name: 'Suction Machines', items: ['Electric', 'Manual', 'Portable'] },
                  { id: 'cpap-bipap', name: 'CPAP/BiPAP Machines and Accessories' }
                ]
              }
            ]
          },
          {
            id: 'laboratory-equipment-instrumentation',
            name: 'Laboratory Equipment & Instrumentation',
            subcategories: [
              {
                id: 'clinical-laboratory-equipment',
                name: 'Clinical Laboratory Equipment',
                productGroups: [
                  { id: 'hematology-analyzers', name: 'Hematology Analyzers', items: ['3-part', '5-part differential'] },
                  { id: 'chemistry-analyzers', name: 'Chemistry Analyzers', items: ['Semi-automated', 'Fully automated'] },
                  { id: 'immunology-equipment', name: 'Immunology Equipment', items: ['ELISA readers', 'Immunofluorescence microscopes'] },
                  { id: 'microbiology-equipment', name: 'Microbiology Equipment', items: ['Automated culture systems', 'Antibiotic sensitivity testing'] },
                  { id: 'molecular-diagnostics', name: 'Molecular Diagnostics', items: ['PCR machines', 'Real-time PCR systems'] }
                ]
              },
              {
                id: 'general-laboratory-equipment',
                name: 'General Laboratory Equipment',
                productGroups: [
                  { id: 'microscopy', name: 'Microscopy', items: ['Light microscopes', 'Fluorescence microscopes', 'Digital imaging'] },
                  { id: 'centrifugation', name: 'Centrifugation', items: ['Benchtop', 'High-speed', 'Microcentrifuges'] },
                  { id: 'incubation-heating', name: 'Incubation & Heating', items: ['CO2 incubators', 'Dry heat ovens', 'Water baths'] },
                  { id: 'refrigeration-storage', name: 'Refrigeration & Storage', items: ['Laboratory refrigerators', 'Ultra-low freezers'] },
                  { id: 'measurement-analysis', name: 'Measurement & Analysis', items: ['Spectrophotometers', 'pH meters', 'Analytical balances'] }
                ]
              },
              {
                id: 'laboratory-safety-infrastructure',
                name: 'Laboratory Safety & Infrastructure',
                productGroups: [
                  { id: 'biosafety-equipment', name: 'Biosafety Equipment', items: ['Biological safety cabinets', 'Fume hoods'] },
                  { id: 'sterilization', name: 'Sterilization', items: ['Autoclaves', 'Dry heat sterilizers', 'UV sterilizers'] },
                  { id: 'emergency-equipment', name: 'Emergency Equipment', items: ['Eyewash stations', 'Safety showers', 'Spill kits'] }
                ]
              }
            ]
          },
          {
            id: 'laboratory-reagents-chemicals',
            name: 'Laboratory Reagents & Chemicals',
            subcategories: [
              {
                id: 'clinical-laboratory-reagents',
                name: 'Clinical Laboratory Reagents',
                productGroups: [
                  { id: 'hematology-reagents', name: 'Hematology Reagents', items: ['CBC reagents', 'Coagulation reagents'] },
                  { id: 'clinical-chemistry-reagents', name: 'Clinical Chemistry Reagents', items: ['Glucose', 'Liver function', 'Kidney function'] },
                  { id: 'immunology-reagents', name: 'Immunology Reagents', items: ['ELISA kits', 'Rapid test kits'] },
                  { id: 'microbiology-reagents', name: 'Microbiology Reagents', items: ['Culture media', 'Identification reagents'] },
                  { id: 'molecular-biology-reagents', name: 'Molecular Biology Reagents', items: ['PCR reagents', 'DNA extraction kits'] }
                ]
              },
              {
                id: 'research-educational-chemicals',
                name: 'Research & Educational Chemicals',
                productGroups: [
                  { id: 'organic-chemicals', name: 'Organic Chemicals', items: ['Solvents', 'Acids', 'Bases'] },
                  { id: 'inorganic-chemicals', name: 'Inorganic Chemicals', items: ['Salts', 'Metal compounds', 'Buffer components'] },
                  { id: 'biochemical-reagents', name: 'Biochemical Reagents', items: ['Enzymes', 'Proteins', 'Amino acids'] },
                  { id: 'stains-indicators', name: 'Stains & Indicators', items: ['Histological stains', 'pH indicators'] },
                  { id: 'standards-controls', name: 'Standards & Controls', items: ['Reference materials', 'Calibration standards'] }
                ]
              },
              {
                id: 'laboratory-consumables-reagents',
                name: 'Laboratory Consumables',
                productGroups: [
                  { id: 'glassware', name: 'Glassware', items: ['Beakers', 'Flasks', 'Test tubes', 'Pipettes'] },
                  { id: 'plasticware', name: 'Plasticware', items: ['Microcentrifuge tubes', 'PCR plates', 'Cell culture plates'] },
                  { id: 'filtration', name: 'Filtration', items: ['Membrane filters', 'Syringe filters', 'Filter papers'] },
                  { id: 'sample-collection', name: 'Sample Collection', items: ['Blood collection tubes', 'Swabs', 'Specimen containers'] }
                ]
              }
            ]
          },
          {
            id: 'educational-training-laboratory',
            name: 'Educational & Training Laboratory Supplies',
            subcategories: [
              {
                id: 'nursing-education-equipment',
                name: 'Nursing Education Equipment',
                productGroups: [
                  { id: 'patient-simulation', name: 'Patient Simulation', items: ['High-fidelity simulators', 'Task trainers', 'Anatomical models'] },
                  { id: 'clinical-skills-training', name: 'Clinical Skills Training', items: ['IV training arms', 'Injection pads', 'Blood pressure trainers'] },
                  { id: 'vital-signs-equipment', name: 'Vital Signs Equipment', items: ['Training stethoscopes', 'Blood pressure cuffs'] },
                  { id: 'medication-administration', name: 'Medication Administration', items: ['Pill counting trays', 'Syringe practice kits'] }
                ]
              },
              {
                id: 'natural-sciences-education',
                name: 'Natural Sciences Education',
                productGroups: [
                  { id: 'biology-laboratory-kits', name: 'Biology Laboratory Kits', items: ['Microscopy kits', 'Dissection kits', 'Genetics experiments'] },
                  { id: 'chemistry-laboratory-kits', name: 'Chemistry Laboratory Kits', items: ['Organic chemistry sets', 'Analytical chemistry kits'] },
                  { id: 'physics-laboratory-equipment', name: 'Physics Laboratory Equipment', items: ['Measurement tools', 'Optical equipment'] },
                  { id: 'earth-sciences', name: 'Earth Sciences', items: ['Rock and mineral collections', 'Geological tools'] }
                ]
              },
              {
                id: 'research-training-equipment',
                name: 'Research Training Equipment',
                productGroups: [
                  { id: 'basic-research-instruments', name: 'Basic Research Instruments', items: ['Student-grade microscopes', 'pH meters'] },
                  { id: 'data-collection', name: 'Data Collection', items: ['Data loggers', 'Sensors', 'Measurement probes'] },
                  { id: 'safety-training', name: 'Safety Training', items: ['Personal protective equipment', 'Spill response kits'] }
                ]
              }
            ]
          },
          {
            id: 'research-development-equipment',
            name: 'Research & Development Equipment',
            subcategories: [
              {
                id: 'advanced-analytical-instruments',
                name: 'Advanced Analytical Instruments',
                productGroups: [
                  { id: 'chromatography', name: 'Chromatography', items: ['HPLC systems', 'GC systems', 'Ion chromatography'] },
                  { id: 'mass-spectrometry', name: 'Mass Spectrometry', items: ['LC-MS systems', 'GC-MS systems', 'MALDI-TOF'] },
                  { id: 'spectroscopy', name: 'Spectroscopy', items: ['NMR spectrometers', 'IR spectrometers', 'UV-Vis'] },
                  { id: 'xray-analysis', name: 'X-ray Analysis', items: ['X-ray diffractometers', 'X-ray fluorescence'] }
                ]
              },
              {
                id: 'biotechnology-life-sciences',
                name: 'Biotechnology & Life Sciences Research',
                productGroups: [
                  { id: 'cell-culture', name: 'Cell Culture', items: ['Incubators', 'Biosafety cabinets', 'Cell counters'] },
                  { id: 'protein-research', name: 'Protein Research', items: ['Protein purification systems', 'Electrophoresis equipment'] },
                  { id: 'genomics-research', name: 'Genomics Research', items: ['DNA sequencers', 'PCR systems', 'Gel documentation'] },
                  { id: 'proteomics', name: 'Proteomics', items: ['Mass spectrometers', '2D gel systems', 'Protein analyzers'] }
                ]
              },
              {
                id: 'environmental-field-research',
                name: 'Environmental & Field Research',
                productGroups: [
                  { id: 'water-quality-testing', name: 'Water Quality Testing', items: ['pH meters', 'Dissolved oxygen meters', 'Turbidity meters'] },
                  { id: 'air-quality-monitoring', name: 'Air Quality Monitoring', items: ['Particle counters', 'Gas analyzers'] },
                  { id: 'soil-analysis', name: 'Soil Analysis', items: ['Soil pH meters', 'Nutrient analyzers'] },
                  { id: 'field-microscopy', name: 'Field Microscopy', items: ['Portable microscopes', 'Field identification guides'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  division2: {
    id: 'division2',
    name: 'Pharmacy Services',
    subtitle: 'Pharmacy Operations & Management',
    pillars: [
      {
        id: 'pharmacy-operations-management',
        name: 'Pharmacy Operations & Management',
        categories: [
          {
            id: 'inventory-management-systems',
            name: 'Inventory Management Systems',
            subcategories: [
              {
                id: 'automated-ordering-systems',
                name: 'Automated Ordering Systems',
                productGroups: [
                  { id: 'perpetual-inventory-software', name: 'Perpetual Inventory Software' },
                  { id: 'automated-reorder-point', name: 'Automated Reorder Point Systems' },
                  { id: 'vendor-management-platforms', name: 'Vendor Management Platforms' },
                  { id: 'stock-optimization-tools', name: 'Stock Optimization Tools' }
                ]
              },
              {
                id: 'storage-organization',
                name: 'Storage & Organization',
                productGroups: [
                  { id: 'pharmacy-shelving-systems', name: 'Pharmacy Shelving Systems' },
                  { id: 'refrigerated-storage-units', name: 'Refrigerated Storage Units' },
                  { id: 'controlled-substance-safes', name: 'Controlled Substance Safes' },
                  { id: 'automated-dispensing-cabinets', name: 'Automated Dispensing Cabinets' }
                ]
              },
              {
                id: 'inventory-tracking',
                name: 'Inventory Tracking',
                productGroups: [
                  { id: 'barcode-scanning-systems', name: 'Barcode Scanning Systems' },
                  { id: 'rfid-tracking-solutions', name: 'RFID Tracking Solutions' },
                  { id: 'expiry-date-management', name: 'Expiry Date Management' },
                  { id: 'lot-number-tracking', name: 'Lot Number Tracking' }
                ]
              }
            ]
          },
          {
            id: 'regulatory-compliance-qa',
            name: 'Regulatory Compliance & Quality Assurance',
            subcategories: [
              {
                id: 'licensing-certification-support',
                name: 'Licensing & Certification Support',
                productGroups: [
                  { id: 'pharmacy-license-applications', name: 'Pharmacy License Applications' },
                  { id: 'pharmacist-registration', name: 'Pharmacist Registration Assistance' },
                  { id: 'continuing-education', name: 'Continuing Education Programs' },
                  { id: 'regulatory-update-services', name: 'Regulatory Update Services' }
                ]
              },
              {
                id: 'quality-control-systems',
                name: 'Quality Control Systems',
                productGroups: [
                  { id: 'standard-operating-procedures', name: 'Standard Operating Procedures (SOPs)' },
                  { id: 'quality-assurance-protocols', name: 'Quality Assurance Protocols' },
                  { id: 'audit-preparation', name: 'Audit Preparation Services' },
                  { id: 'documentation-management', name: 'Documentation Management' }
                ]
              },
              {
                id: 'good-pharmacy-practice',
                name: 'Good Pharmacy Practice (GPP)',
                productGroups: [
                  { id: 'gpp-implementation', name: 'GPP Implementation Guidance' },
                  { id: 'staff-training-programs', name: 'Staff Training Programs' },
                  { id: 'facility-assessment', name: 'Facility Assessment Services' },
                  { id: 'compliance-monitoring-tools', name: 'Compliance Monitoring Tools' }
                ]
              }
            ]
          },
          {
            id: 'technology-solutions',
            name: 'Technology Solutions',
            subcategories: [
              {
                id: 'pharmacy-management-software',
                name: 'Pharmacy Management Software',
                productGroups: [
                  { id: 'point-of-sale-systems', name: 'Point-of-Sale (POS) Systems' },
                  { id: 'prescription-management', name: 'Prescription Management Software' },
                  { id: 'patient-information-systems', name: 'Patient Information Systems' },
                  { id: 'insurance-billing-platforms', name: 'Insurance Billing Platforms' }
                ]
              },
              {
                id: 'clinical-decision-support',
                name: 'Clinical Decision Support',
                productGroups: [
                  { id: 'drug-interaction-checkers', name: 'Drug Interaction Checkers' },
                  { id: 'dosing-calculators', name: 'Dosing Calculators' },
                  { id: 'clinical-guidelines-database', name: 'Clinical Guidelines Database' },
                  { id: 'allergy-alert-systems', name: 'Allergy Alert Systems' }
                ]
              },
              {
                id: 'digital-health-integration',
                name: 'Digital Health Integration',
                productGroups: [
                  { id: 'ehr-integration', name: 'Electronic Health Records (EHR) Integration' },
                  { id: 'telemedicine-connectivity', name: 'Telemedicine Platform Connectivity' },
                  { id: 'mobile-health-applications', name: 'Mobile Health Applications' },
                  { id: 'patient-portal-systems', name: 'Patient Portal Systems' }
                ]
              }
            ]
          },
          {
            id: 'clinical-services-training',
            name: 'Clinical Services & Training',
            subcategories: [
              {
                id: 'pharmacist-education',
                name: 'Pharmacist Education',
                productGroups: [
                  { id: 'clinical-pharmacy-training', name: 'Clinical Pharmacy Training' },
                  { id: 'pharmaceutical-care-certification', name: 'Pharmaceutical Care Certification' },
                  { id: 'specialized-therapy-training', name: 'Specialized Therapy Training', items: ['HIV', 'TB', 'Diabetes'] },
                  { id: 'leadership-development', name: 'Leadership Development Programs' }
                ]
              },
              {
                id: 'patient-care-services',
                name: 'Patient Care Services',
                productGroups: [
                  { id: 'medication-therapy-management', name: 'Medication Therapy Management (MTM)' },
                  { id: 'patient-counseling-training', name: 'Patient Counseling Training' },
                  { id: 'health-screening-services', name: 'Health Screening Services' },
                  { id: 'immunization-programs', name: 'Immunization Programs' }
                ]
              },
              {
                id: 'pharmaceutical-care',
                name: 'Pharmaceutical Care',
                productGroups: [
                  { id: 'drug-utilization-reviews', name: 'Drug Utilization Reviews' },
                  { id: 'medication-reconciliation', name: 'Medication Reconciliation' },
                  { id: 'adverse-drug-reaction', name: 'Adverse Drug Reaction Monitoring' },
                  { id: 'therapeutic-drug-monitoring', name: 'Therapeutic Drug Monitoring' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  division3: {
    id: 'division3',
    name: 'Community Health Solutions',
    subtitle: 'Community Health & Wellness Distribution',
    pillars: [
      {
        id: 'preventive-care-public-health',
        name: 'Preventive Care & Public Health',
        categories: [
          {
            id: 'preventive-care-products',
            name: 'Preventive Care Products',
            subcategories: [
              {
                id: 'vaccination-immunization',
                name: 'Vaccination & Immunization',
                productGroups: [
                  { id: 'vaccine-storage-cold-chain', name: 'Vaccine Storage & Cold Chain Equipment' },
                  { id: 'immunization-supplies', name: 'Immunization Supplies', items: ['Syringes', 'Safety boxes'] },
                  { id: 'vaccination-record-systems', name: 'Vaccination Record Systems' },
                  { id: 'community-outreach-materials', name: 'Community Outreach Materials' }
                ]
              },
              {
                id: 'health-screening-supplies',
                name: 'Health Screening Supplies',
                productGroups: [
                  { id: 'bp-monitoring-equipment', name: 'Blood Pressure Monitoring Equipment' },
                  { id: 'diabetes-screening-kits', name: 'Diabetes Screening Kits' },
                  { id: 'cancer-screening-supplies', name: 'Cancer Screening Supplies', items: ['Pap smear', 'Mammography'] },
                  { id: 'vision-hearing-screening', name: 'Vision and Hearing Screening Tools' }
                ]
              },
              {
                id: 'disease-prevention',
                name: 'Disease Prevention',
                productGroups: [
                  { id: 'vector-control-products', name: 'Vector Control Products', items: ['Bed nets', 'Insecticides'] },
                  { id: 'water-purification-tablets', name: 'Water Purification Tablets' },
                  { id: 'hygiene-education-materials', name: 'Hygiene Education Materials' },
                  { id: 'ppe-communities', name: 'Personal Protective Equipment for Communities' }
                ]
              }
            ]
          },
          {
            id: 'maternal-child-health',
            name: 'Maternal & Child Health',
            subcategories: [
              {
                id: 'prenatal-care',
                name: 'Prenatal Care',
                productGroups: [
                  { id: 'prenatal-vitamins-supplements', name: 'Prenatal Vitamins and Supplements' },
                  { id: 'antenatal-care-supplies', name: 'Antenatal Care Supplies' },
                  { id: 'ultrasound-equipment-portable', name: 'Ultrasound Equipment (Portable)' },
                  { id: 'pregnancy-testing-kits', name: 'Pregnancy Testing Kits' }
                ]
              },
              {
                id: 'delivery-postnatal-care',
                name: 'Delivery & Postnatal Care',
                productGroups: [
                  { id: 'clean-delivery-kits', name: 'Clean Delivery Kits' },
                  { id: 'newborn-care-supplies', name: 'Newborn Care Supplies' },
                  { id: 'breastfeeding-support', name: 'Breastfeeding Support Products' },
                  { id: 'postnatal-vitamins', name: 'Postnatal Vitamins' }
                ]
              },
              {
                id: 'child-health-nutrition',
                name: 'Child Health & Nutrition',
                productGroups: [
                  { id: 'growth-monitoring-equipment', name: 'Pediatric Growth Monitoring Equipment' },
                  { id: 'therapeutic-foods', name: 'Therapeutic Foods', items: ['RUTF', 'RUSF'] },
                  { id: 'micronutrient-supplements', name: 'Micronutrient Supplements' },
                  { id: 'child-development-assessment', name: 'Child Development Assessment Tools' }
                ]
              }
            ]
          },
          {
            id: 'nutrition-supplements',
            name: 'Nutrition & Supplements',
            subcategories: [
              {
                id: 'therapeutic-foods-nutrition',
                name: 'Therapeutic Foods',
                productGroups: [
                  { id: 'rutf', name: 'Ready-to-Use Therapeutic Foods (RUTF)' },
                  { id: 'rusf', name: 'Ready-to-Use Supplementary Foods (RUSF)' },
                  { id: 'micronutrient-powders', name: 'Micronutrient Powders' },
                  { id: 'lipid-based-supplements', name: 'Lipid-based Nutrient Supplements' }
                ]
              },
              {
                id: 'vitamins-minerals-community',
                name: 'Vitamins & Minerals',
                productGroups: [
                  { id: 'vitamin-a-supplements', name: 'Vitamin A Supplements' },
                  { id: 'iron-folic-acid', name: 'Iron and Folic Acid Tablets' },
                  { id: 'zinc-supplements', name: 'Zinc Supplements' },
                  { id: 'multi-micronutrient', name: 'Multi-micronutrient Supplements' }
                ]
              },
              {
                id: 'special-dietary-products',
                name: 'Special Dietary Products',
                productGroups: [
                  { id: 'oral-rehydration-salts', name: 'Oral Rehydration Salts (ORS)' },
                  { id: 'therapeutic-milk-products', name: 'Therapeutic Milk Products' },
                  { id: 'gluten-free-products', name: 'Gluten-free Products' },
                  { id: 'diabetic-food-products', name: 'Diabetic Food Products' }
                ]
              }
            ]
          },
          {
            id: 'health-education-awareness',
            name: 'Health Education & Awareness',
            subcategories: [
              {
                id: 'educational-materials',
                name: 'Educational Materials',
                productGroups: [
                  { id: 'health-education-posters', name: 'Health Education Posters and Brochures' },
                  { id: 'community-health-training-manuals', name: 'Community Health Training Manuals' },
                  { id: 'audiovisual-educational-content', name: 'Audio-visual Educational Content' },
                  { id: 'mobile-health-education-units', name: 'Mobile Health Education Units' }
                ]
              },
              {
                id: 'behavior-change-communication',
                name: 'Behavior Change Communication',
                productGroups: [
                  { id: 'health-promotion-campaigns', name: 'Health Promotion Campaigns' },
                  { id: 'community-mobilization-tools', name: 'Community Mobilization Tools' },
                  { id: 'peer-education-programs', name: 'Peer Education Programs' },
                  { id: 'social-media-health-content', name: 'Social Media Health Content' }
                ]
              },
              {
                id: 'training-capacity-building',
                name: 'Training & Capacity Building',
                productGroups: [
                  { id: 'chw-training', name: 'Community Health Worker Training' },
                  { id: 'health-education-facilitator', name: 'Health Education Facilitator Guides' },
                  { id: 'training-equipment-supplies', name: 'Training Equipment and Supplies' },
                  { id: 'certification-programs', name: 'Certification Programs' }
                ]
              }
            ]
          },
          {
            id: 'emergency-response-disaster-relief',
            name: 'Emergency Response & Disaster Relief',
            subcategories: [
              {
                id: 'emergency-medical-supplies',
                name: 'Emergency Medical Supplies',
                productGroups: [
                  { id: 'emergency-medical-kits', name: 'Emergency Medical Kits' },
                  { id: 'trauma-care-supplies', name: 'Trauma Care Supplies' },
                  { id: 'emergency-medications', name: 'Emergency Medications' },
                  { id: 'portable-medical-equipment', name: 'Portable Medical Equipment' }
                ]
              },
              {
                id: 'disaster-preparedness',
                name: 'Disaster Preparedness',
                productGroups: [
                  { id: 'emergency-response-plans', name: 'Emergency Response Plans' },
                  { id: 'disaster-relief-supplies', name: 'Disaster Relief Supplies' },
                  { id: 'emergency-communication-equipment', name: 'Emergency Communication Equipment' },
                  { id: 'temporary-medical-facilities', name: 'Temporary Medical Facilities' }
                ]
              },
              {
                id: 'outbreak-response',
                name: 'Outbreak Response',
                productGroups: [
                  { id: 'epidemic-investigation-kits', name: 'Epidemic Investigation Kits' },
                  { id: 'infection-control-supplies', name: 'Infection Control Supplies' },
                  { id: 'rapid-response-team-equipment', name: 'Rapid Response Team Equipment' },
                  { id: 'laboratory-diagnostic-kits', name: 'Laboratory Diagnostic Kits' }
                ]
              }
            ]
          },
          {
            id: 'water-sanitation-hygiene',
            name: 'Water, Sanitation & Hygiene (WASH)',
            subcategories: [
              {
                id: 'water-quality-treatment',
                name: 'Water Quality & Treatment',
                productGroups: [
                  { id: 'water-testing-kits', name: 'Water Testing Kits' },
                  { id: 'water-purification-systems', name: 'Water Purification Systems' },
                  { id: 'water-storage-solutions', name: 'Water Storage Solutions' },
                  { id: 'household-water-treatment', name: 'Household Water Treatment Products' }
                ]
              },
              {
                id: 'sanitation-supplies',
                name: 'Sanitation Supplies',
                productGroups: [
                  { id: 'sanitation-facilities-equipment', name: 'Sanitation Facilities Equipment' },
                  { id: 'waste-management-supplies', name: 'Waste Management Supplies' },
                  { id: 'hygiene-kits', name: 'Hygiene Kits' },
                  { id: 'menstrual-hygiene-products', name: 'Menstrual Hygiene Products' }
                ]
              },
              {
                id: 'hygiene-promotion',
                name: 'Hygiene Promotion',
                productGroups: [
                  { id: 'hand-hygiene-supplies', name: 'Hand Hygiene Supplies' },
                  { id: 'hygiene-education-materials-wash', name: 'Hygiene Education Materials' },
                  { id: 'community-hygiene-programs', name: 'Community Hygiene Programs' },
                  { id: 'school-hygiene-initiatives', name: 'School Hygiene Initiatives' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};

interface DivisionCardProps {
  division: typeof productCatalog.division1;
  onClick: () => void;
}

function DivisionCard({ division, onClick }: DivisionCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      className="border border-gray-200 rounded-lg p-6 transition-all cursor-pointer h-full hover:border-[#4B2991] hover:shadow-lg"
      onClick={handleClick}
    >
      <h3 className="text-xl mb-2 text-[#4B2991]">
        {division.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {division.subtitle}
      </p>
      <div className="text-sm text-gray-500">
        {division.id === 'division1' && `${division.pillars.length} major categories including Pharmaceutical Distribution and Medical Supplies & Equipment`}
        {division.id === 'division2' && 'Comprehensive pharmacy services including inventory management, regulatory compliance, and technology solutions'}
        {division.id === 'division3' && 'Preventive care, maternal & child health, nutrition, health education, and emergency response solutions'}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleDivisionClick = (divisionId: string) => {
    // Navigate to the division page
    navigate(`/products/${divisionId}`);
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Healthcare Products Catalog",
    "description": "Comprehensive catalog of pharmaceuticals, medical equipment, and healthcare supplies for African health systems",
    "brand": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    }
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Healthcare Products Catalog | Medical Supplies & Pharmaceuticals for Africa | Pacem Health"
        description="Comprehensive catalog of essential healthcare products for Africa including generic pharmaceuticals, medical equipment, diagnostic supplies, surgical instruments, maternal-child health products, and emergency supplies. WHO-prequalified products for government procurement."
        keywords={[
          'healthcare products Africa',
          'medical supplies catalog',
          'pharmaceutical products Africa',
          'medical equipment catalog',
          'surgical supplies Africa',
          'diagnostic equipment',
          'WHO prequalified products',
          'government medical procurement',
          'hospital supplies Africa'
        ]}
        structuredData={productSchema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#7C5AC1] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">
              Essential Healthcare Products
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Comprehensive medical products and supplies designed to strengthen healthcare delivery across Africa. Browse our complete catalog organized by business division.
            </p>
          </div>
        </div>
      </section>

      {/* Business Divisions Navigation */}
      <section className="bg-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl mb-2">Browse Products by Division</h2>
            <p className="text-gray-600">Click to view division details</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <DivisionCard
              division={productCatalog.division1}
              onClick={() => handleDivisionClick('division1')}
            />
            <DivisionCard
              division={productCatalog.division2}
              onClick={() => handleDivisionClick('division2')}
            />
            <DivisionCard
              division={productCatalog.division3}
              onClick={() => handleDivisionClick('division3')}
            />
          </div>
        </div>
      </section>

      {/* Featured Products & Services Section */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-15">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 700 }}>
              Featured Products & Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of healthcare solutions designed for the African market
            </p>
          </div>

          {/* Division 1: Essential Healthcare Products */}
          <div className="mt-16">
            {/* Division Header */}
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 700, color: '#2563EB' }}>
                Essential Healthcare Products
              </h3>
              <p className="text-base text-gray-600" style={{ fontWeight: 500 }}>
                Medical Supplies & Products Distribution
              </p>
            </div>

            {/* Product Grid - 8 Main Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Card 1: Generic Pharmaceuticals */}
              <button
                onClick={() => navigate('/products/categories/generic-pharmaceuticals')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💊</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Generic Pharmaceuticals</h4>
                <p className="text-sm text-gray-600">Anti-infectives, NCDs, pain & palliative care, maternal & child health</p>
              </button>

              {/* Card 2: Branded & Patented Pharmaceuticals */}
              <button
                onClick={() => navigate('/products/categories/branded-patented-pharmaceuticals')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏷️</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Branded & Patented Pharmaceuticals</h4>
                <p className="text-sm text-gray-600">Specialty medications, vaccines, and patented NCD treatments</p>
              </button>

              {/* Card 3: Over-the-Counter (OTC) Products */}
              <button
                onClick={() => navigate('/products/categories/over-the-counter-products')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🛒</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Over-the-Counter Products</h4>
                <p className="text-sm text-gray-600">Analgesics, vitamins & supplements, digestive health products</p>
              </button>

              {/* Card 4: Medical Consumables */}
              <button
                onClick={() => navigate('/products/categories/medical-consumables')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🧤</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Medical Consumables</h4>
                <p className="text-sm text-gray-600">Injection & infusion, wound care, PPE, laboratory consumables</p>
              </button>

              {/* Card 5: Surgical & Procedural Supplies */}
              <button
                onClick={() => navigate('/products/categories/surgical-procedural-supplies')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔧</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Surgical & Procedural Supplies</h4>
                <p className="text-sm text-gray-600">Surgical instruments, OR supplies, procedural packs</p>
              </button>

              {/* Card 6: Diagnostic Equipment & Supplies */}
              <button
                onClick={() => navigate('/products/categories/diagnostic-equipment-supplies')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔬</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Diagnostic Equipment & Supplies</h4>
                <p className="text-sm text-gray-600">Point-of-care testing, lab consumables, diagnostic instruments</p>
              </button>

              {/* Card 7: Durable Medical Equipment (DME) */}
              <button
                onClick={() => navigate('/products/categories/durable-medical-equipment')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🛏️</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Durable Medical Equipment</h4>
                <p className="text-sm text-gray-600">Patient room equipment, mobility aids, therapeutic equipment</p>
              </button>

              {/* Card 8: Laboratory Equipment & Instrumentation */}
              <button
                onClick={() => navigate('/products/categories/laboratory-equipment-instrumentation')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⚗️</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Laboratory Equipment & Instrumentation</h4>
                <p className="text-sm text-gray-600">Clinical lab equipment, general lab equipment, safety & infrastructure</p>
              </button>
            </div>

            {/* Additional Categories Row - 4 Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {/* Card 9: Laboratory Reagents & Chemicals */}
              <button
                onClick={() => navigate('/products/categories/laboratory-reagents-chemicals')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🧪</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Laboratory Reagents & Chemicals</h4>
                <p className="text-sm text-gray-600">Clinical reagents, research chemicals, laboratory consumables</p>
              </button>

              {/* Card 10: Educational & Training Supplies */}
              <button
                onClick={() => navigate('/products/categories/educational-training-supplies')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Educational & Training Supplies</h4>
                <p className="text-sm text-gray-600">Nursing skills trainers, anatomical models, medical simulation, lab education</p>
              </button>

              {/* Card 11: Research & Development Equipment */}
              <button
                onClick={() => navigate('/products/categories/research-development-equipment')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔬</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Research & Development Equipment</h4>
                <p className="text-sm text-gray-600">Advanced analytical instruments, biotechnology, environmental research</p>
              </button>

              {/* Card 12: View All Categories */}
              <button
                onClick={() => navigate('/products/division1')}
                className="bg-[#EBF8FF] border-2 border-dashed border-[#2563EB] rounded-xl p-6 text-left hover:bg-blue-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-3 text-[#2563EB] group-hover:scale-110 transition-transform duration-300">➕</div>
                <h4 className="text-lg mb-2 text-[#2563EB] text-center" style={{ fontWeight: 600 }}>View All Categories</h4>
                <p className="text-sm text-gray-600 text-center">Explore our complete product catalog</p>
              </button>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/products/division1')}
                className="bg-[#2563EB] text-white px-8 py-3 rounded-lg hover:bg-[#1D4ED8] transition-colors duration-300"
                style={{ fontWeight: 600 }}
              >
                View All Essential Healthcare Products →
              </button>
            </div>
          </div>

          {/* Division 2: Pharmacy Services */}
          <div className="mt-20 bg-[#F0FDF4] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
            {/* Division Header */}
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 700, color: '#16A34A' }}>
                Pharmacy Services
              </h3>
              <p className="text-base text-gray-600" style={{ fontWeight: 500 }}>
                Pharmacy Operations & Management
              </p>
            </div>

            {/* Service Grid - 5 Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10 max-w-7xl mx-auto">
              {/* Card 1: Inventory Management Systems */}
              <button
                onClick={() => navigate('/products/categories/inventory-management-systems')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📦</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Inventory Management Systems</h4>
                <p className="text-sm text-gray-600">Automated ordering, storage & organization, inventory tracking</p>
              </button>

              {/* Card 2: Hospital & Clinical Pharmacy Services */}
              <button
                onClick={() => navigate('/products/categories/hospital-clinical-pharmacy-services')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏥</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Hospital & Clinical Pharmacy Services</h4>
                <p className="text-sm text-gray-600">Inpatient operations, disease programs, critical care pharmacy</p>
              </button>

              {/* Card 3: Technology Solutions */}
              <button
                onClick={() => navigate('/products/categories/technology-solutions')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💻</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Technology Solutions</h4>
                <p className="text-sm text-gray-600">Pharmacy management software, clinical decision support, digital health integration</p>
              </button>

              {/* Card 4: Regulatory Compliance & Quality Assurance */}
              <button
                onClick={() => navigate('/products/categories/regulatory-compliance-quality-assurance')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📋</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Regulatory Compliance & Quality Assurance</h4>
                <p className="text-sm text-gray-600">Licensing support, quality control systems, Good Pharmacy Practice</p>
              </button>

              {/* Card 5: Clinical Services & Training */}
              <button
                onClick={() => navigate('/products/categories/clinical-services-training')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#16A34A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">👨‍⚕️</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Clinical Services & Training</h4>
                <p className="text-sm text-gray-600">Pharmacist education, patient care services, pharmaceutical care</p>
              </button>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/products/division2')}
                className="bg-[#16A34A] text-white px-8 py-3 rounded-lg hover:bg-[#15803D] transition-colors duration-300"
                style={{ fontWeight: 600 }}
              >
                View All Pharmacy Services →
              </button>
            </div>
          </div>

          {/* Division 3: Community Health Solutions */}
          <div className="mt-20 bg-[#FFF7ED] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
            {/* Division Header */}
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 700, color: '#EA580C' }}>
                Community Health Solutions
              </h3>
              <p className="text-base text-gray-600" style={{ fontWeight: 500 }}>
                Community Health & Wellness Distribution
              </p>
            </div>

            {/* Product Grid - 6 Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
              {/* Card 1: Preventive Care Products */}
              <button
                onClick={() => navigate('/products/categories/preventive-care-products')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#EA580C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💉</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Preventive Care Products</h4>
                <p className="text-sm text-gray-600">Vaccination & immunization, health screening, disease prevention</p>
              </button>

              {/* Card 2: Maternal & Child Health */}
              <button
                onClick={() => navigate('/products/categories/maternal-child-health')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#EA580C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🤱</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Maternal & Child Health</h4>
                <p className="text-sm text-gray-600">Prenatal care, delivery & postnatal care, child health & nutrition</p>
              </button>

              {/* Card 3: Nutrition & Supplements */}
              <button
                onClick={() => navigate('/products/categories/nutrition-supplements')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#EA580C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🥗</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Nutrition & Supplements</h4>
                <p className="text-sm text-gray-600">Therapeutic foods, vitamins & minerals, special dietary products</p>
              </button>

              {/* Card 4: Health Education & Awareness */}
              <button
                onClick={() => navigate('/products/categories/health-education-awareness')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#EA580C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Health Education & Awareness</h4>
                <p className="text-sm text-gray-600">Educational materials, behavior change communication, training & capacity building</p>
              </button>

              {/* Card 5: Emergency Response & Disaster Relief */}
              <button
                onClick={() => navigate('/products/categories/emergency-response-disaster-relief')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#EA580C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🚨</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Emergency Response & Disaster Relief</h4>
                <p className="text-sm text-gray-600">Emergency medical supplies, disaster preparedness, outbreak response</p>
              </button>

              {/* Card 6: Water, Sanitation & Hygiene (WASH) */}
              <button
                onClick={() => navigate('/products/categories/water-sanitation-hygiene')}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-[#EA580C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💧</div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Water, Sanitation & Hygiene</h4>
                <p className="text-sm text-gray-600">Water quality & treatment, sanitation supplies, hygiene promotion</p>
              </button>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/products/division3')}
                className="bg-[#EA580C] text-white px-8 py-3 rounded-lg hover:bg-[#C2410C] transition-colors duration-300"
                style={{ fontWeight: 600 }}
              >
                View All Community Health Solutions →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose Pacem Health Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver quality medical products with reliable supply chains, competitive pricing, and expert support across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                All products meet international quality standards and regulatory compliance requirements for safe, effective healthcare delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Reliable Supply Chain</h3>
              <p className="text-gray-600">
                Streamlined logistics and inventory management ensure consistent product availability and timely delivery across Africa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Technical guidance, training programs, and ongoing support to maximize the value and effectiveness of your medical products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c2c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Need Help Finding the Right Products?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Our team of product specialists is ready to help you navigate our complete catalog and find the perfect solutions for your healthcare facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg transition-colors">
              Contact Product Specialists
            </button>
            <button className="px-8 py-3 bg-white text-[#4B2991] hover:bg-gray-100 rounded-lg transition-colors">
              Download Full Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

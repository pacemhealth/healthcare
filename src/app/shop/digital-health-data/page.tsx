import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ProductDetailsDialog } from '../../../components/ProductDetailsDialog';
import { useState } from 'react';

export default function DigitalHealthDataPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productCategories = [
    { id: 'all', label: 'All Tools', count: 27 },
    { id: 'software', label: 'Software & Licenses', count: 7 },
    { id: 'diagnostics', label: 'Portable Diagnostics', count: 4 },
    { id: 'mobile', label: 'Mobile Apps', count: 6 },
    { id: 'analytics', label: 'Analytics & Dashboards', count: 6 },
    { id: 'integration', label: 'Integration Tools', count: 4 }
  ];

  const featuredProducts = [
    {
      name: 'Electronic Medical Records (EMR) System',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc29mdHdhcmUlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjMwNDAxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cloud-based EMR platform for patient data management, clinical documentation, and care coordination across facilities.',
      specs: [
        'Cloud-hosted with offline capability',
        'Patient registration and demographics',
        'Clinical notes and prescriptions',
        'Laboratory and imaging integration'
      ],
      certifications: 'ISO 27001, HIPAA Compliant, HL7 Certified',
      badge: 'Best Seller'
    },
    {
      name: 'Hospital Management Information System (HMIS)',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzA0MDE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive hospital management platform integrating clinical, administrative, and financial operations.',
      specs: [
        'Patient management and appointments',
        'Billing and insurance processing',
        'Inventory and pharmacy management',
        'Staff scheduling and HR'
      ],
      certifications: 'ISO 27001, IEC 62304, SOC 2',
      badge: 'Featured'
    },
    {
      name: 'Laboratory Information Management System (LIMS)',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1601839215170-6ce5854968d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI5NDQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Specialized LIMS for test ordering, sample tracking, result management, and quality control.',
      specs: [
        'Sample tracking and barcoding',
        'Test ordering and workflow',
        'Quality control and validation',
        'Equipment integration (analyzers)'
      ],
      certifications: 'ISO 15189, CAP Compliant, CLIA Standards',
      badge: null
    },
    {
      name: 'Portable Ultrasound with Cloud Connectivity',
      category: 'Portable Diagnostics',
      image: 'https://images.unsplash.com/photo-1691935152546-3a9e05f4010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHVsdHJhc291bmQlMjBtZWRpY2FsJTIwZGV2aWNlfGVufDF8fHx8MTc2MzA0MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Handheld ultrasound device with AI-enhanced imaging and cloud-based image storage and consultation.',
      specs: [
        'Wireless tablet-based display',
        'Multiple probe options',
        'AI-assisted measurements',
        'Cloud image upload and storage'
      ],
      certifications: 'CE, FDA 510(k), ISO 13485',
      badge: 'High Demand'
    },
    {
      name: 'Connected Point-of-Care Diagnostics Platform',
      category: 'Portable Diagnostics',
      image: 'https://images.unsplash.com/photo-1582719471216-d2e7e332e19c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFnbm9zdGljJTIwdGVzdGluZyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMDQwMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Multi-disease rapid testing platform with automatic result transmission to health information systems.',
      specs: [
        'Multiple test cartridge support',
        'Bluetooth/WiFi connectivity',
        'Automatic result upload',
        'GPS location tagging'
      ],
      certifications: 'WHO PQ, CE-IVD, FDA Listed',
      badge: null
    },
    {
      name: 'Mobile Patient Tracking & Registration App',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1633613287441-3f72304088ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBoZWFsdGglMjBhcHAlMjBzbWFydHBob25lfGVufDF8fHx8MTc2MzA0MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Offline-capable mobile application for patient registration, visit tracking, and follow-up management.',
      specs: [
        'Offline data entry and sync',
        'Biometric patient identification',
        'Appointment scheduling',
        'SMS reminders and notifications'
      ],
      certifications: 'iOS/Android, GDPR Compliant, Open Source',
      badge: null
    },
    {
      name: 'Immunization Registry Mobile App',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd29ya2VyJTIwbW9iaWxlJTIwdGFibGV0fGVufDF8fHx8MTc2MzA0MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Digital immunization tracking with electronic vaccination cards and campaign management.',
      specs: [
        'Digital vaccination certificates',
        'Due date tracking and alerts',
        'Stock management integration',
        'Campaign planning tools'
      ],
      certifications: 'WHO Digital Guidelines, iOS/Android, Open Source',
      badge: 'Featured'
    },
    {
      name: 'Telemedicine Consultation Platform',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1758691463606-1493d79cc577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjB2aWRlbyUyMGNhbGwlMjBkb2N0b3J8ZW58MXx8fHwxNzYzMDQwMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Secure video consultation platform with patient records integration and specialist referral system.',
      specs: [
        'HD video/audio consultation',
        'Screen sharing and annotations',
        'EMR integration',
        'E-prescription capability'
      ],
      certifications: 'ISO 27001, HIPAA Compliant, WebRTC Certified',
      badge: null
    },
    {
      name: 'Health Data Analytics Platform',
      category: 'Analytics & Dashboards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc2MzA0MDE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Business intelligence platform for health data analysis, visualization, and performance monitoring.',
      specs: [
        'Interactive dashboards',
        'Automated report generation',
        'Predictive analytics and ML',
        'Multi-source data integration'
      ],
      certifications: 'ISO 27001, GDPR Compliant, SOC 2',
      badge: 'Best Seller'
    },
    {
      name: 'Supply Chain Management Software',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzA0MDE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'End-to-end pharmaceutical and medical supply chain management with forecasting and distribution tracking.',
      specs: [
        'Inventory management',
        'Procurement and ordering',
        'Distribution tracking',
        'Expiry management'
      ],
      certifications: 'ISO 9001, GS1 Compliant, Open Source',
      badge: null
    },
    {
      name: 'Disease Surveillance & Reporting System',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc29mdHdhcmUlMjBkYXNoYm9hcmQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjMwNDAxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Real-time disease surveillance platform for outbreak detection, case reporting, and epidemic response.',
      specs: [
        'Real-time case reporting',
        'Outbreak detection algorithms',
        'Geographic mapping',
        'Alert and notification system'
      ],
      certifications: 'WHO IHR Compliant, ISO 27001, GDPR Compliant',
      badge: null
    },
    {
      name: 'Pharmacy Management System',
      category: 'Software & Licenses',
      image: 'https://images.unsplash.com/photo-1582146804102-b4a01b0a51ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzYzMDQwMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Integrated pharmacy dispensing system with inventory control, drug interaction checking, and billing.',
      specs: [
        'Prescription management',
        'Drug interaction alerts',
        'Inventory and expiry tracking',
        'Insurance billing'
      ],
      certifications: 'ISO 27001, Pharmacy Compliance, HIPAA',
      badge: null
    },
    {
      name: 'Portable ECG with Cloud Analysis',
      category: 'Portable Diagnostics',
      image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2clMjBoZWFydCUyMG1vbml0b3IlMjBwb3J0YWJsZXxlbnwxfHx8fDE3NjMwNDAxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Smartphone-connected ECG device with AI-powered interpretation and cardiologist teleconsultation.',
      specs: [
        '12-lead ECG capability',
        'Smartphone app integration',
        'AI-assisted interpretation',
        'Cloud storage and sharing'
      ],
      certifications: 'CE, FDA 510(k), ISO 13485',
      badge: null
    },
    {
      name: 'Portable Digital X-ray with PACS',
      category: 'Portable Diagnostics',
      image: 'https://images.unsplash.com/photo-1698913464331-b71a8d32b4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIweHJheSUyMG1lZGljYWwlMjBpbWFnaW5nfGVufDF8fHx8MTc2MzA0MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Mobile digital radiography system with Picture Archiving and Communication System (PACS) integration.',
      specs: [
        'Portable digital detector',
        'Wireless image transmission',
        'PACS/DICOM compliant',
        'Cloud storage option'
      ],
      certifications: 'CE, FDA, ISO 13485, DICOM Certified',
      badge: null
    },
    {
      name: 'Smart Glucometer with Data Sync',
      category: 'Portable Diagnostics',
      image: 'https://images.unsplash.com/photo-1685485276914-6cefc2417c05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbHVjb3NlJTIwbWV0ZXIlMjBkaWFiZXRlcyUyMGRldmljZXxlbnwxfHx8fDE3NjMwNDAxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bluetooth-enabled blood glucose meter with automatic logging and diabetes management app.',
      specs: [
        'Bluetooth data sync',
        'Trend analysis and graphs',
        'Medication reminders',
        'Diet and exercise tracking'
      ],
      certifications: 'CE-IVD, FDA, ISO 15197',
      badge: null
    },
    {
      name: 'Community Health Worker Mobile App',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd29ya2VyJTIwbW9iaWxlJTIwdGFibGV0fGVufDF8fHx8MTc2MzA0MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive CHW application for household visits, health education, and service delivery tracking.',
      specs: [
        'Visit scheduling and routing',
        'Health education modules',
        'Service delivery checklists',
        'Referral management'
      ],
      certifications: 'iOS/Android, WHO Digital Guidelines, Open Source',
      badge: null
    },
    {
      name: 'mHealth SMS Gateway Platform',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1633613287441-3f72304088ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBoZWFsdGglMjBhcHAlMjBzbWFydHBob25lfGVufDF8fHx8MTc2MzA0MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bulk SMS and two-way messaging platform for patient communication, reminders, and health campaigns.',
      specs: [
        'Bulk SMS sending',
        'Two-way messaging',
        'Automated appointment reminders',
        'Survey and feedback collection'
      ],
      certifications: 'SMS Gateway Certified, GDPR Compliant, API Available',
      badge: null
    },
    {
      name: 'Maternal & Child Health Tracking App',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd29ya2VyJTIwbW9iaWxlJTIwdGFibGV0fGVufDF8fHx8MTc2MzA0MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Mobile application for antenatal care, delivery tracking, and child growth monitoring.',
      specs: [
        'ANC visit tracking',
        'Risk assessment tools',
        'Birth notification',
        'Growth monitoring (WHO standards)'
      ],
      certifications: 'iOS/Android, WHO Guidelines, Open Source',
      badge: null
    },
    {
      name: 'Medication Adherence Support App',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1633613287441-3f72304088ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBoZWFsdGglMjBhcHAlMjBzbWFydHBob25lfGVufDF8fHx8MTc2MzA0MDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Patient-facing app for medication reminders, side effect reporting, and adherence monitoring.',
      specs: [
        'Medication reminders',
        'Pill identification',
        'Adherence tracking',
        'Side effect reporting'
      ],
      certifications: 'iOS/Android, HIPAA Compliant, Multi-language',
      badge: null
    },
    {
      name: 'Health Facility Performance Dashboard',
      category: 'Analytics & Dashboards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc2MzA0MDE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Real-time performance monitoring dashboard for health facility management and quality improvement.',
      specs: [
        'Service delivery indicators',
        'Staff productivity metrics',
        'Patient satisfaction tracking',
        'Financial performance'
      ],
      certifications: 'ISO 27001, Web-based, Mobile Responsive',
      badge: null
    },
    {
      name: 'Disease Program Monitoring Dashboard',
      category: 'Analytics & Dashboards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc2MzA0MDE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vertical program dashboard for HIV, TB, malaria, and other disease-specific monitoring.',
      specs: [
        'Program-specific indicators',
        'Cascade analysis tools',
        'Geographic mapping',
        'Cohort analysis'
      ],
      certifications: 'WHO Compliant, ISO 27001, PEPFAR/Global Fund Ready',
      badge: null
    },
    {
      name: 'Human Resources for Health (HRH) Analytics',
      category: 'Analytics & Dashboards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc2MzA0MDE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Workforce analytics platform for health worker deployment, training, and performance management.',
      specs: [
        'Staff registry and deployment',
        'Training and certification tracking',
        'Performance evaluation',
        'Workload analysis'
      ],
      certifications: 'ISO 27001, GDPR Compliant, iHRIS Compatible',
      badge: null
    },
    {
      name: 'Financial Management & Billing Dashboard',
      category: 'Analytics & Dashboards',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc2MzA0MDE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Healthcare financial analytics with revenue cycle management, insurance claims, and budget tracking.',
      specs: [
        'Revenue cycle analytics',
        'Claims processing tracking',
        'Budget vs actual analysis',
        'Cost center reporting'
      ],
      certifications: 'ISO 27001, Financial Standards Compliant, Audit-ready',
      badge: null
    },
    {
      name: 'HL7 FHIR Integration Engine',
      category: 'Integration Tools',
      image: 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYzMDQwMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Healthcare interoperability platform for connecting disparate health information systems using HL7 FHIR standards.',
      specs: [
        'HL7 FHIR compliant',
        'System-to-system integration',
        'Data transformation tools',
        'API management'
      ],
      certifications: 'HL7 FHIR Certified, ISO 27001, Open Source',
      badge: 'Featured'
    },
    {
      name: 'Laboratory Equipment Integration Middleware',
      category: 'Integration Tools',
      image: 'https://images.unsplash.com/photo-1601839215170-6ce5854968d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI5NDQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Middleware for connecting laboratory analyzers and equipment to LIMS and EMR systems.',
      specs: [
        'Multi-vendor analyzer support',
        'Bidirectional connectivity',
        'Result auto-verification',
        'Quality control integration'
      ],
      certifications: 'HL7 LIS Compliant, ISO 15189, Vendor Certified',
      badge: null
    },
    {
      name: 'Medical Device IoT Gateway',
      category: 'Integration Tools',
      image: 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYzMDQwMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'IoT gateway for connecting and monitoring medical equipment with central management systems.',
      specs: [
        'Multi-protocol support',
        'Real-time device monitoring',
        'Maintenance alert system',
        'Usage analytics'
      ],
      certifications: 'ISO 13485, IEC 62304, Cybersecurity Compliant',
      badge: null
    },
    {
      name: 'National Health Data Warehouse',
      category: 'Integration Tools',
      image: 'https://images.unsplash.com/photo-1758691462620-9018c602ed3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMGRpZ2l0YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzYzMDQwMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Centralized data warehouse for aggregating health data from multiple sources for national-level analysis.',
      specs: [
        'Multi-source data extraction',
        'Data cleaning and validation',
        'Data harmonization',
        'Secure data storage'
      ],
      certifications: 'ISO 27001, GDPR Compliant, SOC 2',
      badge: null
    }
  ];

  const renderProductCard = (product: typeof featuredProducts[0], index: number) => (
    <Card key={index} className="overflow-hidden hover:shadow-lg transition">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        {product.badge && (
          <Badge className="mb-2 bg-[#0033A0]">{product.badge}</Badge>
        )}
        
        <h3 className="mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {product.description}
        </p>
        
        <div className="flex gap-2">
          <Link to="/support/request-equipment-quote" className="flex-1">
            <Button className="w-full bg-[#0033A0] hover:bg-[#002875]" size="sm">
              Request Quote
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="flex-1" onClick={() => { setSelectedProduct(product); setIsDialogOpen(true); }}>
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/shop" className="text-white/80 hover:text-white transition-colors">
                Shop
              </Link>
              <span className="text-white/60">/</span>
              <span>Digital Health & Data Tools</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Digital Health & Data Tools</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Software licenses, portable diagnostics, mobile apps, and analytics dashboards. Integrated digital health solutions for data-driven healthcare delivery across Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/request-equipment-quote">
                <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                  Request Digital Solutions Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Solutions Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="mb-1">Interoperable Systems</div>
              <p className="text-sm text-muted-foreground">
                HL7 FHIR, DICOM standards for seamless integration
              </p>
            </div>

            <div>
              <div className="mb-1">Offline-Capable</div>
              <p className="text-sm text-muted-foreground">
                Mobile apps work without internet connectivity
              </p>
            </div>

            <div>
              <div className="mb-1">Secure & Compliant</div>
              <p className="text-sm text-muted-foreground">
                ISO 27001, HIPAA, GDPR data protection standards
              </p>
            </div>

            <div>
              <div className="mb-1">Full Training & Support</div>
              <p className="text-sm text-muted-foreground">
                Implementation, user training, and ongoing technical support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Tabs */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl">Browse Digital Health Tools by Category</h2>
              <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex gap-2">
                {productCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Software & Licenses')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="diagnostics" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Portable Diagnostics')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Mobile Apps')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Analytics & Dashboards')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="integration" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Integration Tools')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Complete Digital Health Packages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Complete Digital Health Packages</h2>
            <p className="text-lg text-muted-foreground">
              Integrated digital health solutions tailored to different healthcare facility levels and programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Primary Health Center Digital Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Essential digital health tools for rural and peri-urban primary healthcare facilities.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Basic EMR system (5-user license)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Patient registration mobile app</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>SMS appointment reminder system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Portable ultrasound with cloud</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Connected rapid diagnostic platform</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Basic reporting dashboard</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Installation and training</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>1-year support and maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Rural health centers, urban clinics, primary care facilities</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">District Hospital Digital Suite</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive digital health infrastructure for district-level hospitals.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Hospital Management Information System</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Electronic Medical Records (50-user)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Laboratory Information System</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Pharmacy management system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Telemedicine consultation platform</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Performance analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>HL7 integration engine</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Training, support, and maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">District hospitals, regional medical centers, secondary care facilities</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#00A0DC] hover:bg-[#0088bb]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Vertical Program Digital Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized digital tools for disease-specific programs (HIV, TB, Malaria, NCD).
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Disease program management software</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Patient tracking mobile app</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Connected point-of-care diagnostics</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Medication adherence app</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Program monitoring dashboard</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>SMS patient communication platform</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Data reporting tools</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Implementation support</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">HIV/TB programs, malaria control, NCD programs, immunization</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">National Health Information Exchange</h3>
                  <p className="text-sm text-muted-foreground">
                    National-scale health information system with interoperability and data exchange capability.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>National data warehouse</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>HL7 FHIR integration platform</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Central patient registry</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Health analytics platform</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Disease surveillance system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Facility performance dashboards</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Secure data exchange infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Technical assistance and capacity building</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Ministries of Health, national health programs, health information exchanges</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#00A0DC] hover:bg-[#0088bb]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Standards-Compliant Digital Health Solutions</h2>
            <p className="text-lg text-muted-foreground">
              All digital health tools meet international standards for interoperability, security, and clinical practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Interoperability Standards</h3>
                <p className="text-sm text-muted-foreground">
                  HL7 FHIR, DICOM, IHE profiles for seamless data exchange between systems
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Data Security & Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  ISO 27001, HIPAA compliance, GDPR-ready with encryption and access controls
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Clinical Standards</h3>
                <p className="text-sm text-muted-foreground">
                  WHO digital health guidelines, ICD-10, SNOMED CT, LOINC code systems
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Mobile & Cloud Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Offline-first mobile apps, cloud-hosted platforms, and API-driven architectures
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Software Licenses</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible licensing models including perpetual, subscription, and concurrent user licenses. Volume discounts for multi-facility deployments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Cloud Hosting Options</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from cloud-hosted (AWS, Azure), on-premise, or hybrid deployment models. Africa-based data centers for compliance and performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">24/7 Technical Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock help desk support, system monitoring, software updates, and bug fixes. Dedicated support for critical systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Pacem Health Digital Solutions?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Africa-Optimized Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Offline-capable apps, low-bandwidth optimization, and solutions designed for African healthcare context and infrastructure realities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Interoperability First</h3>
                <p className="text-sm text-muted-foreground">
                  Built on HL7 FHIR, DICOM, and other open standards. Easy integration with existing systems. Avoid vendor lock-in with open APIs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Comprehensive Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Full-service implementation including requirements analysis, customization, data migration, go-live support, and post-deployment optimization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">User Training & Change Management</h3>
                <p className="text-sm text-muted-foreground">
                  Training of trainers programs, user manuals in local languages, online learning resources, and change management support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Data Security & Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  ISO 27001 certified data centers, encryption at rest and in transit, role-based access control, audit logging, and GDPR/HIPAA compliance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Continuous Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Regular software updates with new features, AI/ML enhancements, mobile-first design, and integration with emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#0033A0]">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#0033A0]">Custom Digital Health Solutions</Badge>
                  <h2 className="text-2xl sm:text-3xl mb-4">Need Customized Digital Health Systems?</h2>
                  <p className="text-muted-foreground mb-6">
                    We design and develop custom digital health solutions for national health programs, donor-funded projects, and specialized healthcare delivery models.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Digital health strategy and architecture design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom software development and system integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Health information exchange and interoperability platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">National digital health infrastructure implementation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white border-[#0033A0]/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-4">Get Started</h3>
                      <div className="space-y-3">
                        <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                          Request Needs Assessment
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Schedule Demo
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Download Technical Specs (PDF)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#00A0DC] text-white border-[#00A0DC]">
                    <CardContent className="p-6">
                      <div className="text-sm text-white/90 mb-1">Digital Health Specialists</div>
                      <p className="text-sm mb-3">
                        Our health informatics and software engineering team is ready to discuss your digital transformation needs.
                      </p>
                      <div className="text-sm">
                        📧 digital@pacemhealth.com<br />
                        📞 +XXX XXX XXX XXX
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Transform Healthcare with Digital Solutions</h2>
          <p className="text-lg text-white/90 mb-8">
            From EMR systems to portable diagnostics and analytics dashboards, we provide integrated digital health tools for data-driven healthcare delivery across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Request Digital Solutions Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        product={selectedProduct || featuredProducts[0]}
      />
    </div>
  );
}
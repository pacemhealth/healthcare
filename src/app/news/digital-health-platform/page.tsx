import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function DigitalHealthPlatform() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Digital Health Platform</span>
          </div>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#7C944B] text-white rounded-full text-sm">
              Platform Launch
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Digital Health Platform for Primary Care Networks
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            New offline-first mobile platform empowers community health workers with patient tracking, medication management, and health data collection tools
          </p>

          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Digital Health Platform"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Pacem Health has launched PacemCare, a comprehensive digital health platform designed specifically for primary healthcare networks in low-resource settings across Africa.
            </p>

            <h2>Platform Features</h2>

            <h3>Offline-First Design</h3>
            <p>
              The platform works seamlessly without internet connectivity, automatically syncing data when connection is available—critical for rural and remote areas with limited network infrastructure.
            </p>

            <h3>Patient Management</h3>
            <ul>
              <li>Electronic health records for longitudinal patient tracking</li>
              <li>Appointment scheduling and reminder systems</li>
              <li>Medication dispensing and adherence monitoring</li>
              <li>Chronic disease management protocols</li>
              <li>Maternal and child health tracking</li>
            </ul>

            <h3>Clinical Decision Support</h3>
            <ul>
              <li>Integrated clinical guidelines and protocols</li>
              <li>Drug interaction checking and dosing calculators</li>
              <li>Referral pathway guidance</li>
              <li>Disease-specific treatment algorithms</li>
            </ul>

            <h3>Supply Chain Integration</h3>
            <ul>
              <li>Real-time stock level monitoring</li>
              <li>Automated reorder alerts</li>
              <li>Expiry date tracking</li>
              <li>Supply utilization analytics</li>
            </ul>

            <h3>Data Analytics and Reporting</h3>
            <ul>
              <li>Health outcomes dashboards</li>
              <li>Program performance indicators</li>
              <li>Disease surveillance reporting</li>
              <li>DHIS2 integration for national reporting</li>
            </ul>

            <h2>Pilot Implementation</h2>
            <p>
              The platform is currently being piloted with 200 community health workers across 50 primary care facilities in Kenya and Tanzania, reaching approximately 100,000 patients.
            </p>

            <p>
              Early results from the pilot show:
            </p>
            <ul>
              <li>95% user adoption rate among trained health workers</li>
              <li>40% improvement in chronic disease follow-up rates</li>
              <li>30% reduction in medication stock-outs</li>
              <li>Real-time disease surveillance enabling faster outbreak response</li>
            </ul>

            <h2>Technology Specifications</h2>
            <p>
              PacemCare runs on Android tablets and smartphones, requiring minimal device specifications to ensure affordability and accessibility. The platform includes solar charging solutions for areas with unreliable electricity.
            </p>

            <h2>Expansion Plans</h2>
            <p>
              Following successful pilot results, Pacem Health plans to scale the platform to 2,000 health facilities across 10 African countries by end of 2026, potentially reaching 5 million patients with improved primary care services.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/news">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

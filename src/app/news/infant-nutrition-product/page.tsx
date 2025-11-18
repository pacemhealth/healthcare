import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Share2, Download, Baby, Heart, Leaf, Award } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function InfantNutritionProduct() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Infant Nutrition Innovation</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#7C944B] text-white rounded-full text-sm">
              Innovation
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>March 25, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Introduces Innovative Infant Nutritional Solution
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            New fortified nutritional product addresses infant malnutrition in resource-limited settings with locally-sourced ingredients, extended shelf life, and affordable pricing designed for African markets
          </p>

          {/* Share Actions */}
          <div className="flex flex-wrap gap-3 pb-8 border-b">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Featured Image */}
          <div className="my-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Mother caring for infant child"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              New infant nutritional solution designed to address malnutrition in African communities
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Nairobi, Kenya — Pacem Health today announced the development of an innovative infant nutritional product specifically designed to address malnutrition in resource-limited African settings. The fortified nutritional solution combines evidence-based nutritional science with practical considerations of affordability, shelf stability, and local ingredient availability.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Addressing a Critical Health Challenge</h2>
            <p className="mb-6">
              Infant and young child malnutrition remains a persistent challenge across many African communities. Inadequate complementary feeding practices, micronutrient deficiencies, food insecurity, and limited access to appropriate nutritional products contribute to high rates of stunting, wasting, and developmental delays that have lifelong consequences.
            </p>

            <p className="mb-6">
              Existing nutritional products often face barriers to widespread use including high costs that exceed family budgets, limited availability in rural areas, short shelf life requiring cold chain storage, unfamiliar ingredients and preparation methods, and taste profiles that infants reject. The Pacem Health infant nutritional solution was designed from the ground up to address these practical barriers while meeting rigorous nutritional standards.
            </p>

            <div className="bg-gradient-to-br from-[#7C944B]/5 to-[#4B2991]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Product Innovation Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Local Ingredients</h4>
                    <p className="text-muted-foreground">Formulated with regionally-available grains, legumes, and micronutrient fortification</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Shelf Stable</h4>
                    <p className="text-muted-foreground">12-month shelf life without refrigeration in tropical climate conditions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <Baby className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Age Appropriate</h4>
                    <p className="text-muted-foreground">Formulations optimized for 6-12 months and 12-24 months age groups</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Affordable Pricing</h4>
                    <p className="text-muted-foreground">Cost structure designed for accessibility to low-income households</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Evidence-Based Nutritional Formulation</h2>
            <p className="mb-6">
              The product formulation was developed in collaboration with pediatric nutritionists, food scientists, and public health experts. It meets World Health Organization guidelines for complementary feeding and micronutrient supplementation while addressing common nutritional deficiencies observed in African infant populations.
            </p>

            <p className="mb-6">
              The base formulation combines locally-sourced cereals and legumes to provide high-quality protein and complex carbohydrates. Micronutrient fortification addresses prevalent deficiencies in iron, zinc, vitamin A, and other essential nutrients critical for infant growth and development.
            </p>

            <p className="mb-6">
              The product includes beneficial components such as prebiotics to support healthy gut microbiome development, essential fatty acids for brain and vision development, and carefully balanced macronutrients to support appropriate weight gain and linear growth.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Local Sourcing and Production</h2>
            <p className="mb-6">
              A distinctive feature of the product is its use of locally-sourced ingredients wherever possible. Primary grain ingredients including sorghum, millet, and maize are procured from regional agricultural cooperatives. Legume components such as beans and lentils similarly come from African farmers.
            </p>

            <p className="mb-6">
              This local sourcing approach delivers multiple benefits including reduced production costs enabling more affordable pricing, support for regional agricultural economies, cultural familiarity and acceptability of ingredients, and reduced environmental impact from shorter supply chains.
            </p>

            <p className="mb-6">
              Production facilities are being established in Kenya and Nigeria to serve regional markets. These facilities will create local employment while ensuring product availability and freshness in target markets.
            </p>

            <div className="bg-[#7C944B] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Clinical Development and Testing</h3>
              <p className="text-white/90 mb-6">
                The product underwent rigorous development and testing to ensure safety, efficacy, and acceptability:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Formulation Development</h4>
                  <p className="text-white/80 text-sm">Multiple iterations tested for nutrient content, digestibility, and organoleptic properties</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Acceptability Studies</h4>
                  <p className="text-white/80 text-sm">Community-based research assessing infant acceptance, maternal preferences, and cultural appropriateness</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Safety Testing</h4>
                  <p className="text-white/80 text-sm">Comprehensive microbiological and chemical analyses confirming product safety</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Efficacy Trials</h4>
                  <p className="text-white/80 text-sm">Pilot studies demonstrating improvements in growth parameters and micronutrient status</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Packaging and Preparation</h2>
            <p className="mb-6">
              The product comes in single-serve sachets designed for convenience and hygiene. Each sachet contains the appropriate quantity for one feeding, eliminating measurement errors and reducing contamination risk. The sachets utilize moisture-barrier materials that maintain product stability in humid tropical environments.
            </p>

            <p className="mb-6">
              Preparation is straightforward requiring only the addition of clean water and mixing. Clear pictorial instructions on each sachet accommodate low-literacy caregivers. The product dissolves easily without lumps and requires no cooking, making it practical for families with limited fuel resources.
            </p>

            <p className="mb-6">
              Multiple flavor variants were developed to appeal to infant taste preferences while introducing appropriate flavor diversity for developing palates. Initial offerings include mild banana, orange-mango, and plain options.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Distribution and Access Strategy</h2>
            <p className="mb-6">
              Pacem Health is implementing a multi-channel distribution strategy to maximize product accessibility. Public health channels will supply the product through government health facilities, community health programs, and maternal-child health clinics often at subsidized prices or as part of nutrition intervention programs.
            </p>

            <p className="mb-6">
              Commercial retail distribution will make the product available through pharmacies, general stores, and kiosks in both urban and rural areas. Pricing for retail channels remains affordable while supporting sustainable business operations.
            </p>

            <p className="mb-6">
              Social marketing campaigns will raise awareness about appropriate infant feeding practices and the role of nutritional supplementation. Community health workers will receive training on proper product use and counseling techniques to support caregivers.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Regulatory Approvals and Quality Assurance</h2>
            <p className="mb-6">
              The product has been submitted for regulatory approval in Kenya, Tanzania, Uganda, Nigeria, and Ghana with additional country applications planned. Manufacturing facilities maintain Good Manufacturing Practice certification and undergo regular quality audits.
            </p>

            <p className="mb-6">
              Every production batch undergoes comprehensive quality testing including nutrient content verification, microbiological safety testing, heavy metal screening, and organoleptic evaluation. Batch tracking systems enable full supply chain traceability.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Partnerships and Implementation Support</h2>
            <p className="mb-6">
              Pacem Health is collaborating with government ministries of health to integrate the product into existing maternal and child health programs. Partnerships with international organizations including UNICEF and WFP will support procurement and distribution through humanitarian and development channels.
            </p>

            <p className="mb-6">
              Research partnerships with academic institutions will enable ongoing monitoring of product impact on child nutrition outcomes. These studies will generate evidence to inform program design and policy development around infant and young child feeding.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Affordability and Pricing Model</h2>
            <p className="mb-6">
              Pricing strategy balances affordability with business sustainability. Public sector procurement pricing enables government programs to reach large numbers of beneficiaries within constrained budgets. Retail pricing remains accessible to low and middle-income families while supporting operational costs and continued product development.
            </p>

            <p className="mb-6">
              Tiered pricing models provide additional discounts for large-volume humanitarian procurement by NGOs and international organizations. This approach maximizes the number of children who can benefit from the nutritional intervention.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Environmental and Social Responsibility</h2>
            <p className="mb-6">
              The product development process incorporated environmental sustainability considerations. Local ingredient sourcing reduces transportation emissions. Packaging materials were selected to minimize environmental impact while maintaining product integrity. The company is exploring take-back programs for used sachets to prevent environmental contamination.
            </p>

            <p className="mb-6">
              Social responsibility extends to farmer partnerships that provide fair prices and technical support to agricultural cooperatives supplying raw materials. Production facilities prioritize local hiring and provide job training to build community capacity.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Future Product Pipeline</h2>
            <p className="mb-6">
              Building on this initial infant nutrition product, Pacem Health is developing additional specialized nutritional solutions. Products in development include therapeutic foods for treating severe acute malnutrition, maternal nutrition supplements for pregnant and lactating women, and fortified foods for children aged 2-5 years to support continued growth and development.
            </p>

            <p className="mb-6">
              This expanding portfolio will enable comprehensive nutritional support across the critical first 1,000 days from conception through age two when nutritional interventions have the greatest impact on lifelong health and development.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Contributing to Nutrition Security</h2>
            <p className="mb-6">
              The introduction of this infant nutritional product represents Pacem Health's commitment to addressing fundamental health challenges through innovative, contextually-appropriate solutions. By combining scientific rigor with practical design considerations, the product has potential to meaningfully contribute to reducing infant malnutrition rates across Africa.
            </p>

            <p className="mb-6">
              Success will be measured not in units sold but in healthier children, reduced malnutrition rates, and strengthened food and nutrition security for African families. As the product scales and evidence of impact grows, it will contribute to the broader agenda of ensuring all African children have the nutrition they need to survive, thrive, and reach their full potential.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Product Information</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">For product inquiries or partnership opportunities:</p>
              <p>Pacem Health Nutrition Division</p>
              <p>Email: <a href="mailto:nutrition@pacemhealth.com" className="text-[#4B2991] hover:underline">nutrition@pacemhealth.com</a></p>
              <p>Phone: +254 (20) 555-0200 (Nairobi Office)</p>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/product-catalog-launch">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#7C944B] mb-2 block uppercase tracking-wide">Product Launch</span>
                    <h4 className="text-lg mb-2">Comprehensive Medical Product Catalog Unveiled</h4>
                    <p className="text-sm text-muted-foreground">First comprehensive catalog for African healthcare market</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/news/ghana-75k-patients">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Impact Story</span>
                    <h4 className="text-lg mb-2">75,000 Patients Reached in Rural Ghana</h4>
                    <p className="text-sm text-muted-foreground">Mobile diagnostic units bringing care to underserved communities</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/news">
              <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

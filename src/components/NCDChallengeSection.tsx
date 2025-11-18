interface NCDChallengeSectionProps {
  title?: string;
  description?: string;
  metrics?: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
}

export default function NCDChallengeSection({ 
  title = "Addressing Africa's NCD Challenge",
  description = "Non-communicable diseases are rising rapidly across Africa, requiring access to innovative treatments",
  metrics
}: NCDChallengeSectionProps) {
  const defaultMetrics = [
    {
      value: '463M',
      label: 'Diabetes',
      detail: 'Adults with diabetes in Africa by 2045 (projected)'
    },
    {
      value: '27M',
      label: 'Cardiovascular',
      detail: 'Deaths from CVD annually across the continent'
    },
    {
      value: '125M',
      label: 'Hypertension',
      detail: 'Adults living with high blood pressure'
    },
    {
      value: '71%',
      label: 'NCD Burden',
      detail: 'Projected increase in NCD burden by 2030'
    }
  ];

  const displayMetrics = metrics || defaultMetrics;

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#7C944B] to-[#6B8340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl text-white mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-3 text-white" style={{ fontWeight: 700 }}>
                {metric.value}
              </div>
              <h4 className="text-lg md:text-xl mb-2 md:mb-3 text-white" style={{ fontWeight: 600 }}>
                {metric.label}
              </h4>
              <p className="text-sm text-white/90">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

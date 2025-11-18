'use client';

interface Metric {
  value: string;
  label: string;
}

interface PlatformMetricsProps {
  title: string;
  metrics: Metric[];
}

export function PlatformMetrics({ title, metrics }: PlatformMetricsProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-3">{title}</h2>
          <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(metrics.length, 4)} gap-6`}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-gray-100"
            >
              <div className="text-3xl mb-1 text-[#0033A0]">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

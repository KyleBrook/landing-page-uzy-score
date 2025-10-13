import { Shield, Zap, Brain, Database, Target, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Feature = { title: string; desc: string };
type Props = {
  heading: string;
  subheading: string;
  items: Feature[];
};

const icons = [Shield, Database, Brain, Zap, Target, BarChart3];

const FeatureGridV2 = ({ heading, subheading, items }: Props) => {
  return (
    <section id="beneficios" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {heading}
          </h2>
          <p className="text-white/70">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Card key={i} className="bg-neutral-900 border border-neutral-800">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridV2;
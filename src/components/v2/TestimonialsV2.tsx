import { Card, CardContent } from "@/components/ui/card";

type Testimonial = { name: string; quote: string };
type Props = {
  heading: string;
  subheading: string;
  list: Testimonial[];
};

const TestimonialsV2 = ({ heading, subheading, list }: Props) => {
  return (
    <section id="depoimentos" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {heading}
          </h2>
          <p className="text-white/70">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <Card key={i} className="bg-neutral-900 border border-neutral-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--brand-accent)] font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-white/90 text-sm">{t.name}</div>
                </div>
                <p className="text-white/80 leading-relaxed">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
import {
  HeaderCpf,
  HeroCpf,
  StatsCpf,
  BenefitsCpf,
  HowWorksCpf,
  HighlightsCpf,
  TestimonialsCpf,
  FaqCpf,
  FinalCtaCpf,
  FooterCpf,
} from '../components/cpf';

const UzyPromo = () => {
  return (
    <div className="min-h-screen bg-[#05040a] text-white">
      <HeaderCpf />
      <main>
        <HeroCpf />
        <StatsCpf />
        <BenefitsCpf />
        <HowWorksCpf />
        <HighlightsCpf />
        <TestimonialsCpf />
        <FaqCpf />
        <FinalCtaCpf />
      </main>
      <FooterCpf />
    </div>
  );
};

export default UzyPromo;
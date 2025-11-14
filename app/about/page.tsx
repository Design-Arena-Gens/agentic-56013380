import { MotionText } from "@/components/ui/MotionText";
import { PageHeading } from "@/components/ui/PageHeading";

export default function AboutPage() {
  return (
    <div className="px-6 sm:px-8 md:px-10 max-w-6xl mx-auto py-16">
      <PageHeading title="About" subtitle="Computational Neuroscience" />
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="md:col-span-2 space-y-6 text-muted leading-relaxed">
          <MotionText>
            I study the dynamics of neural systems across scales, from single neurons to distributed cortical networks, building models that bridge biological fidelity and computational utility.
          </MotionText>
          <MotionText>
            My research integrates probabilistic modeling, dynamical systems, closed-loop experiments, and machine learning to understand how information flows, adapts, and represents in the brain.
          </MotionText>
        </div>
        <div className="neural-card p-6">
          <h3 className="text-sm tracking-widest text-muted">EXPERTISE</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-foreground/90">
            <li>Neural Dynamics</li>
            <li>State-Space Models</li>
            <li>Variational Inference</li>
            <li>BCI / Closed-loop</li>
            <li>Calcium Imaging</li>
            <li>Electrophysiology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-cream to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-primary text-sm font-medium mb-6 shadow-sm">
              <Sparkles size={16} className="mr-2" />
              Discover the Inner Me
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main mb-6 tracking-tight leading-tight">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">interACT</span>?
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              A global movement to help youth cut through the noise and rediscover their core goodness.
            </p>
          </div>
        </div>
      </section>


      {/* Youth Mental Health & Impact - Evidence-Based Section */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* The Solution */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 md:p-12 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-text-main mb-6 text-center">
              Evidence-Based Interventions Show Promise
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-text-main mb-3">Mindfulness-Based Programs</h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>31% reduction</strong> in anxiety symptoms (Khoury et al., 2015)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>25% improvement</strong> in emotional regulation (Dunning et al., 2019)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Significant decrease</strong> in depression scores among youth (Zoogman et al., 2015)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-text-main mb-3">Self-Awareness Practices</h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Improved academic performance</strong> and focus (Zenner et al., 2014)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Enhanced resilience</strong> to stress (Schonert-Reichl et al., 2015)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Better social relationships</strong> and empathy (Flook et al., 2010)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How interACT Addresses This */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-main mb-4">
              How interACT Makes a Difference
            </h3>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Our ACT framework (Awareness, Contemplation, Transformative Silence) is grounded in 
              evidence-based practices from positive psychology, mindfulness research, and contemplative science. 
              We provide accessible, culturally-sensitive tools that empower youth to develop:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Self-Awareness",
                "Emotional Regulation",
                "Stress Management",
                "Purpose & Meaning",
                "Resilience",
                "Compassion",
                "Mental Clarity",
                "Inner Peace"
              ].map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                  <span className="font-semibold text-text-main">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-sm font-bold text-text-main mb-3">References:</h4>
            <div className="text-xs text-text-muted space-y-1">
              <p>• World Health Organization (2021). Mental Health of Adolescents.</p>
              <p>• Khoury et al. (2015). Mindfulness-based therapy: A comprehensive meta-analysis. Clinical Psychology Review.</p>
              <p>• Dunning et al. (2019). Research Review: The effects of mindfulness-based interventions on cognition and mental health in children and adolescents. Journal of Child Psychology and Psychiatry.</p>
              <p>• Zoogman et al. (2015). Mindfulness interventions with youth: A meta-analysis. Mindfulness.</p>
              <p>• Zenner et al. (2014). Mindfulness-based interventions in schools: A systematic review and meta-analysis. Frontiers in Psychology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT - Inner Me Section for future reference
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        ... (previous Inner Me content) ...
      </section>
      */}

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
                alt="Peaceful meditation and inner reflection"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-lg text-text-muted leading-relaxed mb-8">
                <p>
                  We deliver this core message in a subtle, story-led format. We don't just teach 
                  concepts; we guide you to <em className="text-primary font-semibold">experience</em> them.
                </p>
                <p>
                  Through the ACT framework (Awareness, Contemplation, Transformative Silence), we provide a practical 
                  pathway to a life lived with integrity and empathy.
                </p>
              </div>
              <Link
                href="/modules"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
              >
                Explore the Modules
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of youth worldwide in discovering the power of the Inner Me.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-cream transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Join Us Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

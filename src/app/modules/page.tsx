import UnitCard from "@/components/UnitCard";

const modules = [
  {
    title: "Awareness: Connecting with Innate Goodness",
    description: "This is the starting point. We'll guide participants to recognize and feel the presence of their innate qualities—peace, love, and truth. These aren't concepts to be learned, but feelings to be experienced. By becoming aware of this inherent goodness, we lay the foundation for a life of purpose.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop", // Serene person reflecting awareness
    href: "/modules/awareness",
    number: 1,
  },
  {
    title: "Contemplation: Strengthening Your Inner Core",
    description: "Once we're aware of our core goodness, we can nurture it. This step involves focused reflection to build self-worth and inner strength. By contemplating these positive qualities within ourselves, we shift our focus from external validation to internal resilience, making us less susceptible to the pressures of the outside world.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop", // Placeholder: Reflection
    href: "/modules/contemplation",
    number: 2,
  },
  {
    title: "Transformative Silence: Accessing Inner Wisdom",
    description: "The final step is the most powerful. Through moments of guided silence, we create a space for deep connection with our inner discernment. This silence isn't an absence of noise, but a presence of clarity, allowing us to connect with our source of all powers. This is where true transformation happens, empowering young people to make choices that align with their rediscovered goodness.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop", // Placeholder: Light/Silence
    href: "/modules/transformative-silence",
    number: 3,
  },
];

export default function ModulesPage() {
  return (
    <div className="bg-cream min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            interACT Modules
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            In a world filled with constant distractions and external pressures, it's easy for young people to lose touch with their inner selves. This can lead to a sense of disconnect and self-doubt. Our upcoming event is designed to help youth cut through the noise and rediscover the core goodness that lies within them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <UnitCard
              key={module.number}
              title={module.title}
              description={module.description}
              image={module.image}
              href={module.href}
              number={module.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

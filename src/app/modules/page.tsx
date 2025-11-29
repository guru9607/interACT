import UnitCard from "@/components/UnitCard";

const modules = [
  {
    title: "Awareness: Connecting with Innate Goodness",
    description: "Recognize yourself as a spiritual being. Learn to distinguish the 'Inner Me' from your physical role and access your innate qualities of peace and truth.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", // Placeholder: Zen/Peace
    href: "/modules/awareness",
    number: 1,
  },
  {
    title: "Contemplation: Strengthening Your Inner Core",
    description: "Nurture your core qualities. Through focused reflection, build self-worth, resilience, and a deep sense of value that is independent of external validation.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop", // Placeholder: Reflection
    href: "/modules/contemplation",
    number: 2,
  },
  {
    title: "Transformative Silence: Accessing Inner Wisdom",
    description: "Connect with the Source. Experience deep silence not as emptiness, but as a fullness of power that enables you to discern right from wrong.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop", // Placeholder: Light/Silence
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
            ACT Modules
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore our structured pathway to inner resilience. Each module is designed 
            to be a practical step in your journey of self-discovery.
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

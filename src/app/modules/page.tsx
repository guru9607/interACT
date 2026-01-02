import UnitCard from "@/components/UnitCard";

const modules = [
  {
    title: "Awareness: Connecting with Innate Goodness",
    description: "The starting point. We guide participants to recognize themselves as living beings with innate qualities like Peace, Love, and Truth. These are not just concepts, but feelings to be experienced. By becoming aware of this inherent goodness, we lay the foundation for a life of purpose.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop", 
    href: "/modules/awareness",
    number: 1,
  },
  {
    title: "Contemplation: Strengthening Your Inner Core",
    description: "Once aware of our core goodness, we nurture it through focused reflection. This stage helps shift focus from external validation to internal resilience. By contemplating innate qualities, participants build deep self-worth and a stable inner core independent of external pressures.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop", 
    href: "/modules/contemplation",
    number: 2,
  },
  {
    title: "Transformative Silence: Accessing Inner Wisdom",
    description: "Access deep inner wisdom through stillness. This involves a profound experience of discernment between what is true and false. By connecting with the Source of all power, participants stabilize their innate qualities and bring about sustainable, positive life changes.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop", 
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

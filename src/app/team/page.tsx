import { MapPin } from "lucide-react";

const advisors = [
  { name: "Murali", role: "Advisor" },
  { name: "Ayako", role: "Advisor" },
  { name: "Sakshi", role: "Chairperson" },
];

const coordinators = [
  { name: "Yuji", role: "Coordinator", country: "Japan" },
  { name: "Rishi", role: "Coordinator" },
  { name: "Subha", role: "Coordinator" },
  { name: "Darshini", role: "Coordinator", country: "UK" },
];

const facilitators = [
  { name: "Maria Paula", country: "Columbia" },
  { name: "Elkie", country: "Kenya" },
  { name: "Yuji", country: "Japan" },
  { name: "Darshini", country: "UK" },
  { name: "Mona", country: "Indonesia" },
  { name: "Sakshi", country: "India" },
  { name: "Amrita", country: "Nepal" },
  { name: "Karan", country: "Malaysia" },
  { name: "Nonie", country: "Peru" },
  { name: "Krishna", country: "USA" },
];

const creativeTeam = [
  { name: "Guruprasad", role: "Technical Lead" },
  { name: "Chaitanya", role: "Creative Coordinator" },
  // { name: "Tanu", role: "Graphic Designer" },
  { name: "Janhvi", role: "Creative Coordinator" },
  { name: "Ravleen", role: "Content Coordinator" },
  { name: "Dhiraj", role: "Content Creator" },
  { name: "Sakshi Mubai", role: "Social Media Manager" },
];

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            Our Global Team
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            At interACT, our strength lies in our people — a diverse, passionate, and 
            committed team dedicated to youth empowerment and global change.
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center uppercase tracking-wider">Leadership & Advisors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {advisors.map((person) => (
              <div key={person.name} className="w-64 text-center p-6 rounded-xl bg-cream border border-teal-50">
                <div className="w-24 h-24 mx-auto bg-teal-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-teal-800">
                  {person.name[0]}
                </div>
                <h3 className="text-xl font-bold text-text-main">{person.name}</h3>
                <p className="text-primary font-medium">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coordinators Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center uppercase tracking-wider">Coordinators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((person) => (
              <div key={person.name} className="text-center p-6 rounded-xl bg-teal-50 border border-teal-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-text-main">{person.name}</h3>
                <p className="text-text-muted text-sm">{person.role}</p>
                {person.country && (
                  <div className="flex items-center justify-center mt-2 text-primary text-xs font-bold">
                    <MapPin size={12} className="mr-1" /> {person.country}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Global Facilitators Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center uppercase tracking-wider">Global Facilitators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {facilitators.map((person) => (
              <div key={person.name + person.country} className="text-center p-4 rounded-lg bg-white border border-gray-100 hover:border-teal-200 transition-colors">
                <h3 className="text-base font-bold text-text-main">{person.name}</h3>
                <div className="flex items-center justify-center mt-1 text-teal-600 text-xs font-bold uppercase">
                  {person.country}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creative & Tech Team Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-10 text-center uppercase tracking-wider">Creative & Technical Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeTeam.map((person) => (
              <div key={person.name} className="text-center p-4">
                <h3 className="text-lg font-bold text-text-main">{person.name}</h3>
                <p className="text-text-muted text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

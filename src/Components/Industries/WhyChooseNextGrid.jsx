import React from "react";
import { CheckCircle, MapPin, Users, Briefcase } from "lucide-react";

const WhyChooseNextGrid = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#1c2b46] via-[#20325a] to-[#162039] py-20 text-white">
      {/* Subtle Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
            Why Choose <span className="text-[#2a4d8e]">NextGrid!</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We’re redefining how IT support works fast, flexible, and focused on business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Template */}
          {[
            {
              icon: <MapPin className="text-[#2a4d8e] w-8 h-8" />,
              title: "Fast, Location Based IT Support",
              desc:
                "Immediate access to skilled engineers, wherever you need them no delays, no distance issues.",
            },
            {
              icon: <Users className="text-[#2a4d8e] w-8 h-8" />,
              title: "Vetted Network of IT Engineers",
              desc:
                "Get access to a strong pool of experienced, trusted engineers ready to solve your IT problems.",
            },
            {
              icon: <Briefcase className="text-[#2a4d8e] w-8 h-8" />,
              title: "No Long-Term Hiring Headaches",
              desc:
                "Forget the hiring hassle we offer the talent, you get the job done. No contracts, just execution.",
            },
            {
              icon: <CheckCircle className="text-[#2a4d8e] w-8 h-8" />,
              title: "Efficient B2B Service Execution",
              desc:
                "Built for businesses our service model ensures efficiency, professionalism, and results.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1e2d49] p-6 rounded-2xl shadow-lg border border-[#2a4d8e]/20 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNextGrid;

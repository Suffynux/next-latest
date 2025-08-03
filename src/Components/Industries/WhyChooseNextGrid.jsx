import React from "react";
import { CheckCircle, MapPin, Users, Briefcase } from "lucide-react";

const WhyChooseNextGrid = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 text-white">
      {/* Optional Top Banner Image */}
      <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1950&q=80')" }}>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
            Why Choose <span className="text-orange-400">NextGrid?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We’re redefining how IT support works — fast, flexible, and focused on business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="text-orange-400 w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">Fast, Location-Based IT Support</h3>
            </div>
            <p className="text-gray-300">
              Immediate access to skilled engineers, wherever you need them — no delays, no distance issues.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-orange-400 w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">Vetted Network of IT Engineers</h3>
            </div>
            <p className="text-gray-300">
              Get access to a strong pool of experienced, trusted engineers — ready to solve your IT problems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-orange-400 w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">No Long-Term Hiring Headaches</h3>
            </div>
            <p className="text-gray-300">
              Forget the hiring hassle — we offer the talent, you get the job done. No contracts, just execution.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="text-orange-400 w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">Efficient B2B Service Execution</h3>
            </div>
            <p className="text-gray-300">
              Built for businesses — our service model ensures efficiency, professionalism, and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNextGrid;



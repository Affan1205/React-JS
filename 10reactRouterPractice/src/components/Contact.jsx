import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const values = [
    {
      title: "Pure Simplicity",
      description:
        "We believe good design is as little design as possible. Less noise means more focus.",
    },
    {
      title: "Functional Utility",
      description:
        "Every interaction, pixel, and line of code should serve an explicit, intuitive purpose.",
    },
    {
      title: "Honest Execution",
      description:
        "We build interfaces that do not hide behind visual decorations or unnecessary trends.",
    },
  ];

  const team = [
    { name: "Elena Rostova", role: "Design Principal", initials: "ER" },
    { name: "Marcus Vance", role: "Lead Architect", initials: "MV" },
    { name: "Sora Tanaka", role: "Frontend Engineer", initials: "ST" },
  ];

  const navigate = useNavigate();
  function backHandler() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased">
      <button
        onClick={backHandler}
        class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg"
      >
        Move back to Home Page
      </button>
      {/* 2. Main Narrative Container */}
      <main className="max-w-3xl mx-auto px-6 py-20 space-y-24">
        {/* Section: Hero Introduction */}
        <section id="studio" className="space-y-6">
          <p className="text-xs uppercase font-semibold tracking-widest text-neutral-400">
            Contact
          </p>
          <h1 className="text-4xl font-light tracking-tight text-neutral-900 sm:text-5xl leading-tight">
            CONTACT We build digital environments that breathe.
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed max-w-2xl font-light">
            Founded in 2024, Nordic UI is a collective of designers and systems
            programmers operating remotely. We build modular design systems,
            clean application frameworks, and performant web products for teams
            who value precision over decoration.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Contact;

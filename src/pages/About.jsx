import React from 'react';

// Make sure to include the font in your index.html or via Google Fonts
// <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

function About() {
  return (
    <main className="font-mono bg-gradient-to-b from-green-200 via-green-100 to-yellow-100 text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-green-700 text-yellow-50 py-24 px-6 text-center">
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6" 
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Hackademy Zone
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Your chill spot for coding, learning, and building projects in a pixelated world.
        </p>
        <button className="bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-none shadow-md hover:translate-y-[-2px] transform transition-all border-4 border-green-900" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          Join the Fun
        </button>
      </section>

      {/* About / Mission Section */}
      <section className="py-20 px-6 bg-green-200 text-center">
        <h2 
          className="text-3xl font-bold mb-6" 
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          About Us
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-800">
          Hackademy Zone is a chill coding zone where tech enthusiasts can build, explore, and collaborate. Inspired by blocky, pixelated worlds, we bring creativity and coding together. Whether you're building games, apps, or learning new skills, Hackademy Zone is your sandbox.
        </p>
      </section>

      {/* Features / Highlights */}
      <section className="py-20 px-6">
        <h2 
          className="text-3xl font-bold text-center mb-12" 
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {["Pixel Projects", "Coding Challenges", "Chill Community"].map((feature, i) => (
            <div 
              key={i} 
              className="bg-green-300 shadow-md p-6 hover:scale-105 transform transition-all border-4 border-green-900 rounded-none"
            >
              <h3 
                className="font-bold text-xl mb-3" 
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                {feature}
              </h3>
              <p>
                {feature === "Pixel Projects" ? 
                  "Work on small, fun projects in a chill, Minecraft-inspired style." : 
                  feature === "Coding Challenges" ?
                  "Complete fun challenges that feel like building in a block world." :
                  "Connect with others, share builds, and learn in a relaxed environment."
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-6 bg-green-700 text-yellow-50 text-center">
        <h2 
          className="text-3xl font-bold mb-6" 
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Start Building Your World
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join Hackademy Zone and explore coding in a fun, pixelated universe. Learn, create, and chill.
        </p>
        <button className="bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-none shadow-md hover:translate-y-[-2px] transform transition-all border-4 border-green-900" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          Join the Zone
        </button>
      </section>
    </main>
  );
}

export default About;

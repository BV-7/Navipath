"use client"
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // Replace this with real auth logic
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.name);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-indigo-700 text-white text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
          HIII {username || "Guest"}!!!
        </h1>
        <p className="text-xl md:text-2xl">
          Ready to navigate smarter seas today?
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition">
          Start Your Voyage
        </button>
      </section>

      {/* Core Dashboard / App Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          Route Planner
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          Voyage Analytics
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          Predictive Alerts
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          Recent Voyages / Logs
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="bg-gray-200 p-6 md:p-12 flex flex-wrap justify-around gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 w-44 text-center">
          <p className="text-3xl font-bold">12</p>
          <p className="text-gray-600">Total Voyages</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 w-44 text-center">
          <p className="text-3xl font-bold">3</p>
          <p className="text-gray-600">Active Alerts</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 w-44 text-center">
          <p className="text-3xl font-bold">120L</p>
          <p className="text-gray-600">Fuel Saved</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 w-44 text-center">
          <p className="text-3xl font-bold">98%</p>
          <p className="text-gray-600">Avg ETA Accuracy</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Plan Your Next Voyage
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Take control of your journeys with NaviPath.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">
          View Routes
        </button>
      </section>
    </div>
  );
}

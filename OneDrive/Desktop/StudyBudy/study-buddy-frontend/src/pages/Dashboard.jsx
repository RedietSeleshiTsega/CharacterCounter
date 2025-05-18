import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [preferredName, setPreferredName] = useState("Buddy");

  useEffect(() => {
    const name = localStorage.getItem("preferredName") || "Buddy";
    setPreferredName(name);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome back, {preferredName}!</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Study Groups */}
        <section className="bg-[#1e293b] p-4 rounded-lg col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Study Groups</h2>
            <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">+ New Group</button>
          </div>
          <ul className="space-y-3">
            {["Calculus Study Group", "Computer Science 101", "Biology Research Team"].map((group, idx) => (
              <li key={idx} className="bg-[#334155] p-3 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-medium">{group}</p>
                  <p className="text-sm text-gray-400">Last active recently</p>
                </div>
                <button className="text-sm hover:underline">...</button>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-blue-400 hover:underline">View All Groups</button>
        </section>

        {/* Upcoming Sessions */}
        <section className="bg-[#1e293b] p-4 rounded-lg col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
            <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">+ Schedule</button>
          </div>
          <ul className="space-y-3">
            {[
              { title: "Programming Practice", date: "Today", time: "04:33 PM – 06:33 PM" },
              { title: "Calculus Midterm Review", date: "Thu, May 1", time: "03:33 PM – 05:33 PM" },
              { title: "Integration Techniques", date: "Sat, May 3", time: "03:33 PM – 05:03 PM" },
              { title: "Biology Lab Prep", date: "Mon, May 5", time: "03:33 PM – 05:33 PM" },
            ].map((session, idx) => (
              <li key={idx} className="bg-[#334155] p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{session.title}</p>
                    <p className="text-sm text-gray-400">{session.date} | {session.time}</p>
                  </div>
                  <button className="bg-green-600 px-3 py-1 rounded-md hover:bg-green-700">Join</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-blue-400 hover:underline">View All Sessions</button>
        </section>
      </div>

      {/* Recent Resources */}
      <section className="bg-[#1e293b] p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Resources</h2>
          <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700">Upload</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Calculus Cheat Sheet",
            "Midterm Practice Problems",
            "Algorithm Flowcharts",
            "Data Structures Diagram",
            "JavaScript Basics",
            "Biology Notes Chapter 1"
          ].map((res, idx) => (
            <div key={idx} className="bg-[#334155] p-3 rounded-md">
              <p className="font-medium">{res}</p>
              <p className="text-sm text-gray-400">Shared recently</p>
            </div>
          ))}
        </div>
        <button className="mt-4 text-blue-400 hover:underline">View All Resources</button>
      </section>
    </div>
  );
}

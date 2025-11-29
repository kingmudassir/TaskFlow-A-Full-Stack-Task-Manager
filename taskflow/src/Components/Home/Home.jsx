import { NavLink } from "react-router-dom";
import Card from "./Card";

function Home() {
  const features = [
    { title: 'Task Management', desc: 'Organize all your tasks in one place and stay productive.' },
    { title: 'Team Collaboration', desc: 'Work together seamlessly with your team on projects.' },
    { title: 'Progress Tracking', desc: 'Monitor your progress and never miss a deadline.' },
  ];

  return (
    <div 
    id='home'
    className="bg-gray-50 px-6 py-22 transition-all">
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Organize Your Tasks, Boost Your Productivity
        </h1>
        <p className="text-gray-600 mb-15">
          TaskFlow helps you manage your projects efficiently and stay on top of your work.
        </p>
        <NavLink 
        to="/signup"
        className="bg-teal-400 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer">
          Get Started
        </NavLink>
      </section>


      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} description={feature.desc} />
        ))}
      </section>
    </div>
  );
}

export default Home;

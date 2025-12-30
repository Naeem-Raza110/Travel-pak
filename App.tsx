
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopBar from './components/TopBar';
import FeatureBar from './components/FeatureBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureBar />
      </main>
    </div>
  );
};

export default App;

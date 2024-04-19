import React from 'react';

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <section className="main-section">
      {children}
    </section>
  );
}

export default MainSection;

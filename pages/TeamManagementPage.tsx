import React from 'react';
import TeamManagement from '../src/app/scheduler/TeamManagement';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const TeamManagementPage = () => {
  return (
    <>
    <Header />
    <div>
      <TeamManagement />
    </div>
    <Footer />
    </>
  );
}

export default TeamManagementPage;

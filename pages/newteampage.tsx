import React from 'react';
import NewTeam from '../src/app/scheduler/NewTeam';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const NewTeamPage = () => {
  return (
    <>
    <Header />
    <div>
      <NewTeam />
    </div>
    <Footer />
    </>
  );
}

export default NewTeamPage ;

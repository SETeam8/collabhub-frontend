
import React from 'react';
import SchedulerPage from '../src/app/scheduler/SchedulerPage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const Scheduler = () => {
  return (
    <>
    <Header />
    <div>
    <SchedulerPage />
    </div>
    <Footer />
    </>
  );
}

export default Scheduler;

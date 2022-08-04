import React from 'react';
import { RequestADemo } from '@components';
import Header from './header';
import UseCases from './useCases';
import Solutions from './solutions';
import AnalyticsDiagram from './analyticsDiagram';
import ContactUs from './contactUs';

export default function Homepage() {
  return (
    <>
      <Header />
      <UseCases />
      <AnalyticsDiagram />
      <Solutions />
      <RequestADemo />
      <ContactUs />
    </>
  );
}

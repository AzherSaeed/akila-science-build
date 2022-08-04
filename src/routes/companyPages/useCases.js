import React from 'react';
import { PrivateEquity, MarketingAnalytics, CustomerProfitability } from '@useCases';

export default {
  key: 'use-cases',
  path: '/use-cases',
  children: [
    { key: 'private-equity', path: 'private-equity', element: <PrivateEquity /> },
    { key: 'marketing-analytics', path: 'marketing-analytics', element: <MarketingAnalytics /> },
    {
      key: 'customer-profitability',
      path: 'customer-profitability',
      element: <CustomerProfitability />,
    },
  ],
};

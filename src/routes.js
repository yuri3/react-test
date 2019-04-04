import React from 'react';
import GeneralContractor from './generalContractor'

const routes = [
  {
    name: 'SubContractor',
    path: '/sub-contractor',
    exact: true,
    isPrivate: true,
    component: () => <h1>SubContractor</h1>,
  },
  {
    name: 'GeneralContractor',
    path: '/general-contractor',
    exact: true,
    isPrivate: true,
    component: (props) => <GeneralContractor {...props} />
  },
  {
    name: 'Bidder listing',
    path: '/bidder-listing',
    exact: true,
    isPrivate: true,
    component: () => <h1>Bidder listing</h1>,
  },
];

export default routes;

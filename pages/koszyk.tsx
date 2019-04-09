import React from 'react';
import Card from '../components/card/Card';
import { NextFunctionComponent } from 'next';

const CardPage: NextFunctionComponent<{}> = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default CardPage;

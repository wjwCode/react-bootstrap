import React from 'react';
import tsp from 'teaspoon';

import Col from '../src/Col';

describe('Col', () => {
  it('Should include "col" when there are no sizes', () => {
    tsp(<Col />)
      .shallow()
      .single('.col');
  });

  it('Should include "col" when xs is true', () => {
    tsp(<Col xl />)
      .shallow()
      .single('.col');
  });

  it('Should include sizes', () => {
    tsp(<Col xl={4} md={8} />)
      .shallow()
      .single('.col-md-8.col-4');
  });
});

import React from 'react';
import $ from 'teaspoon';

import FormLabel from '../src/FormLabel';
import FormGroup from '../src/FormGroup';

import { shouldWarn } from './helpers';

describe('<FormLabel>', () => {
  it('should render correctly', () => {
    expect(
      $(
        <FormLabel htmlFor="foo" className="my-control-label">
          Label
        </FormLabel>
      )
        .shallowRender()
        .single('label.control-label.my-control-label[htmlFor="foo"]')
          .text()
    ).to.equal('Label');
  });

  it('should respect srOnly', () => {
    $(
      <FormLabel srOnly>
        Label
      </FormLabel>
    )
      .shallowRender()
      .single('label.control-label.sr-only');
  });

  it('should use controlId for htmlFor', () => {
    $(
      <FormGroup controlId="foo">
        <FormLabel>Label</FormLabel>
      </FormGroup>
    )
      .render()
      .single('label.control-label[htmlFor="foo"]');
  });

  it('should prefer explicit htmlFor', () => {
    shouldWarn('ignored');

    $(
      <FormGroup controlId="foo">
        <FormLabel htmlFor="bar">
          Label
        </FormLabel>
      </FormGroup>
    )
      .render()
      .single('label.control-label[htmlFor="bar"]');
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';

import ViewResourceScreen from '../ViewResourceScreen';

describe('ViewResourceScreen', () => {
  //does page render
  it('page renders correectly', () => {
    render(
      <ViewResourceScreen
        route={{ params: { resourceID: '5JYjr0lYL4IvBUO4IGQl' } }}
      />,
    );
  });

  //is snapshot same

  //test header and body text to what it should be (see if truthy)
});

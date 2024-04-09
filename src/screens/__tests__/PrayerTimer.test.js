import React from 'react';
import { render } from '@testing-library/react-native';

import PrayerTimer from '../PrayerTimer';

describe('<PrayerTimer />', () => {
  it('renders correctly', () => {
    render(<PrayerTimer />);
  });
});

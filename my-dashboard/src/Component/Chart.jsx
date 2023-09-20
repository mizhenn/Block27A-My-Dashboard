import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [212, 190, 270, 9, 75, 175];
const pData = [200, 75, 36, 216, 35, 236];
const yData = [191, 136, 91, 190, 211, 152];

const xLabels = [
  'donut',
  'sandwich',
  'fries',
  'kebab',
  'hotdog',
  'burger',
];

export default function LineData() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'weekdays' },
        { data: uData, label: 'weekends' },
        { data: yData, label: 'holidays' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
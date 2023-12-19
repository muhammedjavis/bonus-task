/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { BarChart, LineChart } from '@mui/x-charts';

const Charts = ({ data }) => {
  const [chartType, setChartType] = useState('bar');

  const handleChartTypeChange = (event, newType) => {
    if (newType !== null) {
      setChartType(newType);
    }
  };
  return (
    <div>
      <ToggleButtonGroup
        value={chartType}
        exclusive
        onChange={handleChartTypeChange}
      >
        <ToggleButton value='bar'>Bar Chart</ToggleButton>
        <ToggleButton value='line'>Line Chart</ToggleButton>
      </ToggleButtonGroup>
      {chartType === 'bar' ? (
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Campaign' }]}
          series={[
            { dataKey: 'Clicks', label: 'Clicks' },
            { dataKey: 'Cost', label: 'Cost' },
            { dataKey: 'Conversions', label: 'Conversions' },
            { dataKey: 'Revenue', label: 'Revenue' },
          ]}
          width={700}
          height={500}
          margin={{ left: 100 }}
        />
      ) : (
        <LineChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Campaign' }]}
          series={[
            { dataKey: 'Clicks', label: 'Clicks' },
            { dataKey: 'Cost', label: 'Cost' },
            { dataKey: 'Conversions', label: 'Conversions' },
            { dataKey: 'Revenue', label: 'Revenue' },
          ]}
          width={700}
          height={500}
          margin={{ left: 100 }}
        />
      )}
    </div>
  );
};

export default Charts;

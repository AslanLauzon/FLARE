import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

interface DataPoint {
  timestamp: number;
  value: number;
}

interface RealTimeGraphProps {
  title: string;
  updateInterval?: number;
  color?: string;
  units?: string;
}

const RealTimeGraph: React.FC<RealTimeGraphProps> = ({
  title,
  updateInterval = 100,
  color = '#2E93fA',
  units = 'PSI'
}) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const maxPoints = 50; // Number of points to show before starting to shift

  useEffect(() => {
    // Simulated data update - replace with actual data source
    const updateData = () => {
      setData(prevData => {
        const newPoint: DataPoint = {
          timestamp: Date.now(),
          value: Math.random() * 100, // Replace with actual sensor reading
        };

        const newData = [...prevData, newPoint];
        return newData.slice(-maxPoints);
      });
    };

    const interval = setInterval(updateData, updateInterval);
    return () => clearInterval(interval);
  }, [updateInterval]);

  const traces = [
    {
      name: title,
      x: data.map(d => new Date(d.timestamp)),
      y: data.map(d => d.value),
      type: 'scatter',
      mode: 'lines',
      line: { color, width: 2 }
    }
  ];

  const layout = {
    title: {
      text: `${title} (${units})`,
      font: {
        color: '#dcddde',
        size: 16
      }
    },
    plot_bgcolor: '#2f3136',
    paper_bgcolor: '#36393f',
    font: {
      color: '#dcddde',
      size: 12
    },
    xaxis: {
      title: 'Time',
      gridcolor: '#40444b',
      zerolinecolor: '#40444b',
      tickformat: '%H:%M:%S',
      showgrid: true
    },
    yaxis: {
      title: units,
      gridcolor: '#40444b',
      zerolinecolor: '#40444b',
      showgrid: true
    },
    showlegend: false,
    margin: { t: 40, r: 40, b: 40, l: 50 },
    autosize: true
  };

  const config = {
    responsive: true,
    displayModeBar: false,
    displaylogo: false
  };

  return (
    <div className="graph-container">
      <Plot
        data={traces}
        layout={layout}
        config={config}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler
      />
    </div>
  );
};

export default RealTimeGraph;

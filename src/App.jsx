import Charts from './components/Charts';

function App() {
  const MATRICES = [
    {
      Campaign: 'Cosmetics',
      Clicks: 712,
      Cost: 4272,
      Conversions: 8,
      Revenue: 16568,
    },
    {
      Campaign: 'Serums',
      Clicks: 3961,
      Cost: 27331,
      Conversions: 115,
      Revenue: 362526,
    },
    {
      Campaign: 'Facewash',
      Clicks: 9462,
      Cost: 76831,
      Conversions: 123,
      Revenue: 266800,
    },
    {
      Campaign: 'Shampoos',
      Clicks: 439,
      Cost: 2151,
      Conversions: 5,
      Revenue: 11029,
    },
  ];
  return (
    <div>
      <h1>Data Visualization</h1>
      <Charts data={MATRICES} />
    </div>
  );
}

export default App;

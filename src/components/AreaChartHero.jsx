import { AreaChart } from '@tremor/react';
import { Card } from '@tremor/react';
import {useEffect, useState} from "react";
import axios from "axios";
 const b = 900
 const c =1000
const chartdata = [
  {
    date: 'Jan 24',
    SolarPanels: `${b}`,
    'Inverters': 1338,
  },
  {
    date: 'Feb 24',
    SolarPanels: `${c}`,
    'Inverters': 2103,
  },
  {
    date: 'Feb 22',
    SolarPanels: 2756,
    SolarPanels1: 7856,
    'Inverters': 2103,
  },
  {
    date: 'Feb 22',
    SolarPanels: 5756,
    SolarPanels1: 7856,
    'Inverters': 2103,
  },
  {
    date: 'Feb 22',
    SolarPanels: 1756,
    SolarPanels1: 7856,
    'Inverters': 2103,
  },
  {
    date: 'Jun 22',
    SolarPanels: 3129,
    'Inverters': 1726,
  },
  {
    date: 'Jul 22',
    SolarPanels: 3490,
    'Inverters': 1982,
  },
  {
    date: 'Aug 22',
    SolarPanels: 2903,
    'Inverters': 2012,
  },
  {
    date: 'Sep 22',
    SolarPanels: 2643,
    'Inverters': 2342,
  },
  {
    date: 'Oct 22',
    SolarPanels: 2837,
    'Inverters': 2473,
  },
  {
    date: 'Nov 22',
    SolarPanels: 2954,
    'Inverters': 3848,
  },
  {
    date: 'Dec 22',
    SolarPanels: 3239,
    'Inverters': 3736,
  },
];



const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export  function AreaChartHero () {




  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
    })
  }, [])
  return (


    
    <form className='grid grid-cols-2 gap-2 '>


<div>
      <ul>
        {countries.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  
    <AreaChart
      className="h-44 w-96 mx-4 my-6  bg-slate-300 "
      data={chartdata}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />

<AreaChart
      className="h-44 w-96 mx-4 my-6  bg-red-100 "
      data={chartdata}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    <AreaChart
      className="h-44 w-96 mx-4 my-6  bg-amber-100 "
      data={chartdata}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    <AreaChart
      className="h-44 w-96 mx-4 my-6  bg-green-100 "
      data={chartdata}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    </form >
  );
} 



   

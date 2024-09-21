import { AreaChart } from '@tremor/react';
import { Card } from '@tremor/react';
import {useEffect, useState} from "react";
import axios from "axios";
 const b = 900
 const c =1000
const chartdata = [
  {
    date: 'Jan 23',
    Humedad: `${b}`,
    'Temperatura Ambiente': 1338,
  },
  {
    date: 'jul 23',
    Humedad: `${c}`,
    'Temperatura Ambiente': 2103,
  },
  {
    date: 'agos 23',
    Humedad: 7856,
    'Temperatura Ambiente': 2103,
  },
  {
    date: 'sept 23',
    Humedad: 5756,
    
    'Temperatura Ambiente': 2103,
  },
  {
    date: 'oct 23',
    SolarPanels: 1756,
    SolarPanels1: 7856,
    'Temperatura Ambiente': 2103,
  },
  {
    date: 'Jun 22',
    SolarPanels: 3129,
    'Temperatura Ambiente': 1726,
  },
  {
    date: 'Jul 22',
    SolarPanels: 3490,
    'Temperatura Ambiente': 1982,
  },
  {
    date: 'Aug 22',
    SolarPanels: 2903,
    'Temperatura Ambiente': 2012,
  },
  {
    date: 'Sep 22',
    SolarPanels: 2643,
    'Temperatura Ambiente': 2342,
  },
  {
    date: 'Oct 22',
    SolarPanels: 2837,
    'Temperatura Ambiente': 2473,
  },
  {
    date: 'Nov 22',
    SolarPanels: 2954,
    'Temperatura Ambiente': 3848,
  },
  {
    date: 'Dec 22',
    SolarPanels: 3239,
    'Temperatura Ambiente': 3736,
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



  
    <AreaChart
      className="h-44 w-96 mx-4 my-6  bg-slate-300 "
      data={chartdata}
      index="date"
      categories={['Humedad', 'Temperatura Ambiente']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />

<AreaChart
      className="h-44 w-96 mx-4 my-6  bg-red-100 "
      data={chartdata}
      index="date"
      categories={['Humedad', 'Temperatura Ambiente']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    <AreaChart
      className="h-44 w-96 mx-4 my-6  bg-amber-100 "
      data={chartdata}
      index="date"
      categories={['Humedad', 'Temperatura Ambiente']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    <AreaChart
      className="h-44 w-96 mx-4 my-6  bg-green-100 "
      data={chartdata}
      index="date"
      categories={['Humedad', 'Temperatura Ambiente']}
      colors={['indigo','green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    </form >
  );
} 



   

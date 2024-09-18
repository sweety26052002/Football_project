import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import SectionHeading from "../HeadingField/HeadingField";
import ViewerShipGraphStyles from './ViewerShipGraph.module.scss';
import { useEffect, useState } from "react";

const uData = [
    { country: 'Country 1', value: 4000 },
    { country: 'Country 2', value: 3000 },
    { country: 'Country 3', value: 2000 },
    { country: 'Country 4', value: 2780 },
    { country: 'Country 5', value: 1890 },
    { country: 'Country 6', value: 2390 },
    { country: 'Country 7', value: 3490 },
    { country: 'Country 8', value: 4000 },
    { country: 'Country 9', value: 3000 },
    { country: 'Country 10', value: 2000 },
    { country: 'Country 11', value: 2780 },
    { country: 'Country 12', value: 1890 },
    { country: 'Country 13', value: 2390 },
    { country: 'Country 14', value: 3490 },
    { country: 'Country 15', value: 2023 },
];

const xLabels = [
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  2022, 2023,
];

const ViewerShipGraph = () => {
  const [chartWidth, setChartWidth] = useState(300); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) {
        setChartWidth(1785);
      } else if (window.innerWidth >= 1366) {
        setChartWidth(1200); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box id="Tournament stats">
      <Box className={ViewerShipGraphStyles.heading}>
        <SectionHeading heading={"STATS"} subHeading={"TOURNAMENT"} colors={"false"} />
      </Box>
      <Box>
        <Typography className={ViewerShipGraphStyles.subHeading}>Durand Cup Viewership over the years</Typography>
      </Box>
      <Box className={ViewerShipGraphStyles.barGraph}>
        <BarChart
          className={ViewerShipGraphStyles.graph}
          width={chartWidth}
          height={987.81}
          series={[{ data: uData.map(item => item.value), id: "uvId", color:'gray' }]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      </Box>
    </Box>
  );
};

export default ViewerShipGraph;

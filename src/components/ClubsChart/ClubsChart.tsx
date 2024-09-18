import { PieChart } from "@mui/x-charts/PieChart";
import { clubData } from "../../DummyData/clubChartsData";
import ClubsChartStyles from "./ClubsChart.module.scss";
import {
  Box,
  Paper,
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const ClubsChart = () => {
  const [chartWidth, setChartWidth] = useState(300);
  const [tableWidth, setTableWidth] = useState(300);
  const [tableHeight, setTableHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth >= 1920) {
        setChartWidth(745);
        setTableWidth(800);
        setTableHeight(545);
      } else if (windowWidth <= 1500) {
        setChartWidth(500);
        setTableWidth(750);
        setTableHeight(535);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box className={ClubsChartStyles.clubs}>
      <Typography className={ClubsChartStyles.clubsChartHeading}>
        Victorious Club/Team in Matches
      </Typography>

      <Box className={ClubsChartStyles.clubsChart}>
        <Box className={ClubsChartStyles.pieChartWidth}>
          <PieChart
            series={[
              {
                data: clubData,
              },
            ]}
            width={chartWidth}
            height={chartWidth}
          />
        </Box>
        <Box className={ClubsChartStyles.tableBox}>
          <TableContainer
            className={ClubsChartStyles.table}
            component={Paper}
            style={{ width: tableWidth, height: tableHeight }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className={ClubsChartStyles.tableHead}>
                  <TableCell>Teams</TableCell>
                  <TableCell align="right">Champions</TableCell>
                  <TableCell align="right">Runners-Up</TableCell>
                  <TableCell align="right">Last Win</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clubData.map((row) => (
                  <TableRow
                    key={row.id}
                    className={ClubsChartStyles.tableBody}
                  >
                    <TableCell
                      className={ClubsChartStyles.teamContainer}
                      component="th"
                      scope="row"
                    >
                      <Box
                        className={ClubsChartStyles.teamColor}
                        style={{ backgroundColor: row.color }}
                      ></Box>
                      <Box>{row.Teams}</Box>
                    </TableCell>
                    <TableCell align="right">{row.Champions}</TableCell>
                    <TableCell align="right">{row.RunnersUp}</TableCell>
                    <TableCell align="right">{row.Lastwin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ClubsChart;

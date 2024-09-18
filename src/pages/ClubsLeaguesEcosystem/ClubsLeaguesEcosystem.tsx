import { Box } from "@mui/material"
import { timeLineData } from "../../DummyData/timeLineData"
import TimeLineDisplay from "../../components/TimeLineDisplay/TimeLineDisplay"
import ClubLeagueEcosystemStyles from "./ClubsLeauge.module.scss"
import club from "../../assets/clubs.jfif"
const ClubsLeaguesEcosystem = () => {
  return (
    <Box className={ClubLeagueEcosystemStyles.clubsLeague}>
        <Box className={ClubLeagueEcosystemStyles.Image}><img src={club} alt="" /></Box>
        <TimeLineDisplay data={timeLineData} />
    </Box>
  )
}

export default ClubsLeaguesEcosystem

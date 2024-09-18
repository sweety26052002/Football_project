import { Box } from "@mui/material";
import { timeLineDataEven } from "../../DummyData/timeLineData";
import TimeLineDisplay from "../../components/TimeLineDisplay/TimeLineDisplay";
import TeamDynamicsStyles from "./NationalTeamDynamics.module.scss";
import nationalTeam from "../../assets/nationalTeam.svg"
const NationalTeamDynamics = () => {
  return (
    <Box className={TeamDynamicsStyles.nationalTeam}>
        <Box className={TeamDynamicsStyles.Image}><img src={nationalTeam} alt="" /></Box>
        <TimeLineDisplay data={timeLineDataEven} />
    </Box>
  )
}

export default NationalTeamDynamics

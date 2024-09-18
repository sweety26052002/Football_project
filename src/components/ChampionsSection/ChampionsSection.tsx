import { Box, Typography } from "@mui/material"
import ChampionsSectionImage from '../../assets/image 93.svg'
import ChampionSectionStyles from './ChapionsSection.module.scss'
import { constants } from "../../constants/stringConstants"
const ChampionsSection=()=>{
    return(
        <Box> 
            <Box className={ChampionSectionStyles.championsSectionImage}>
                <img src={ChampionsSectionImage} alt="championsSectionImage" />
            <Box className={ChampionSectionStyles.championsSectionTextbox}>
                <Typography variant="h1" className={ChampionSectionStyles.championsSectionText}>{constants.championsSectionText.text}</Typography>
            </Box>
            </Box>
        </Box>
    )
}
export default ChampionsSection;
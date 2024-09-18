import { Box } from "@mui/material";
import { cardsHeading } from "../../DummyData/cardsHeading";
import CardTextStyle from "./CardText.module.scss"
const CardText = () => {
    return (
       <>
        <Box className = {CardTextStyle.title}>
            {
                cardsHeading.map((e:any)=>(
                    <Box className = {CardTextStyle.title__text}>
                        {e.heading}
                    </Box>
                ))
            }
          
        </Box>
       </>
    )
}
export default CardText;
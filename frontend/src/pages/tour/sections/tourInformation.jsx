import { Grid } from "@mui/material";
import TourIndex from "./tourIndex";
import TourDetailInfo from "./tourDetailInfo";

const TourInfo = () => {
    return (
    <div>
        <section className="tour-info-section">
            <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <TourIndex></TourIndex>
                    </Grid> 
                    <Grid item xs={8}>
                        <TourDetailInfo></TourDetailInfo>
                    </Grid>
                </Grid>
        </section>
    </div>
    );
};
export default TourInfo;

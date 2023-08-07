import { Grid } from "@mui/material";
import './sectionStyles.css'
import TourCard from "../../components/tourCard";

const VacationPackages = () => {
    return (
        <div>
            <section className="homepage-section" id="vacationPackages">
                <h1>Vacation Package</h1>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <TourCard></TourCard>
                    </Grid>
                    <Grid item xs={3}>
                    <TourCard></TourCard>
                    </Grid>
                    <Grid item xs={3}>
                    <TourCard></TourCard>
                    </Grid>
                    <Grid item xs={3}>
                    <TourCard></TourCard>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};
export default VacationPackages;
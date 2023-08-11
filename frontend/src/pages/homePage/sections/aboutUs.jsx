
import { Grid, makeStyles } from '@material-ui/core'
import test from '../../../assets/images/test.jpg'
import './sectionStyles.css'

const AboutUs = () => {
    return (
        <div>
            <section className="homepage-section" id="aboutUs">
                <h1>Về chúng tôi</h1>
                <Grid container spacing={4}>
                    <Grid item xs={5}>
                        <img src={test} alt='test'/>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <p>Welcome to Travelus, where you can travel anywhere you want in VietNam with reasonable prices.</p>
                        <p>Welcome to Travelus, where you can travel anywhere you want in VietNam with reasonable prices.</p>
                        <p>Welcome to Travelus, where you can travel anywhere you want in VietNam with reasonable prices.</p>
                        <p>Welcome to Travelus, where you can travel anywhere you want in VietNam with reasonable prices.</p>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};
export default AboutUs;
import { Grid } from "@mui/material";
import './sectionStyles.css'
import CommentCard from "../components/commentCard";

const FeedBack = () => {
    return (
        <div>
            <section className="homepage-section" id="feedback">
                <h1>What our customers say about us?</h1>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <CommentCard></CommentCard>
                    </Grid>
                    <Grid item xs={3}>
                        <CommentCard></CommentCard>
                    </Grid>
                    <Grid item xs={3}>
                        <CommentCard></CommentCard>
                    </Grid>
                    <Grid item xs={3}>
                        <CommentCard></CommentCard>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};
export default FeedBack;
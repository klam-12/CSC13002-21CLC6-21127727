import React from 'react';
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
                        <p>Travelus là một trang web du lịch dành cho học sinh sinh viên, giúp bạn tìm kiếm, so sánh và đặt vé cho những chuyến đi hấp dẫn và tiết kiệm.</p>
                        <p>Trang web được thành lập bởi nhóm 105, gồm 5 sinh viên đam mê du lịch và công nghệ, với mong muốn mang lại cho bạn những trải nghiệm du lịch tuyệt vời nhất.</p>
                        <p>Bạn sẽ không thất vọng khi chọn Travelus để thực hiện những chuyến du lịch mơ ước, bởi Travelus luôn cập nhật những sản phẩm du lịch mới nhất, những giảm giá hấp dẫn nhất và những nơi du lịch phù hợp nhất với nhu cầu và ngân sách của bạn.</p>
                        <p>Đây cũng là nơi bạn có thể chia sẻ những kinh nghiệm, cảm xúc và đánh giá của mình với cộng đồng du lịch sinh viên.</p>
                        <p>Travelus không chỉ là một trang web du lịch, đây còn là nơi bạn có thể gửi gắm sự tin tưởng.</p>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};
export default AboutUs;
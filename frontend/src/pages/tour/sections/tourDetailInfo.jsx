import './tourStyles.css'
import test from '../../../assets/images/test.jpg'
import { Grid } from '@mui/material';

const TourDetailInfo = () => {
    return (
        <div className="tour-info-container">
            <h2 className="tour-info-title">Tour Information</h2>
            <Grid container spacing={4}>
                <Grid item xs={5}>
                    <p>THỜI GIAN: 4 ngày 3 đêm</p>
                    <br></br>
                    <p>ĐIỂM XUẤT PHÁT: TP Hồ Chí Minh</p>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <p>PHƯƠNG TIỆN: Hàng không Vietnam Airlines</p>
                    <br></br>
                    <p>ĐIỂM ĐẾN: Hà Nội - Hạ Long</p>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <p className="tour-info-title" style={{fontWeight: '600'}}>NGÀY KHỞI HÀNH</p>
                    <br></br>
                    <p>10/11/2023</p>
                    <br></br>
                    <p>20/12/2023</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="tour-info-title" style={{fontWeight: '600'}}>MÃ TOUR</p>
                    <br></br>
                    <p>STN084-2023-01311</p>
                    <br></br>
                    <p>STN084-2023-01312</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="tour-info-title" style={{fontWeight: '600'}}>GIÁ VÉ (VND)</p>
                    <br></br>
                    <p>8.000.000</p>
                    <br></br>
                    <p>8.000.000</p>
                </Grid>
                <Grid item xs={3}>
                    <p></p>
                    <br></br>
                    <p>Button</p>
                    <br></br>
                    <p>Button</p>
                </Grid>
            </Grid>
            <h2 className="tour-info-title">Description</h2>
            <p>Welcome to Đà Nẵng, one of the most vibrant and captivating cities in Vietnam! Located along the central coast of the country, Đà Nẵng is renowned for its beautiful beaches, rich history, and warm hospitality. Let me take you on a virtual tour to explore the highlights and attractions of this charming destination.</p>
            <br></br>
            <p>As you arrive in Đà Nẵng, the first thing that captures your attention is the pristine coastline. With miles of sandy beaches and crystal-clear waters, this city offers a perfect retreat for sun-seekers and water sports enthusiasts. One of the most popular beaches here is My Khe Beach, known for its golden sands and gentle waves. It's an ideal spot to relax, soak up the sun, and enjoy various water activities like swimming, snorkeling, or jet skiing.</p>
            <h2 className="tour-info-title">Combo 4 ngày 3 đêm có gì</h2>
            <p><b>NGÀY 01: TP. HCM - HÀ NỘI (Ăn trưa, chiều)</b></p>
            <p>Buổi sáng, quý khách tập trung tại Cổng D1 - Ga đi trong nước - Sân Bay Tân Sơn Nhất. Hướng dẫn viên của Lữ hành Saigontourist đón quý khách và hỗ trợ làm thủ tục. Khởi hành ra Hà Nội (chuyến bay dự kiến VN216 lúc 07h00 hoặc (chuyến bay VN240 lúc 7h). Đáp xuống sân bay Nội Bài, xe đưa đoàn qua “đường Cổ Ngư xưa”, ngắm cảnh hồ Tây, chùa Trấn Quốc. Buổi chiều, đoàn đến trải nghiệm tuyến tàu điện trên cao Cát Linh - Hà Đông. Buổi tối, đoàn tự do dạo quanh phố đi bộ Hồ Gươm, tham quan “36 phố phường”- khu phố cổ với những ngành nghề đặc trưng và truyền thống của cư dân Thủ đô. Nghỉ đêm tại Hà Nội.
</p>
            <img src={test} alt="test"></img>
            <p><b>NGÀY 02: HÀ NỘI - HẠ LONG (Ăn sáng, trưa, chiều)</b></p>
            <p>Buổi sáng, đoàn khởi hành đi Hạ Long. Xe đưa dạo quanh tuyến đường mới ven biển Hạ Long - Cẩm Phả: " check in" Núi Thủng - một lỗ thủng tự nhiên xuyên qua núi Khe Cá, tạo ra cảnh tượng lạ mắt; ngắm nhìn khu đô thị với những công trình hiện đại: Cung quy hoạch - hội chợ - triển lãm, tham quan Bảo tàng Quảng Ninh. Buổi tối, đoàn tự do khám phá thành phố biển sôi động về đêm... Nghỉ đêm tại Hạ Long.
Lựa chọn (tự túc chi phí di chuyển & tham quan):</p>
            <p>- Trải nghiệm xe bus 2 tầng vừa đưa vào khai thác vào tháng 2.2023, chiêm ngưỡng cảnh quan trên trục đường ven biển thành phố Hạ Long.</p>
            <p>- Tham quan Quần thể Du lịch - Giải trí Sun World Hạ Long Park - gồm 2 khu công viên vui chơi ven biển Bãi Cháy và trên núi Ba Đèo - được kết nối với nhau bởi hệ thống cáp treo vượt biển Nữ Hoàng đạt 2 kỷ lục thế giới (cabin có sức chứa lớn nhất thế giới và cáp treo có trụ cao nhất thế giới so với mặt đất). Trải nghiệm trò chơi mạo hiểm, Vòng quay Mặt Trời - một trong những vòng quay cao nhất thế giới,...</p>
            <img src={test} alt="test"></img>
            <p><b>NGÀY 03: TRẢI NGHIỆM DU THUYỀN NGHỈ ĐÊM TRÊN VỊNH HẠ LONG (Ăn sáng, trưa, chiều)</b></p>
            <p>Buổi sáng, đoàn tự do nghỉ ngơi, thư giãn...Sau khi trả phòng, xe & hướng dẫn viên sẽ đưa đoàn đến bến cảng.Quý khách làm thủ tục và bắt đầu hành trình 2 ngày 1 đêm trên du thuyền 5* sang trọng:</p>
            <p>+ 12:30 Quý khách thưởng thức đồ uống chào mừng và quản lý tàu sẽ giới thiệu hải trình cùng một số quy định về an ninh an toàn.</p>
            <p>+ 13:00 Thưởng thức bữa trưa, ngắm cảnh trong khi du thuyền bắt đầu hải trình khám phá Vịnh Hạ Long.</p>
            <p>+ 15:00 Tham quan hang Sửng Sốt - nằm trong khu vực trung tâm của Di sản thế giới.</p>
            <p>+ 16:00 Đoàn ghé đảo Ti Tốp, quý khách vui chơi trên bãi biển hoặc leo lên đài quan sát trên đỉnh núi, ngắm trọn vẻ đẹp kỳ thú của di sản trong góc nhìn toàn cảnh.</p>
            <p>+ 17:00 Trở về du thuyền, quý khách tự do nghỉ ngơi, ngắm hoàng hôn.</p>
            <p>+ 18:00 Thưởng thức đồ uống cùng chương trình “Giờ hạnh phúc” (mua 1 tặng 1), tham gia lớp hướng dẫn làm món ăn truyền thống ...</p>
            <p>+ 19:00 Thưởng thức bữa tối với thực đơn kết hợp phong vị Á Âu tại nhà hàng.</p>
            <p>+ 20:30 Tự do nghỉ ngơi hoặc nghe nhạc, xem phim, câu mực,…Nghỉ đêm trên du thuyền Hạ Long.</p>
            <img src={test} alt="test"></img>
        </div>
    );
};
export default TourDetailInfo;
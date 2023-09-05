import Avatar from '../../../components/avatar/avatar';
import avatar from '../../../assets/icons/avatar.jpg'
import './tourStyles.css'

var customers = ["Truong Tran Phuong Khanh","Nguyen Thi Khanh Lam", "Nguyen Thi Ngoc Tram", "Nguyen Phuc Thinh", "Nguyen Anh Hoang", "Tran Minh Anh","Truong Tran Phuong Khanh","Nguyen Thi Khanh Lam", "Nguyen Thi Ngoc Tram", "Nguyen Phuc Thinh", "Nguyen Anh Hoang", "Tran Minh Anh"]

const toursTakenCustomer = (customers) =>{
    var customerCard = []
    for (let i = 0; i < customers.length; i++){
        customerCard.push(
            <div>
                <div className="tour-taken-list">
                    <Avatar image={avatar}></Avatar>
                    <div>
                        <p className="tour-taken-list-name"><b>{customers[i]}</b></p>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
    return customerCard
};

const ToursTakenList = () => {
    return (
        <div>
            <div className="tour-taken-list-container">
            <h3>Danh sách các khách đăng ký</h3>
            {toursTakenCustomer(customers)}
            </div>
        </div>
    );
}; export default ToursTakenList;
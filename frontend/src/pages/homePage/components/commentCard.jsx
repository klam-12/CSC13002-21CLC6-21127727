import './commentCard.css'
import avatar from '../../../assets/icons/avatar.jpg'
import Avatar from '../../../components/avatar/avatar';

const CommentCard = () => {
    return (
        <div className="comment-card">
        <div className="comment-card-container">
          <p>“ Objectively deploy open-source web-readiness impactful bandwidth. Compelling coordinate bussiness deliverables rather equity invested technologies. Phosfluorescently reinvent. ”</p>
          {/* <span><img className="avatar" src={avatar} alt="avatar"/> <h4><b>William John</b></h4> </span> */}
          <div className="comment-name-section">
              <Avatar image={avatar}></Avatar>
              <div className="comment-name-container">
                <p className="comment-name"><b>William John</b></p>
                <p className="comment-date"><b>dd/mm/yyyy</b></p>
              </div>
          </div>
        </div>
      </div>
    );
};
export default CommentCard;
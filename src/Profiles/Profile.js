import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import userPhoto from './user.jpeg'
import PropTypes from "prop-types";


const Profile = (props)=> {
    return (
      <div className="container mt-5 d-flex justify-content-center ">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <div className="image">
            {props.children}
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0">{props.fullName}</h4>
              <span>{props.profession}</span>
              <p>{props.bio}</p>
              <div className="button mt-2 d-flex flex-row align-items-center">
                <button className="btn btn-sm btn-outline-primary w-100" onClick={()=>props.handleName(`Hello , I am ${props.fullName} ,Nice to meet you`)}>
                  Chat
                </button>
                <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  };
  // default props
  Profile.defaultProps = {
    fullName: 'user',
    profession: 'Programmer',
    bio: 'I am a programmer',
    handleName: () => {},
  };
  // default props children
Profile.defaultProps={
  children: <img src={userPhoto} className="rounded" width="155" alt="" />

}
// default Props types
Profile.propTypes={
  fullName:PropTypes.string,profession:PropTypes.string,bio:PropTypes.string,handleName:PropTypes.func
}
  export default Profile;
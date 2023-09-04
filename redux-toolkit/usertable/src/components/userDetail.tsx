
import DeleteAllUsers from "./delete-all-users";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import DisplayUsers from "./DisplayUsers";
import { addUsers } from "../store/slices/UserSlice";
const UserDetail = () => {
  const dispatch = useDispatch<any>()
  const data = useSelector((state:any)=>
  {
    return state.user
  }
)
  console.log(data);
  const addUser = (payload:any) =>{
// console.log("userData",payload);
dispatch(addUsers(payload))

  }
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick= {()=>addUser(fakeUserData() )} >Add New Users</button>
        </div>
        <ul>
          <DisplayUsers/>  
          {/* {data?.map((user:any,id:any)=>(
        <li>
            {user}
        </li>
    ))} */}
          {/* <li>Hi</li>
          <li>Hii</li> */}
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetail;
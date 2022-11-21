import React from 'react'
import { Link } from "react-router-dom";
import "./navbarAnalyse.css"
import { useSelector } from "react-redux";
import FolderAddOutlined from "@ant-design/icons"
import styled from "styled-components";
import { Menu } from "antd";

// import CreateProject from '../../../components/UI/Forms/create-project/CreateProject';
const { Item,ItemGroup} = Menu;





function NavbarAnalyse() {
  const { currentUser } = useSelector((state) => state.user);

  const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`;

  const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor:pointer
`;
  return (
    <div>
       <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* <img src={Logo} alt="logo" className="logo"/> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/list" className="homelink">List Project</Link>
              </li>
              <li className="nav-item">
              <Link to="/create-project" className="homelink">  
                 Create Project       
                 </Link>
              </li> 
              <li className="nav-item">
              <Link to="/create-task" className="homelink">  
                 Create Task       
                 </Link>
              </li>
              <li className="nav-item">
              <Link to="/list-task" className="homelink">  
                 List Task       
                 </Link>
              </li>
            </div>
              {currentUser ? (<User>
              <FolderAddOutlined />
              <Avatar
              />
            
              {currentUser.name}
              
            </User> ): 
            <form className="d-flex" role="search">
              <Link to="/signin"><button className="btn btn-outline-info"  type="submit">Sign In</button></Link>
            </form>
             } 
          </div>
         
        </div>
        <div>
          
          </div>
      </nav>
    </div>
  )
}

export default NavbarAnalyse
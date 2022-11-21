import React, { useState } from 'react'
import { Link,useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CreateProject from '../../components/UI/Forms/create-project/CreateProject';
import axios from 'axios';
import "./creeProjet.css"

function CreeProjet() {
     // state
     const [values, setValues] = useState({
        title: "",
        description: "",
      });
      const [project, setProject] = useState("")

      const { currentUser } = useSelector((state) => state.user);
      const { currentProject } = useSelector((state) => state.project);


        const dispatch = useDispatch();
        const navigate = useNavigate()
      
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const jwtToken = window.localStorage.getItem("jwt");
        try {
          let object ={
            title:values.name,
            description:values.description,
            userId:"8"
          }
          console.log(object)
         
          const { data } = await axios.post("http://localhost:8800/api/project",object);
          toast("Great! project is created with successfully");
          navigate("/list");
        } catch (err) {
          toast(err.response.data);
        }
      };

  return (
    <div className="creeProjet">
       <h1>Create Project </h1>
       <div className="pt-3 pb-3">
            <CreateProject
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            />
       </div>
    </div>
  )
}

export default CreeProjet
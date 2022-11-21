import React, { useState } from 'react'
import { Link,useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from 'axios';
import "./creeTask.css"
import CreateTask from '../../components/UI/Forms/createTask/CreateTask';

function CreeTask() {
     // state
     const [values, setValues] = useState({
        title: "",
        desc: "",
      });
      const [task, setTask] = useState("")

      const { currentUser } = useSelector((state) => state.user);
      const { currentTask } = useSelector((state) => state.task);


        const dispatch = useDispatch();
        const navigate = useNavigate()
      
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let object ={
            title:values.name,
            desc:values.description,
            userId:"8"
          }
          console.log(object)
         
          const { data } = await axios.post("http://localhost:8800/api/task",object);
          toast("Great! project is created with successfully");
          navigate("/list-task");
        } catch (err) {
          toast(err.response.data);
        }
      };

  return (
    <div className="creeProjet">
       <h1>Create Task </h1>
       <div className="pt-3 pb-3">
            <CreateTask
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            />
       </div>
    </div>
  )
}

export default CreeTask
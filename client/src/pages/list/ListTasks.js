import React, { useState,useEffect } from 'react'
import axios from "axios"
// import Project from '../../../../back-end/models/Project';


function ListTasks(){
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [project, setProject] = useState([]);

    const getAllTasks = async (e)=>{
        e.preventDefault();
        try {
            const {data} = axios.get("http://localhost:8800/api/project/find");
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllTasks();
      }, []);
  return (
    <div className="listProject">
       <div className="card">
  <div className="card-header border-0">
    <h3 className="card-title">Tasks</h3>
  </div>
  <div className="card-body table-responsive p-0">
    <table className="table table-striped table-valign-middle">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {project.name}
          </td>
          <td>{project.desc}</td> 
        </tr>
        
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default ListTasks
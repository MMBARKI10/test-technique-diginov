import React, { useState,useEffect } from 'react'
import axios from "axios"
// import Project from '../../../../back-end/models/Project';


function ListProject(){
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [project, setProject] = useState([]);

    const getAllProject = async (e)=>{
        e.preventDefault();
        try {
            const {data} = axios.get("http://localhost:8800/api/project/find").then((result) => {
              console.log("getAllProject getAllProject", result.data.project);
              setProject(result.data.project);
              console.log(data)
            });
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllProject();
      }, []);
  return (
    <div className="listProject">
       <div className="card">
  <div className="card-header border-0">
    <h3 className="card-title">Projects</h3>
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

export default ListProject
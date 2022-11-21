import React from 'react'
import "./createTask.css"

function CreateTask({handleChange,values,handleSubmit}) {
  return (
   
        <div className="create">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group" >
                    <input type="text" 
                    name="name" 
                    onChange={handleChange} 
                    placeholder="title" 
                    className="form-control"
                    />
                    </div>
                    <div className="form-group">
                        <textarea
                        name="description"
                        placeholder="description"
                        cols="7"
                        rows="7"
                        onChange={handleChange}
                        className="form-control"
                        >
                        </textarea>
                    </div>
                    <div className="row">
                        <div className="col"> 
                            <button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            type="primary"
                            size="large"
                            >
                                Create
                            </button>
                        </div>
                    </div>
            </form>
        </div>
   
  )
}

export default CreateTask
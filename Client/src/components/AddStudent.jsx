import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AddStudent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [roll, setRoll] = useState('admin')
    const [grade, setGrade] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/student/register', {roll,username, grade, password})
        .then(res => {
          if(res.data.registered) {
            navigate('/dashboard')
          }
          console.log(res)
        })
        .catch(err => console.log(err))
      }

  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className="form-group">
                <label htmlFor="roll">Faculty:</label>
                <input type="text" name="roll" id="roll" 
                onChange={(e) => setRoll(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <input type="text" name="username" id="username" 
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="grade">Year:</label>
                <input type="text" name="grade" id="grade" 
                onChange={(e) => setGrade(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default AddStudent
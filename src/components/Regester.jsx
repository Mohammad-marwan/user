import { useFormik } from 'formik'
import React, { useContext } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { userContext } from './User.jsx'
export default function Regester() {

const userName = useContext(userContext)

    const schema = yup.object({
        userName:yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().required(),

    })
    const Formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
        password:'' ,       },
        onSubmit: async ()=>{
            const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,Formik.values)
            console.log(data)
        },validationSchema:schema
    })
  return (
  
    <form onSubmit={Formik.handleSubmit}>
      <h2>{userName}</h2>
        <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="userName"
    name='userName' value={Formik.userName} onChange={Formik.handleChange} />
    <label htmlFor="floatingInput">userName</label>
    {Formik.errors.userName?<div className="alert alert-danger">{Formik.errors.userName}</div>:null}
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='email' value={Formik.email} onChange={Formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    {Formik.errors.email?<div className="alert alert-danger">{Formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
    name='password' value={Formik.password} onChange={Formik.handleChange} />
    <label htmlFor="floatingPassword">Password</label>
    {Formik.errors.password?<div className="alert alert-danger">{Formik.errors.password}</div>:null}
  </div>
  <button type='submit' className='btn btn-dark my-3'>Register</button>
</form>

  )
}

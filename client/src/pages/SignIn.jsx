import { useState } from "react"
import { Link } from "react-router-dom"

const Signin = () => {
  const [formData,setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    // console.log(e)
      try {
            setLoading(true)
            setError(false)
            const res = await fetch("/api/auth/signin",{
              method:'POST',
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(formData)
            })
            const data = await res.json()
            console.log(data)
            setLoading(false)
            if(data.success === false){
              setError(true)
              return
            }
        } catch (error) {
            setLoading(false)
            setLoading(true)
          }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7 ">Sign in</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input 
          type="email" 
          placeholder="email" 
          id="email" 
          onChange={handleChange} 
          className="bg-slate-100 p-3 rounded-lg"
          />
          <input 
          type="password" 
          placeholder="password" 
          id="password" 
          onChange={handleChange} 
          className="bg-slate-100 p-3 rounded-lg"
          />

          <button 
          disabled={loading} 
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80" >
          {loading ? "loading..." : "Sign up"}
          </button>
        </form>
          <div className="flex gap-2 mt-5">
            <p>Do not an account?</p>
            <Link to="/sign-in">
            <span className="text-red-500">Sign up</span>
            </Link>
          </div>
          <p className="text-red-500 pt-2">{error ? "Something went wrong" : ""}</p>
    </div>
  )
}

export default Signin
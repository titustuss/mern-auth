import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Header = () => {
  // distructuring the user from currentUser
  const {currentUser} = useSelector((state) =>state.user)
  return (
    <div className="flex p-4 mx-10  justify-around items-center">
        <div className="bg-blue-500 rounded p-2">
          <h1 className="text-white text-3xl">Logo</h1>
        </div>
        <div className="">
          {currentUser ? <h2 className="text-red-500">{currentUser.username}</h2>
          : <ul className="flex p-4 gap-3 text-xl">
            <Link to="/sign-in"><li>sign in</li></Link>
            <Link to="/sign-up"><li>sign up</li></Link>
           </ul>}
        </div> 
    </div>
  )
}

export default Header
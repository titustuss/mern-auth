const Header = () => {
  return (
    <div className="flex p-4 mx-10  justify-around items-center">
        <div className="bg-blue-500 rounded p-2">
          <h1 className="text-white text-3xl">Logo</h1>
        </div>
        <div className="">
          <ul className="flex p-4 gap-3 text-xl">
            <li>sign in</li>
            <li>sign up</li>
          </ul>
        </div>
    </div>
  )
}

export default Header
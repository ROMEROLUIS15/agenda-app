import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    console.log(isAuthenticated, user)
    

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-white">
            <Link to={isAuthenticated ? "/tasks" : "/"}>AGENDA APP</Link>
        </h1>
        <ul className="flex gap-x-2">
            {isAuthenticated ? (
                <>
                <li className='text-white px-4 uppercase'>
                    Welcome {user.username}
                </li>
                <li className='text-black font-semibold'>
                    <Link to='/add-task' className='bg-white px-4 py-1 rounded-sm'>Add</Link>
                </li>
                <li className='text-white font-semibold'>
                    <Link to="/" className='bg-red-600 px-4 py-1 rounded-sm' onClick={() => {
                        logout()
                    }}>Logout</Link>
                </li>
                {/* <li>
                    <Link to="/" onClick={() => logout()}>
                        Logout
                    </Link>
                </li> */}
                </>
            ) : (
                <>
                <li className='text-white font-semibold'>
                    <Link to='/login' className='bg-red-700 hover:bg-red-600 px-4 py-1 rounded-sm'>Login</Link>
                </li>
                <li className='text-white font-semibold'>
                    <Link to='/register' className='bg-red-700 hover:bg-red-600 px-4 py-1 rounded-sm'>Register</Link>
                </li>
                </>
                
            )}
        </ul>
    </nav>
  )
}

export default Navbar

import { Routes, Route } from 'react-router-dom'

const Login = () => (
    <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="text-gray-600">Login form will be implemented here.</p>
    </div>
)

const Register = () => (
    <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <p className="text-gray-600">Registration form will be implemented here.</p>
    </div>
)

const Auth = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default Auth

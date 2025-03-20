import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { MdEmail, MdLock } from "react-icons/md"; // Importa los iconos que se usaron en SignUp

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Intentar iniciar sesión con las credenciales
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-view"); // Redirigir a la vista de admin si el login es exitoso
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Admin Login</h2>

        {/* Formulario de inicio de sesión */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
            <form className="space-y-4" onSubmit={handleLogin}>
              {/* Campo de Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdEmail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Campo de Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Botón de Login */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:ring-offset-2"
              >
                Login
              </button>
            </form>

            {/* Mostrar error si las credenciales no son válidas */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;

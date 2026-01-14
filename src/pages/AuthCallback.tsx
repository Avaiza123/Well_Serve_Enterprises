import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) return;

    const authenticate = async () => {
      const res = await fetch(
        "http://localhost:3000/api/auth/authenticate", // ✅ FIXED
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }), // ✅ ONLY token
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("Auth failed:", data);
        return;
      }

      if (data.session) {
        localStorage.setItem("session", JSON.stringify(data.session));
        navigate("/checkout");
      }
    };

    authenticate();
  }, [navigate]);

  return <p>🔐 Logging you in...</p>;
};

export default AuthCallback;

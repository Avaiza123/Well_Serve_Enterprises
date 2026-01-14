import { useState } from "react";

type ApiResponse = {
  error?: string;
  [key: string]: unknown;
};

const CheckoutLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const backend = (import.meta.env.VITE_BACKEND_URL as string) || (import.meta.env.REACT_APP_BACKEND_URL as string) || "http://localhost:3000";

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    setError(null);

    if (!email) return setError("Email is required");
    if (!isValidEmail(email)) return setError("Please enter a valid email address");

    setLoading(true);

    try {
      const res = await fetch(`${backend}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data: ApiResponse = {};
      try {
        data = await res.json();
      } catch {
        data = { error: "Invalid server response" };
      }

      if (!res.ok) {
        const errorMessage = data.error || "Failed to send login link";
        throw new Error(errorMessage);
      }

      setSent(true);
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Login to Continue Checkout</h2>

        {!sent ? (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="block w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-200 outline-none mb-3"
            />

            {error && <p className="text-center text-sm text-red-600 mb-3">{error}</p>}

            <button
              onClick={handleLogin}
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
            >
              {loading ? "Sending link..." : "Send Magic Link"}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">We'll send you a secure login link to your email.</p>
          </>
        ) : (
          <div className="text-center text-green-600 text-lg font-medium">📧 Check your email for the login link</div>
        )}
      </div>
    </div>
  );
};

export default CheckoutLogin;

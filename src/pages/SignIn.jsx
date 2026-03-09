import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    return (
        <div className="cb-reveal flex min-h-[70vh] flex-col items-center justify-center px-4 py-12" style={{ '--reveal-delay': '40ms' }}>
            <div className="cb-hover-rise w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h1 className="mb-3 text-center text-3xl font-bold">Sign in to Coinbase</h1>
                <p className="mb-8 text-center text-sm text-gray-500">Enter your email to continue securely.</p>

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div>
                        <label className="mb-2 block text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff]"
                            placeholder="you@example.com"
                        />
                        {submitted && !isEmailValid ? (
                            <p className="mt-2 text-sm text-red-500">Please enter a valid email address.</p>
                        ) : null}
                    </div>

                    <button type="submit" className="w-full rounded-full bg-[#0052ff] py-3 font-semibold text-white transition hover:bg-[#0046d5]">
                        Continue
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-between text-sm">
                    <Link to="/signup" className="font-semibold text-[#0052ff] hover:underline">
                        Don't have an account?
                    </Link>
                    <a href="#" className="font-semibold text-[#0052ff] hover:underline">
                        Forgot password
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

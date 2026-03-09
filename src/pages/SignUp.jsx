import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        acceptedTerms: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormValues((previous) => ({
            ...previous,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const hasValidEmail = /\S+@\S+\.\S+/.test(formValues.email);
    const hasValidPassword = formValues.password.length >= 8;
    const hasRequiredFields = formValues.firstName && formValues.lastName && hasValidEmail && hasValidPassword;
    const isValid = hasRequiredFields && formValues.acceptedTerms;

    return (
        <div className="cb-reveal flex min-h-[70vh] flex-col items-center justify-center px-4 py-12" style={{ '--reveal-delay': '40ms' }}>
            <div className="cb-hover-rise w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h1 className="mb-3 text-center text-3xl font-bold">Create your account</h1>
                <p className="mb-8 text-center text-sm text-gray-500">Join Coinbase and start your crypto journey today.</p>

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-semibold">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff]"
                                placeholder="First name"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-semibold">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff]"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff]"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff]"
                            placeholder="At least 8 characters"
                        />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            name="acceptedTerms"
                            checked={formValues.acceptedTerms}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
                        />
                        I agree to the User Agreement and Privacy Policy.
                    </label>

                    {submitted && !isValid ? (
                        <p className="text-sm text-red-500">Please complete all fields correctly and accept the terms.</p>
                    ) : null}

                    <button type="submit" className="mt-2 w-full rounded-full bg-[#0052ff] py-3 font-semibold text-white transition hover:bg-[#0046d5]">
                        Create account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <Link to="/signin" className="font-semibold text-[#0052ff] hover:underline">
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

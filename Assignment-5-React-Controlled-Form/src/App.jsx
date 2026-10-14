
import { useState } from "react";
import "./App.css";

function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        gender: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });

        setSubmitted(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            form.name.trim() &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
            /^[6-9]\d{9}$/.test(form.phone) &&
            form.gender
        ) {
            setSubmitted(true);
        } else {
            alert("Please enter valid details in all fields.");
        }
    }

    return (
        <div className="container">
            <div className="form-box">
                <h1>Registration Form</h1>
                <p className="subtitle">
                    Enter your details below
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                    />

                    <label>Gender</label>
                    <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                    <button type="submit">
                        Submit Details
                    </button>
                </form>

                <div className="output">
                    <h2>Live Preview</h2>

                    <p>
                        <strong>Name:</strong>{" "}
                        {form.name || "Not entered"}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {form.email || "Not entered"}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {form.phone || "Not entered"}
                    </p>

                    <p>
                        <strong>Gender:</strong>{" "}
                        {form.gender || "Not selected"}
                    </p>

                    {submitted && (
                        <p className="success">
                            Registration submitted successfully!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;

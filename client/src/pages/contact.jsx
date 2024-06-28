/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        position: "",
        company: "",
        businessArena: "",
        employees: "",
        streetNr: "",
        additionalInfo: "",
        zipCode: "",
        place: "",
        country: "",
        code: "",
        phoneNumber: "",
        email: "",
        accept: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.status == 201) navigate('/users')
        else alert("Form submission failed.")
    };

    return (
        <div>
                <div>
            <div className="container text-cente h-100">
                <div className="row">
                    <div className="col h-100">
                        <form onSubmit={handleSubmit}>
                            <h2>General Information</h2>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="position"
                                placeholder="Position"
                                value={formData.position}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="businessArena"
                                placeholder="Business Arena"
                                value={formData.businessArena}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="employees"
                                placeholder="Employees"
                                value={formData.employees}
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                    <div className="col bg-black text-white ">
                        <h2>Contact Details</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="streetNr"
                                placeholder="Street . Nr"
                                value={formData.streetNr}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="additionalInfo"
                                placeholder="Additional Information"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Zip Code"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="place"
                                placeholder="Place"
                                value={formData.place}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="code"
                                placeholder="Code"
                                value={formData.code}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-white"
                            />
                            <input
                                type="checkbox"
                                name="accept"
                                id="accept"
                                checked={formData.accept}
                                onChange={handleChange}

                            />
                            <label htmlFor="accept">
                                I do accept the <a href="">Terms and Conditions </a> of your site.
                            </label>
                            <button type="submit">Register Badge</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactForm;

"use client";

import { useState } from "react";
import "./Form.css";

interface Form {
    name: string;
    email: string;
    message: string;
}

const Form = () => {
    const [form, setFom] = useState<Form>({
        name: "",
        email: "",
        message: "",
    });
    const [formArray, setFormArray] = useState<Form[]>([]);
    const [formSucces, setFormSucces] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFom({ ...form, [name]: value });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (form) {
            const newArray = [...formArray, form];
            setFormArray(newArray);
            console.log("array data", newArray);
            setFom({
                name: "",
                email: "",
                message: "",
            });
            setFormSucces(true);
        }
    };
    return (
        <div className="form_container">
            <h1>Formulaire react</h1>
            {formSucces ? (
                <h2>le formulaire a étè envoyé avec succes</h2>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="name">Message</label>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <button type="submit">Envoyé</button>
                </form>
            )}
        </div>
    );
};

export default Form;

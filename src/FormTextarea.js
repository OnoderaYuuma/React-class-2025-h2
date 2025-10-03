import { useState } from 'react';

export default function FormTextarea() {
    const [form, setForm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>コメント：</label>
            <div>
                <textarea name="comment" onChange={handleChange}></textarea>
            </div>
            <input type="submit" />
        </form>
    );
}

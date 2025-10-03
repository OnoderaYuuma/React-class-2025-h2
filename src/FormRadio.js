import { useState } from 'react';

export default function FormRadio() {
    const [form, setForm] = useState({
        gender: '男性',
    });

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
            <label>性別：</label>
            <div>
                <label>
                    <input type="radio" name="gender" value="男性" onChange={handleChange} checked={form.gender === '男性'} /> 男性
                </label>
                <label>
                    <input type="radio" name="gender" value="女性" onChange={handleChange} checked={form.gender === '女性'} /> 女性
                </label>
                <label>
                    <input type="radio" name="gender" value="その他" onChange={handleChange} checked={form.gender === 'その他'} /> その他
                </label>
            </div>
            <input type="submit" />
        </form>
    );
}

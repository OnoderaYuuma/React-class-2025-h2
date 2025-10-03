import { useState } from 'react';

export default function FormSelect() {
    const [form, setForm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const handleChange = (e) => {
        // selectがmultipleだった場合は選択が変更された時点で選択されている要素のvalueを取得する必要がある
        // 選択しを保存する配列を用意する
        let data = [];

        // selectの中のすべてのoptionを見て、その中で選択されているもののvalueを取得する
        let opts = e.target.options;
        for (let opt of opts) {
            // 取り出したoptionが選択されているかどうかをチェックする
            if (opt.selected) {
                data.push(opt.value);
            }
        }

        setForm({
            ...form,
            [e.target.name]: data,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>職業：</label>
            <div>
                <select name="job" id="" onChange={handleChange} multiple>
                    <option value="会社員">会社員</option>
                    <option value="デザイナー">デザイナー</option>
                    <option value="公務員">公務員</option>
                    <option value="学生">学生</option>
                </select>
            </div>
            <input type="submit" />
        </form>
    );
}

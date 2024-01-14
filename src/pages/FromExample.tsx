import React, { useState } from 'react';

const FromExample = () => {
    const [user, setUser] = useState({ name: "", email: "" });

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [inputName]: value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" name='name' id='name' className='border border-2' /> */}
                <input onChange={handleChange} type="text" name='name' id='name' className='border-2' />
                {/* <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" name='email' id='email' className='border border-2' /> */}
                <input onChange={handleChange} type="text" name='email' id='email' className=' border-2' />
                <button type="submit">send</button>
            </form>
        </div>
    );
};

export default FromExample;
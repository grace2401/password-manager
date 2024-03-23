import React, { useEffect, useRef, useState } from 'react';

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, [])

  const showPassword = () => {
    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/hidden.png";
    }
  }

  const savePassword = () => {
    console.log(form);
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

      <div className="mx-auto mycontainer">

        <h1 className="text-2xl font-bold text-center logo">
          <span className='text-green-500'> &lt;</span>
          Forti<span className='text-green-500 '>Key/&gt;</span>
        </h1>
        <p className='text-lg text-center text-green-900'>Your own password manager</p>
        <div className='flex flex-col items-center gap-8 p-4 text-black'>
          <input name="site" value={form.site} onChange={handleChange} placeholder="Enter website URL" className='w-full p-4 py-1 border border-green-500 rounded-full' type='text' id="" />
          <div className="flex justify-between w-full gap-8">
            <input name="username" value={form.username} onChange={handleChange} placeholder='Enter Username' className='w-full p-4 py-1 border border-green-500 rounded-full' type="text" />
            <div className="relative">
              <input name="password" value={form.password} onChange={handleChange} placeholder='Enter Password' className='w-full p-4 py-1 border border-green-500 rounded-full' type="text" />
              <span className="absolute right-[3px] top-[3px] cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className='flex items-center justify-center gap-2 px-8 py-2 bg-green-400 border border-green-900 rounded-full hover:bg-green-300 w-fit'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover">
            </lord-icon>
            Add Password</button>
        </div>
        <div className="passwords">
          <h2 className='py-4 text-2xl font-bold'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to Show</div>}
          {passwordArray.length != 0 && <table className="w-full overflow-hidden rounded-md table-auto">
            <thead  className='text-white bg-green-800'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>UserName</th>
                <th className='py-2'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index)=>{
                return <tr key={index}>
                  <td className='w-32 py-2 text-center border border-white'><a href={item.site} target='_blank'>{item.site}</a></td>
                  <td className='w-32 py-2 text-center border border-white'>{item.username}</td>
                  <td className='w-32 py-2 text-center border border-white'>{item.password}</td>
                </tr>;
              })}
            </tbody>
          </table>
        }
        </div>

      </div>
    </div>
  )
}

export default Manager

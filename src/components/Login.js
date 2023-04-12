import { type } from '@testing-library/user-event/dist/type';
import {useRef, useState, useEffect} from 'react';
import{} from 'react-bootstrap'
const Login=()=>{
    const[email,setEmail] = useState();
    const [pass, setPass]= useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }


    return(
        <div className='mb-3 row'>
            <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
            <label for='email'>Email addresss</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder='example@gmail.com'/>
            <label for='password'>password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder='********'/>
            <button>Sigin In</button>
        </form>
        </div>
    )
}
export default Login;
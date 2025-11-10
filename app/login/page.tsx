"use client"
import {ReactElement, useRef,useEffect,useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function Login(){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        if(username === '' || password === ''){
            alert('Please fill in all fields');
            return;
        }
        else if(username === 'admin' && password === 'admin@123'){
            router.push('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center">
                <div className='flex flex-col gap-8 border border-gray-300 p-6 rounded-lg shadow-lg items-center justify-center h-[60vh] w-[30vw] my-[10vh]'>
                    <h1 className='h-[5vh] text-[5vh]'>Login</h1>
                    <form onSubmit={handleLogin} className='flex flex-col gap-y-6 p-4 items-center justify-center'>    
                        <input  value={username} onChange={(name)=>setUsername(name.target.value)} type="text" placeholder="Username" className='p-3 text-sm rounded-md border border-gray-400 w-[20vw]' />
                        <input  value={password} onChange={(pass)=>setPassword(pass.target.value)} type="password" placeholder="Password" className='p-3 text-sm rounded-md border border-gray-400 w-[20vw]' />
                        <button className='p-3 text-sm rounded-md border-none bg-blue-600 text-white cursor-pointer w-[20vw]'>Login</button>
                    </form>
                    <p className="text-[1.8vh] text-gray-700">Don't have an account? <Link href="../signup" className="text-blue-600">Sign Up</Link></p>
                </div>
        </div>
        
        </>
    );  
}

export default Login;
import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import { login } from '../services/authService';
import { parseJwt } from './Login'


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState<string | null>(null); // Change the error state type to string | null

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            const token = response.access_token;
            const decodedToken = parseJwt(token);
            const userRole = decodedToken.user_type;
            sessionStorage.setItem('user', JSON.stringify({ email, role: userRole }));
            sessionStorage.setItem('token', token);
            toast.success('Logged in successfully', {
                onClose: () => navigate('/'),
                autoClose: 1000,
            });
        } catch (error) {
            // setError('Incorrect email or password');
            toast.error('Incorrect email or password');
        }
    };



    return (
        <>
            <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
            >
                Sign In
            </Typography>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
            >
                <Card
                    className="mx-auto w-full max-w-[24rem]"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <CardBody className="flex flex-col gap-4" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                        <Typography variant="h4" color="blue-gray" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            Sign In
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                            placeholder=""
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                        >
                            Enter your email and password to Sign In.
                        </Typography>
                        <Typography className="-mb-2" variant="h6" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            Your Email
                        </Typography>
                        <Input label="Email" size="lg" crossOrigin="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Typography className="-mb-2" variant="h6" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            Your Password
                        </Typography>
                        <Input label="Password" size="lg" type='password' crossOrigin="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </CardBody>
                    <CardFooter className="pt-0" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                        <Button variant="gradient" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleLogin(e)} fullWidth placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            Don&apos;t have an account?
                            <Link to="/register" onClick={handleOpen}>Sign Up</Link>
                        </Typography>
                    </CardFooter>
                    <ToastContainer position="top-center" />
                </Card>
            </Dialog>
        </>

    );
};

export default Login;

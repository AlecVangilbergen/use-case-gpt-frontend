import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Home: React.FC = () => {
    // Check if user is logged in and get user role from sessionStorage
    const user = sessionStorage.getItem('user');
    const role = user ? JSON.parse(user).role : null;
    

    // Function to determine the link based on user role
    const getStartedLink = () => {
        if (role === 'teacher') {
            return '/assignment';
        } else if (role === 'student') {
            return '/assignment';
        } else {
            return '/login';
        }
    };
    return (
        <main className="min-h-screen bg-neutral-100 dark:bg-dark-neutral">
            <div className="container mx-auto">
                {/* Hero section */}
                {role === null && (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                    <div className="col-span-full">
                        <div className="hero bg-base rounded-lg p-8">
                            <div className="hero-content text-center">
                                <div className="max-w-7xl mx-auto mt-10">
                                    <h1 className="text-6xl font-bold text-light-text dark:text-dark-text">Use-Case-GPT Homepage.</h1>
                                    <Link to={getStartedLink()} className="btn bg-light-btn text-dark-text dark:bg-dark-btn dark:text-light-text dark:btn-primary mt-8">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )}  
                <ToastContainer position="top-center" />

            </div>
        </main>
    );
};

export default Home;
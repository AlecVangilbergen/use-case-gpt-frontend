import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from "@material-tailwind/react";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-dark-neutral">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            A chat completion tool that is tailored to your needs.
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            Use-Case-GPT is a powerful tool that helps you generate chat responses in seconds.
          </p>
          <Button color="white" className="text-indigo-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Get Started
          </Button>
        </div>
      </div>

      {/* Feature Section */}
      <section className="py-20 bg-white dark:bg-dark-neutral">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 dark:text-dark-text">
            Why Use-Case-GPT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-dark-neutral">
              <h3 className="text-xl text-black font-semibold mb-4 dark:text-dark-text">Customizable Templates</h3>
              <p className="text-black dark:text-dark-text">
                Personalize your GPT chats with custom templates and formatting options.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-dark-neutral">
              <h3 className="text-xl text-black font-semibold mb-4 dark:text-dark-text">Seamless Integration</h3>
              <p className="text-black dark:text-dark-text">
                Integrates smoothly with any development environment.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-dark-neutral">
              <h3 className="text-xl text-black font-semibold mb-4 dark:text-dark-text">User-Friendly Interface</h3>
              <p className="text-black dark:text-dark-text">
                Easy-to-use interface to make your work faster and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>© 2024 Use-Case-GPT. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;

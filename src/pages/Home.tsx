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
          <Button color="white" className="text-indigo-600" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
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
    <div className="space-y-24">
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-left">
        <div>
          <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Personalized GPT at your disposal</h3>
          <p className="text-black dark:text-dark-text">
            Use-Case-GPT is an easy-to-use tool that allows your ChatGPT chats to be tailored to your needs. Enter your own system prompts and upload your own files and let Use-Case-GPT do the rest.
          </p>
        </div>
        <img src="src\imgs\1692605748469.jpeg" alt="Customizable Templates" className="w-1/3 ml-4 rounded" />
      </div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-right">
      <img src="src\imgs\github-cover.jpg" alt="Seamless Integration" className="w-1/3 ml-4 rounded" />
        <div>
          <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Easy Installation</h3>
          <p className="text-black dark:text-dark-text">
            Easily installed locally with minimal setup required. 
          </p>
          <p className="text-black dark:text-dark-text" >
          The process takes no longer than 5 minutes and you're ready to go.
          </p>
          <p className="text-black dark:text-dark-text">
          The installation guide is available on the <a className="link link-primary" href ="https://github.com/AlecVangilbergen/use-case-gpt-frontend">GitHub repository</a>.
          </p>
        </div>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-left">
        <div>
          <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">User-Friendly Interface</h3>
          <p className="text-black dark:text-dark-text">
            Easy-to-use interface to make your work faster and more efficient.
          </p>
        </div>
        <img src="src\imgs\663d5ae73b4f55bf91555fdd_388_DesignBlogHeader_2400x1260.jpg" alt="User-Friendly Interface" className="w-1/3 ml-4 rounded" />
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

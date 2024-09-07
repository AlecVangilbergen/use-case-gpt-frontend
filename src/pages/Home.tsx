import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from "@material-tailwind/react";
import InterfacePic from '../imgs/663d5ae73b4f55bf91555fdd_388_DesignBlogHeader_2400x1260.jpg';
import CustomizablePic from '../imgs/1692605748469.jpeg';
import InstallationPic from '../imgs/github-cover.jpg';
import UserGuidePic1 from '../imgs/Register.png'; // Add your user guide images
import UserGuidePic2 from '../imgs/SignIn.png';
import UserGuidePic3 from '../imgs/Upload1.png';
import UserGuidePic4 from '../imgs/Upload2.png';
import UserGuidePic5 from '../imgs/Upload3.png';
import UserGuidePic6 from '../imgs/Chat.png';
import { useRef } from 'react';

const Home: React.FC = () => {
  const userGuideRef = useRef<HTMLDivElement>(null);

  const scrollToUserGuide = () => {
    if (userGuideRef.current) {
      userGuideRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
          <Button color="white" className="text-indigo-600" placeholder="" onClick={scrollToUserGuide} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
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
              <img src={CustomizablePic} alt="Customizable Templates" className="w-1/3 ml-4 rounded" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-right">
              <img src={InstallationPic} alt="Seamless Integration" className="w-1/3 ml-4 rounded" />
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Easy Installation</h3>
                <p className="text-black dark:text-dark-text">
                  Easily installed locally with minimal setup required.
                </p>
                <p className="text-black dark:text-dark-text" >
                  The process takes no longer than 5 minutes and you're ready to go.
                </p>
                <p className="text-black dark:text-dark-text">
                  The installation guide is available on the <a className="link link-primary" href="https://github.com/AlecVangilbergen/use-case-gpt-frontend">GitHub repository</a>.
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
              <img src={InterfacePic} alt="User-Friendly Interface" className="w-1/3 ml-4 rounded" />
            </div>
          </div>
        </div>
      </section>
      {/* User Guide Section */}
      <section ref={userGuideRef} className="py-20 bg-white dark:bg-dark-neutral">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 dark:text-dark-text">
            How to Use Use-Case-GPT
          </h2>
          <div className="space-y-24">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-left">
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Step 1: Making an account</h3>
                <p className="text-black dark:text-dark-text">
                  Register for an account by clicking sign in and choosing the sign up option. Here you can enter the custom prompt you want the GPT to use.

                </p>
              </div>
              <img src={UserGuidePic1} alt="Installation Guide" className="w-1/3 ml-4 rounded" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-right">
              <img src={UserGuidePic2} alt="Usage Guide" className="w-1/3 ml-4 rounded" />
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Step 2: Signing in</h3>
                <p className="text-black dark:text-dark-text">
                  After that, done! You can sign in to Use-Case-GPT!
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-right">
              <img src={UserGuidePic3} alt="Usage Guide" className="w-1/3 ml-4 rounded" />
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Step 3.1: Getting those documents in there for the RAG</h3>
                <p className="text-black dark:text-dark-text">
                  RAG stands for "Retrieval Augmented Generation". It's what the GPT uses to get more info out of your documents, but before that you need to upload them.
                </p>
                <p className="text-black dark:text-dark-text">
                  Just navigate to the upload page using the 'Documents' section in the navigation                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-left">
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Step 3.2: Getting those documents in there for the RAG</h3>
                <p className="text-black dark:text-dark-text">
                  Press the 'Choose file' button and your machine will allow you to choose a document, but be vigilant! The system only works with the supported files (PDF, Dockx and txt) so keep that in mind when uploading the files!                </p>
              </div>
              <img src={UserGuidePic5} alt="Usage Guide" className="w-1/3 ml-4 rounded" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-right">
              <img src={UserGuidePic4} alt="Usage Guide" className="w-1/3 ml-4 rounded" />
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Step 3.3: Getting those documents in there for the RAG</h3>
                <p className="text-black dark:text-dark-text">
                  Once you have uploaded the file, the window will reload and you will see the document in the list of documents.
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg dark:bg-dark-neutral flex items-center justify-between text-right">
              <img src={UserGuidePic6} alt="Usage Guide" className="w-1/3 ml-4 rounded" />
              <div>
                <h3 className="text-4xl text-black font-semibold mb-4 dark:text-dark-text">Step 4: Using the main feature!</h3>
                <p className="text-black dark:text-dark-text">
                  After you have successfully uploaded the documents, you can now use the chat feature to generate responses based on the documents you uploaded.
                </p>
                <p className="text-black dark:text-dark-text">
                  All you have to do is navigate to the chat by clicking it in the navigation at the top of the page, once there you can start having Personalized chats with the knowledge of the documents you uploaded!
                </p>
              </div>
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

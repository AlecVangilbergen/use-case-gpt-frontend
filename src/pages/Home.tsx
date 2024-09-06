import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Home: React.FC = () => {
  // Check if user is logged in and get user role from sessionStorage
  


  // Function to determine the link based on user role
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-dark-neutral">
      <div className="container mx-auto">
        {/* Hero section */}
        
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            <div className="col-span-full">
              <div className="hero bg-base rounded-lg p-8">
                <div className="hero-content text-center">
                  <div className="max-w-7xl mx-auto mt-10">
                    <h1 className="text-6xl font-bold text-light-text dark:text-dark-text">Use-Case-GPT Homepage.</h1>
                    <p className="text-3xl text-gray-700 dark:text-gray-300 mt-5">Personalise your GPT chats with Use-Case-GPT</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <ToastContainer position="top-center" />

      </div>
      <section className="py-20">
      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <h1 className='flex justify-center items-center text-5xl font-bold text-light-text dark:text-dark-text'> Explore some of its features</h1>
        <p className="flex justify-center items-center py-6 text-3xl text-gray-700 dark:text-gray-300">Get Use-Case-GPT and start personalising your GPT chats!</p>
        </div>
        <div className="container mx-auto px-6">
          <Carousel
            className="rounded-xl"
            placeholder={null}
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
          >
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    placeholder={null}
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    placeholder={null}
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button size="lg" color="white" placeholder={null} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text" placeholder={null} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    placeholder={null}
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    placeholder={null}
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white" placeholder={null} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text" placeholder={null} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    placeholder={null}
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                    placeholder={null}
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white" placeholder={null} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text" placeholder={null} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <ToastContainer position="top-center" />


      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <p>Brand Inc.<br />Providing reliable services since 2020</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.56v15.07c0 2.45-1.75 4.37-3.92 4.37H3.92C1.75 24 0 22.07 0 19.63V4.56C0 2.11 1.75.19 3.92.19h16.15C22.25.19 24 2.11 24 4.56zm-13.64 5.2h3.27V4.47h2.77v5.29h2.89l.37-2.84h-3.26V4.47h-4.94v2.84h-2.9v2.45zm7.56 9.72V14.8h-2.77v4.68H8.67V14.8H6.91v4.68H3.92v-7.1h4.95v2.84H9v-2.84h2.77v2.84h.4v-2.84h4.94v2.84h2.89v-2.84h2.77v7.1h-2.89v-2.84h-2.77v2.84h-4.95zm-10.31-2.45H3.92v2.84h4.95v-2.84zm0-4.68H3.92v2.84h4.95V7.35z" /></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M18.64 8.1c-.45 0-.87.03-1.3.1 1.23-.75 2.08-1.99 2.08-3.44 0-1.52-1.23-2.76-2.76-2.76-1.24 0-2.3.83-2.68 2-.52-.18-1.08-.27-1.67-.27-3.36 0-6.07 2.69-6.07 6.07 0 .47.06.93.16 1.37-2.33-.12-4.39-1.24-5.77-2.92-.24.4-.39.88-.39 1.39 0 .95.49 1.79 1.23 2.29-.45-.01-.88-.14-1.25-.34v.03c0 1.33.95 2.44 2.2 2.69-.23.06-.47.09-.72.09-.18 0-.34-.01-.52-.04.34 1.06 1.33 1.83 2.5 1.86-1.14.89-2.57 1.42-4.12 1.42-.27 0-.53-.02-.79-.05 1.47.94 3.21 1.48 5.08 1.48 6.1 0 9.45-5.06 9.45-9.45 0-.15 0-.3-.01-.44.65-.46 1.21-1.02 1.66-1.67-.59.26-1.23.43-1.89.5.68-.4 1.2-1.03 1.45-1.79z" /></svg></a>
          </div>
        </div>
      </footer>
    </main>

  );
};

export default Home;
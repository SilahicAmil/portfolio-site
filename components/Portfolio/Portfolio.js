import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <section className="font-mono   h-[100vh]  md:h-[100vh] sm:h-[100vh] items-center">
        <div className=" mb-8 px-4 s:px-5 md:px-10 lg:px-[60px] h-screen">
          <div className="py-8">
            <h2 className="mt-4 text-4xl">Portfolio</h2>
          </div>
          <div className="grid  md:grid-cols-3  justify-center gap-5">
            <div className="card  w-96 shadow-xl ">
              <figure>
                <Image src="" alt="Shoes" />
              </figure>
              <div className="card-body shadow-xl ">
                <h2 className="card-title text-3xl">Takeya Ticket</h2>
                <p className="text-md">
                  {/* Add Technologies Here */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  vitae itaque placeat cupiditate numquam non tempore ipsum
                  magni suscipit eius eaque error corrupti maxime sit nesciunt
                  facere voluptatibus, quis architecto?
                </p>
                <p className="text-sm">
                  Technologies: NextJS, MongoDB, NextAuth, DaisyUI, TailwindCSS
                </p>
                <div className="card-actions justify-between mt-2">
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Site
                  </button>
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Code
                  </button>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-xl">
              <figure>
                <Image src="" alt="Shoes" />
              </figure>
              <div className="card-body shadow-xl ">
                <h2 className="card-title text-3xl">Takeya Ticket</h2>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  vitae itaque placeat cupiditate numquam non tempore ipsum
                  magni suscipit eius eaque error corrupti maxime sit nesciunt
                  facere voluptatibus, quis architecto?
                </p>
                <p className="text-sm">Technologies:</p>
                <div className="card-actions justify-between mt-2">
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Site
                  </button>
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Code
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 shadow-xl ">
              <figure>
                <Image src="" alt="Shoes" />
              </figure>
              <div className="card-body shadow-xl">
                <h2 className="card-title text-3xl">Takeya Ticket</h2>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  vitae itaque placeat cupiditate numquam non tempore ipsum
                  magni suscipit eius eaque error corrupti maxime sit nesciunt
                  facere voluptatibus, quis architecto?
                </p>
                <p className="text-sm">Technologies:</p>
                <div className="card-actions justify-between mt-2">
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Site
                  </button>
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Code
                  </button>
                </div>
              </div>
            </div>
            <div className="card  w-96 shadow-xl">
              <figure>
                <Image src="" alt="Shoes" />
              </figure>
              <div className="card-body shadow-xl">
                <h2 className="card-title text-3xl">Takeya Ticket</h2>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  vitae itaque placeat cupiditate numquam non tempore ipsum
                  magni suscipit eius eaque error corrupti maxime sit nesciunt
                  facere voluptatibus, quis architecto?
                </p>
                <p className="text-sm">Technologies:</p>
                <div className="card-actions justify-between mt-2">
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Site
                  </button>
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

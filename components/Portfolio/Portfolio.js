import Code from "../../public/code.avif";
import Image from "next/image";
// photo from https://freelogocreator.com/
import Takeya from "../../public/Takeya.jpeg";

const Portfolio = () => {
  return (
    <>
      <section className="font-mono min-h-screen items-center ">
        <div className=" mb-8 px-4 s:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12">
            <h2 className="mt-4 text-4xl">Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2  justify-center gap-5">
            <div className="card   shadow-xl ">
              <figure>
                <Image src={Takeya} alt="takeya ticket photo" />
              </figure>
              <div className="card-body shadow-xl ">
                <h2 className="card-title text-3xl">Takeya Ticket</h2>
                <p className="text-md">
                  {/* Add Description Here */}
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
                    <a
                      href="https://nextjs-dashboard-three.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Site
                    </a>
                  </button>
                  <button className="btn bg-white text-black hover:bg-black hover:text-white">
                    <a
                      href="https://github.com/SilahicAmil/nextjs-dashboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card   shadow-xl">
              <figure>
                <Image src={Code} alt="code" height={400} />
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
            <div className="card  shadow-xl ">
              <figure>
                <Image src={Code} alt="code" height={400} />
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
            <div className="card  shadow-xl">
              <figure>
                <Image src={Code} alt="code" height={400} />
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

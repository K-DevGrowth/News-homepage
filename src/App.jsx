import { useState } from "react";
import { articles, navigations, cards } from "./data";
import Dialog from "./components/Dialog";

const images = [
  "./image-retro-pcs.jpg",
  "./image-top-laptops.jpg",
  "./image-gaming-growth.jpg",
];

const App = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <div
      className={`${
        isMobileMenu ? "bg-Grayish-blue" : "bg-white"
      } transition-all p-10 text-lg sm:bg-white relative h-dvh w-screen overflow-x-hidden scroll-smooth`}
    >
      <header>
        <nav className="flex justify-between">
          <a href="#">
            <img src="./logo.svg" alt="" className="cursor-pointer" />
          </a>
          <div className="hidden sm:flex">
            {navigations.map((item) => (
              <a
                href={item.href}
                key={item.id}
                className="px-4 hover:text-Soft-red transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="sm:hidden flex">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setIsMobileMenu(true)}
            >
              <span className="sr-only">Open menu</span>
              <img src="./icon-menu.svg" alt="" />
            </button>
          </div>
        </nav>
        <Dialog
          open={isMobileMenu}
          onClose={setIsMobileMenu}
          navigations={navigations}
        />
      </header>

      <main>
        <div className="grid sm:grid-cols-[2fr_1fr] gap-5 py-4 grid-cols-1 transition-all">
          <div>
            <img src="./image-web-3-desktop.jpg" alt="" />
            <div className="grid sm:grid-cols-2 grid-cols-1 mt-4">
              <div>
                <h1 className="font-bold text-5xl">
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div>
                <p className="text-Dark-grayish-blue">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button
                  type="button"
                  className="bg-Soft-red cursor-pointer transition-all hover:bg-Very-dark-blue hover:text-Off-white py-2 px-4 font-[600] mt-4"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="bg-Very-dark-blue p-8">
            <h2 className="font-bold text-Soft-orange text-3xl">New</h2>
            {articles.map((item, index) => (
              <article
                className={`${
                  index === 1 &&
                  "border-Grayish-blue border-t-[1.5px] border-b-[1.5px]"
                } py-5`}
                key={item.id}
              >
                <p className="font-bold text-Off-white hover:text-Soft-orange transition-all cursor-pointer">
                  {item.name}
                </p>
                <p className="text-Dark-grayish-blue">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 mt-8">
          {cards.map((item, index) => (
            <div className="flex gap-5" key={item.id}>
              <img className="max-w-full w-30" src={images[index]} alt="" />
              <div>
                <p className="text-2xl font-bold text-(--Soft-red)">
                  0{index + 1}
                </p>
                <p className="font-bold hover:text-(--Soft-red) cursor-pointer transition-all">
                  {item.name}
                </p>
                <p className="text-(--Dark-grayish-blue)">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

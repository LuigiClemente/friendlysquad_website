import { useState } from "react";
import TailwindModal from "./modals/PlayBookModal";

const Test = () => {
  const [openBook, setOpenBook] = useState(false);
  return (
    <div className="w-full h-full justify-center align-middle">
      <button
        onClick={() => {
          setOpenBook(true);
        }}
      >
        Test
      </button>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          setOpenBook(true);
        }}
      >
        Open regular modal
      </button>

      {/* {openBook && (
        <LanguageModal close={() => setOpenBook(false)} open={openBook} />
      )} */}
      <TailwindModal close={() => setOpenBook(false)} open={openBook} />
    </div>
  );
};

export default Test;

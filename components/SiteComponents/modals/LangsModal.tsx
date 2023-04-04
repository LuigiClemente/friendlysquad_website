import Close from "@/icons/Close";
import Link from "next/link";
import { useRouter } from "next/router";
import { LANGUAGES } from "../constant";
interface PageModalsProps {
  title?: string;
  content?: any;
  handleClose: () => void;
  open: boolean;
}

const LangsModal = ({ title, content, handleClose, open }: PageModalsProps) => {
  const router = useRouter();

  const { locales, locale: activeLocale, pathname, query, asPath } = router;
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto relative w-full h-full  inset-0 langModalZ outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl customDialog">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t">
                  <div></div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <Close />
                  </button>
                </div>

                <div className="flex items-center relative justify-start pr-6 pl-6 pb-6 rounded-b flex-wrap">
                  {LANGUAGES.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 font-sans font-semibold text-lg  text-gray-900"
                      style={{ cursor: "pointer" }}
                    >
                      <Link
                        href={{ pathname, query }}
                        as={asPath}
                        locale={item.locale}
                        onClick={() => handleClose()}
                      >
                        <span>{item.lan}</span>
                      </Link>
                    </div>
                  ))}
                  {/* <LocaleSwitcher /> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
};

export default LangsModal;

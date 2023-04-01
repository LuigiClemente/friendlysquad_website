import DialogContent from "@/DialogContent/DialogContent";
import Close from "@/icons/Close";
import {
  CONTACT_DATA,
  FOOTER_DATA_BOOKING_LIST,
  MODAL_DATA,
  NAVIGATION,
} from "../constant";
interface PageModalsProps {
  title?: string;
  content?: any;
  handleClose: () => void;
  open: boolean;
}

const BookingListModal = ({
  title,
  content,
  handleClose,
  open,
}: PageModalsProps) => {
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto relative w-full h-full  inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl md:max-w-3xl lg:max-w-full lg:mx-12 customDialog">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <Close />
                  </button>
                </div>

                {/*body*/}
                <div className="relative flex-auto text-left  pt-0 pb-0">
                  <DialogContent data={content} isBookingList={false} />
                </div>
                {/* CONTACT_DATA */}
                <div className="flex items-center relative justify-start pr-6 pl-6 rounded-b flex-wrap">
                  {FOOTER_DATA_BOOKING_LIST.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-1 font-sans font-thin text-sm  text-gray-500"
                    >
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center relative justify-start pr-6 pl-6 rounded-b flex-wrap">
                  {CONTACT_DATA.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 font-sans font-thin text-[9px]  text-gray-500"
                    >
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
};

export default BookingListModal;

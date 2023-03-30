import Button from "@/Buttons/Button";
import ButtonsOptionsUi from "@/CustomPopover/ButtonsOptionsUi";
import DialogContent from "@/DialogContent/DialogContent";
import DialogTitle from "@/GlobeTitle/GlobeTitle";
import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import React, { useState } from "react";
interface PageModalsProps {
  title?: string;
  content?: any;
}

const PageModal = ({ title, content }: PageModalsProps) => {
  const [buttonStyle, setButtonStyle] = useState({ display: "none" });

  const { isReadOnly }: any = useAppProvider();

  const [showModal, setShowModal] = React.useState(true);

  const { setOpenBookList }: any = useAppStateProvider();

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto relative w-full h-full  inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl customDialog">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-3 pb-0 rounded-t">
                  <DialogTitle title={title} />
                </div> */}
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="mt-3 text-center sm:mt-5 ">
                    <DialogContent data={content} isBookingList={false} />
                  </div>
                </div>
                {/*footer*/}
                <div
                  className="flex items-center relative justify-center p-3 rounded-b"
                  onMouseEnter={() => setButtonStyle({ display: "block" })}
                  onMouseLeave={() => setButtonStyle({ display: "none" })}
                >
                  {isReadOnly ? null : <ButtonsOptionsUi style={buttonStyle} />}
                  <Button
                    style={{ width: "100px" }}
                    onClick={() => {
                      setOpenBookList(true);
                      setShowModal(false);
                    }}
                    label={"Book"}
                  />
                  <Button
                    style={{ width: "100px" }}
                    onClick={() => setShowModal(false)}
                    label={"Play"}
                  />
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
export default PageModal;

import { createPortal } from "react-dom";
import { Image, ImageProps } from "antd-mobile";
import { useState } from "react";

export const ImageViewerCombine = (props: Omit<ImageProps, "onClick">) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Image
        fit="cover"
        alt="earrings"
        onClick={() => {
          setShow(true);
        }}
        {...props}
      />
      {show &&
        createPortal(
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 w-lvw h-lvh flex justify-center items-center bg-black/70"
          >
            <Image
              fit="cover"
              width={"80vw"}
              height={"auto"}
              alt="earrings"
              onClick={(e) => {
                e.stopPropagation();
              }}
              {...props}
            />
          </div>,
          document.body
        )}
    </>
  );
};

import React from "react";

export const FooterLink = (props: { linkText: string }) => {
  return (
    <>
      <span>&bull;</span>
      <a
        className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
        href="https://github.com/Chd3451/next-intro.git"
        rel="nofollow noreferrer"
        target="_blank"
      >
        {props.linkText}
        <picture className="flex flex-center rounded-full">
            <img
              width="40"
              height="28"
              loading="lazy"
              src="https://i.imgur.com/vUiouM8.png"
              alt="Github logo"
            />
          </picture>
      </a>
    </>
  );
};

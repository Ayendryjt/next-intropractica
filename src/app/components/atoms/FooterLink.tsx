import React from "react";

export const FooterLink = (props: { linkText: string }) => {
  return (
    <>     
      <a
        className="px-1 border-dashed  border-b-yellow-js hover:border-black"
        href="https://github.com/Ayendryjt/next-intropractica.git"
        rel="nofollow noreferrer"
        target="_blank"
      >
        {props.linkText}
        <picture className="flex flex-center rounded-full">
            <img
              width="88"
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

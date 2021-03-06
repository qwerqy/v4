/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface HTMLTagProps {
  tag: string;
  color: string;
  children: any;
}

const HTMLTag = (props: HTMLTagProps) => {
  const [openingTag, closingTag] = [
    "<" + props.tag + ">",
    "</" + props.tag + ">",
  ];

  return (
    <p>
      <span className={`text-[#e26b73]`}>{openingTag}</span>
      {props.children}
      <span className={`text-[#e26b73]`}>{closingTag}</span>
    </p>
  );
};

const Comment = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className="text-[#5E8648]">// {props.children}</p>
);

const Home: NextPage = () => {
  return (
    <div className="text-fillText">
      <Head>
        <title>home.tsx | aminroslanv4</title>
        <meta name="description" content="Amin Roslan Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <HTMLTag tag="h1" color="#e26b73">
          Hello World! 🚀
        </HTMLTag>
        <br />
        <HTMLTag tag="h2" color="#e26b73">
          I am Amin Roslan.
        </HTMLTag>
        <HTMLTag tag="h2" color="#e26b73">
          Software Engineer. 🛠
        </HTMLTag>
        <br />
        <HTMLTag tag="p" color="#e26b73">
          I have been programming for 4 years 💻. Adept in bringing forth
          expertise in design, installation, testing and maintenance of software
          systems.
        </HTMLTag>
        <br />
        <HTMLTag tag="p" color="#e26b73">
          In my free time, I play games 🎮, specifically singleplayer RPGs,
          factory management, survival and minecraft.
        </HTMLTag>
        <br />
        <HTMLTag tag="a" color="#e26b73">
          <a
            href="https://www.linkedin.com/in/aminroslan/"
            target={"_blank"}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </HTMLTag>
        <HTMLTag tag="a" color="#e26b73">
          <a
            href="https://github.com/qwerqy"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </HTMLTag>
        <HTMLTag tag="a" color="#e26b73">
          <a href="mailto:amnrsln@gmail.com" target={"_blank"} rel="noreferrer">
            Email
          </a>
        </HTMLTag>
        <br />
        <Comment>
          This project is receiving incremental updates. Feel free to come back
          to see what&apos;s new. Until then, check out my projects
        </Comment>
        <br />
        <Comment>
          <a
            href="https://github.com/qwerqy/discord-cognito-openid-wrapper"
            target={"_blank"}
            rel="noreferrer"
          >
            https://github.com/qwerqy/discord-cognito-openid-wrapper
          </a>
        </Comment>
        <br />
        <Comment>
          <a
            href="https://github.com/qwerqy/kountr"
            target={"_blank"}
            rel="noreferrer"
          >
            https://github.com/qwerqy/kountr
          </a>
        </Comment>
        <Comment>
          <a
            href="https://kountr.vercel.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            https://kountr.vercel.app/
          </a>
        </Comment>
        <br />
        <Comment>
          <a
            href="https://github.com/qwerqy/raven"
            target={"_blank"}
            rel="noreferrer"
          >
            https://github.com/qwerqy/raven
          </a>
        </Comment>
        <br />
        <Comment>TODO:</Comment>
        <Comment>- Work page</Comment>
        <Comment>- Blog page</Comment>
      </div>
    </div>
  );
};

export default Home;

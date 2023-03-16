import Image from "next/image";
import Link from "next/link";
import Problems1 from "@/assets/images/problems1.svg";
import Problems2 from "@/assets/images/problems2.svg";
import Problems3 from "@/assets/images/problems3.svg";
import Problems4 from "@/assets/images/problems4.svg";
import Problems1Icon from "@/assets/images/problems1_icon.svg";
import Problems2Icon from "@/assets/images/problems2_icon.svg";
import Problems3Icon from "@/assets/images/problems3_icon.svg";
import Problems4Icon from "@/assets/images/problems4_icon.svg";
import Github from "@/assets/images/github.svg";
import Medium from "@/assets/images/medium.svg";
import Twitter from "@/assets/images/twitter.svg";
import { useEffect, useState } from "react";

const links = [
  {
    href: "",
    name: "Home",
  },
  {
    href: "",
    name: "Maket",
  },
  {
    href: "",
    name: "History",
  },
  {
    href: "",
    name: "Me",
  },
];

// {links.map(item => (
//   <Link href={item.href} key={item.name}>
//     {item.name}
//   </Link>
// ))}

const problems = [
  {
    icon: <Problems1Icon />,
    name: "Rewards Immediately",
    des: "SPs realize the future unlocking rewards immediately (no need to wait 180 days)",
    picture: <Problems1 />,
  },
  {
    icon: <Problems2Icon />,
    name: "Aonymity of Transaction",
    des: "Anti-censorship of SPs ownership transfer via the anonymity of transaction",
    picture: <Problems2 />,
  },
  {
    icon: <Problems3Icon />,
    name: "Special IDs",
    des: "SPs realize the monetray value of special IDs or the IDs with hitorical reputation",
    picture: <Problems3 />,
  },
  {
    icon: <Problems4Icon />,
    name: "Better Utilization",
    des: "Better utilization of SP resources lightens the network burden caused by the over-use of ID numbers, effectively recycling the already existing ones; also provides the marketplace when later the network could charge a fee for node creation to increase revenue (an FIP required)",
    picture: <Problems4 />,
  },
];

const worksList = [
  {
    key: "1",
    text: "Sellers change the Owner Address to the SPex smart contract \n Set prices and place sell orders",
  },
  {
    key: "2",
    text: "Buyers request to purchase and send funds to SPex smart contract",
  },
  {
    key: "3",
    text: "Send payment to Seller after minus the transaction fees",
  },
  {
    key: "4",
    text: "SPex smart contract transfers the ownership to buyer",
  },
];

const markets = [
  {
    img: "/banner.png",
    logo: "/favicon.svg",
    title: "fill",
    twitter: "https://www.iplaysoft.com/free-images.html",
    website: "https://www.iplaysoft.com/free-images.html",
    des: "FILL is a liquidity pool, which will be implemented on FVM as a fully open-sourced, decentralized, algorithm-based lending platform",
  },
  {
    img: "/banner.png",
    logo: "/favicon.svg",
    title: "fill",
    twitter: "https://www.iplaysoft.com/free-images.html",
    website: "https://www.iplaysoft.com/free-images.html",
    des: "FILL is a liquidity pool, which will be implemented on FVM as a fully open-sourced, decentralized, algorithm-based lending platform",
  },
  {
    img: "/banner.png",
    logo: "/favicon.svg",
    title: "fill",
    twitter: "https://www.iplaysoft.com/free-images.html",
    website: "https://www.iplaysoft.com/free-images.html",
    des: "FILL is a liquidity pool, which will be implemented on FVM as a fully open-sourced, decentralized, algorithm-based lending platform",
  },
];

const Informations = [
  {
    icon: <Twitter />,
    link: "https://www.google.com/search?q=taliwind+css+icon&oq=taliwind+css+icon&aqs=chrome..69i57j0i13i512l2j0i13i30l7.7465j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: <Medium />,
    link: "https://www.google.com/search?q=taliwind+css+icon&oq=taliwind+css+icon&aqs=chrome..69i57j0i13i512l2j0i13i30l7.7465j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: <Github />,
    link: "https://www.google.com/search?q=taliwind+css+icon&oq=taliwind+css+icon&aqs=chrome..69i57j0i13i512l2j0i13i30l7.7465j0j7&sourceid=chrome&ie=UTF-8",
  },
];

export default function Home() {
  const [problem, setProblem] = useState(0);

  const problemScroll = () => {
    if (document.documentElement.clientWidth < 1024) {
      setProblem(-1);
      return;
    }

    // sticky top
    const top = 240;
    // problems title margin-top
    const mt = 80;

    const banner = document.getElementsByClassName("banner")[0];

    // sticky 暂停的位置
    const sticky_p = document.documentElement.scrollTop - banner.scrollHeight + (top - mt);

    const select = Math.floor(sticky_p / 400);
    setProblem(select < 0 ? 0 : select > 3 ? 3 : select);
  };

  useEffect(() => {
    window.addEventListener("scroll", problemScroll);

    return () => {
      window.removeEventListener("scroll", problemScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed bg-transparent top-0 backdrop-blur-lg w-full [font-family:GeneralSansVariable] z-50">
        <div className="container mx-auto flex justify-between py-6 px-2 items-center">
          <Link href="/">
            <Image width={104} height={38} src="/logo.svg" alt="SPex" />
          </Link>
          <button className="bg-gradient-to-r from-[#0077FE] to-[#3BF4BB] text-white h-11 w-40 rounded-full hidden md:block">
            Access App
          </button>
        </div>
      </header>
      <main className="[font-family:GeneralSansVariable]">
        <section className="banner bg-[url('/banner_bg.webp')] bg-cover pt-36 pb-20">
          <div className="px-2 container mx-auto flex items-center justify-between">
            <div className="flex flex-col flex-1">
              <p className="text-4xl md:text-4xl lg:text-6xl max-w-[509px] font-semibold">
                SPex is a decentralized storage provider exchange space on FVM
              </p>
              <button className="bg-gradient-to-r from-[#0077FE] to-[#3BF4BB] text-white h-11 w-40 rounded-full mt-10">
                Access App
              </button>
            </div>
            <div className="hidden md:block relative w-[454px] h-[462px] xl:w-[605px] xl:h-[616px]">
              <Image fill src="/banner.png" alt="SPex banner" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="lg:sticky lg:top-60">
            <div className="container mx-auto">
              <h1 className="text-5xl font-semibold text-center mb-14 mt-20">
                What Problems Will it Solv
              </h1>
              <div className="flex justify-center lg:items-center lg:justify-between">
                <div>
                  {problems.map((item, index) => (
                    <div key={item.name}>
                      <div
                        data-active={index === problem}
                        className="group p-[20px] rounded-[10px] data-[active=true]:border-[#d3f0fe] data-[active=true]:border data-[active=true]:bg-[#f6f8fc] text-[#57596c] data-[active=true]:text-[#111029] flex box-border max-w-[480px]"
                      >
                        <div className="relative w-[60px] h-[60px] mr-[30px] group-data-[active=true]:text-[#0177FD] text-[#62A0FF]">
                          {item.icon}
                          {/* <Image width={60} height={60} src={item.src} alt="icon" /> */}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-2xl ">{item.name}</div>
                          <p className="text-base mt-1">{item.des}</p>
                        </div>
                      </div>
                      <div className="lg:hidden block p-[40px]">{item.picture}</div>
                    </div>
                  ))}
                </div>
                <div className="">
                  <div
                    data-active={problem === 0}
                    className="w-[480px] h-[369px] hidden data-[active=true]:block"
                  >
                    <Problems1 />
                  </div>
                  <Problems2
                    data-active={problem === 1}
                    className="w-[496px] h-[460px] hidden data-[active=true]:block"
                  />
                  <Problems3
                    data-active={problem === 2}
                    className="w-[540px] h-[396px] hidden data-[active=true]:block"
                  />
                  <Problems4
                    data-active={problem === 3}
                    className="w-[496px] h-[437px] hidden data-[active=true]:block"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            {problems.map((item, index) => (
              <div className="h-[400px] hidden lg:block" key={item.name} />
            ))}
          </div>
        </section>

        <section className="w-full md:bg-[url('/work_bg.png')] bg-cover bg-center lg:bg-[url('/')]">
          <div className="container mx-auto lg:bg-[url('/work_bg.png')] lg:bg-cover lg:bg-center md:h-[716px] relative">
            <h1 className="text-5xl font-semibold text-center mb-14 mt-[136px]">How it Works</h1>
            <div className="relative md:h-[450px] w-[450px] mx-auto top-[26px] px-2">
              {/* <div className="text-center text-2xl font-semibold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[360px]">
                <picture className="w-[157px] h-[168px] block">
                  <source srcSet="/woman.webp" />
                  <img src="/woman.png" alt="SP-SELLER" />
                </picture>
                <span className="mt-4 inline-block">SP-SELLER</span>
              </div>
              <div className="text-center text-2xl font-semibold absolute right-0 top-1/2 -translate-y-1/2 translate-x-[360px]">
                <picture className="w-[127px] h-[146px] block">
                  <source srcSet="/men.webp" />
                  <img src="/men.png" alt="SP-BUYER" />
                </picture>
                <span className="mt-4 inline-block">SP-BUYER</span>
              </div> */}
              {worksList.map((item, index) => (
                <div
                  key={item.key}
                  className={`md:absolute ${
                    index % 2 === 1
                      ? "md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  } ${index < 2 ? "md:top-[48px]" : "md:bottom-[48px]"}`}
                >
                  <div className="bg-gradient-to-r from-[#0077FE] to-[#3BF4BB] md:from-[#FFF] md:to-[#FFF] rounded-[10px] md:max-w-[226px] max-w-full px-[18px] h-[146px] relative opacity-70 text-white md:text-black space-y-6 md:space-y-0 md:opacity-100">
                    <span className="text-xl font-semibold text-white bg-[#0077FE] w-5 h-5 rounded-full inline-block leading-5 text-center border-[5px] border-[#EFF3FC] box-content absolute top-0 -translate-y-1/2 left-[18px]">
                      {item.key}
                    </span>
                    <p className="w-full [height:inherit] flex items-center text-sm whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="justify-between absolute container left-1/2 -translate-x-1/2 top-[266px] xl:top-[226px] items-end hidden lg:flex">
              <div className="text-center font-semibold">
                <picture className="w-[120px] xl:w-[157px] block">
                  <source srcSet="/woman.webp" />
                  <img src="/woman.png" alt="SP-SELLER" />
                </picture>
                <span className="mt-4 xl:text-2xl text-lg inline-block">SP-SELLER</span>
              </div>
              <div className="text-center font-semibold">
                <picture className="w-[110px] xl:w-[127px] block">
                  <source srcSet="/men.webp" />
                  <img src="/men.png" alt="SP-BUYER" />
                </picture>
                <span className="mt-4 xl:text-2xl text-lg inline-block">SP-BUYER</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="container mx-auto pb-[178px] px-2">
            <h1 className="text-5xl font-semibold text-center mb-14 mt-20">
              Integrated Financial Servise Market
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
              {markets.map(market => (
                <div key={market.title} className="group relative w-[354px] h-[222px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="absolute top-0 w-[354px] h-[222px] [transform:rotateY(0deg)] group-hover:opacity-0 group-hover:[transform:rotateY(90deg)] rounded-[10px] shadow-md transition-all ease-linear duration-300"
                    src={market.img}
                    alt={market.title}
                  />
                  <div className="absolute top-0 w-[354px] h-[222px] backdrop-blur-3xl px-[30px] rounded-[10px] shadow-md group-hover:opacity-100 [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] opacity-0 delay-300	transition-all ease-linear duration-300">
                    <div className="flex justify-between pt-11">
                      <div className="flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="w-10 h-10" src={market.logo} alt={market.title} />
                        <span className="capitalize text-2xl font-semibold ml-2">
                          {market.title}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <a href={market.website} target={"_blank"} className="mr-3">
                          <Image width={24} height={24} src="/website.png" alt="website" />
                        </a>
                        <a href={market.twitter} target={"_blank"}>
                          <Image width={24} height={24} src="/twitter.png" alt="twitter" />
                        </a>
                      </div>
                    </div>
                    <p className="text-base mt-3">{market.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="[font-family:GeneralSansVariable] bg-[#d0e6ff]">
        <div className="container mx-auto px-2">
          <div className="flex justify-between pt-20 pb-24">
            <Image width={104} height={38} src="/logo.svg" alt="SPex" />
            <div className="space-x-6">
              {Informations.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="hover:text-[#545368] w-[30px] h-[30px] inline-block"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <hr className=" bg-[#B4C5DF] border-0 h-[1px]" />
          <span className="inline-block py-5">Copyright © 2023 SPex All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}

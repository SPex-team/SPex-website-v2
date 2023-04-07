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
    name: "Rewards unlock immediately",
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
    des: "Lighten the network burden caused by the abuse creation of ID numbers via effectively recycling idle IDs",
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
    img: "/markets/fill.png",
    img_title: false,
    logo: "https://pbs.twimg.com/profile_images/1621013624490954752/AKB2bBUf_400x400.jpg",
    title: "FILL",
    twitter: "https://twitter.com/FILLiquidity",
    website: "https://fillpool.space/",
    des: "FILL is designed as a liquidity pool that will be implemented on FVM as a fully open-sourced, decentralized, algorithm-based lending platform",
  },
  {
    img: "/markets/filet.png",
    img_title: false,
    logo: "https://pbs.twimg.com/profile_images/1392678030351425540/OL-pc5jc_400x400.png",
    title: "Filet",
    twitter: "https://twitter.com/Filet_finance",
    website: "https://www.filet.finance/",
    des: "Filet is a decentralized staking protocol deployed on Filecoin and BNB chain, providing secure staking service for Filecoin holders and helping storage providers in scaling their mining business.",
  },
  {
    img: "/markets/stfil.png",
    img_title: true,
    logo: "https://pbs.twimg.com/profile_images/1604833902870540288/JFeSYExJ_400x400.png",
    title: "STFIL",
    twitter: "https://twitter.com/stfil_io",
    website: "https://www.stfil.io/",
    des: "STFIL — Decentralized Liquidity Staking Protocol For Filecoin",
  },
  {
    img: "/markets/mfil.png",
    img_title: false,
    logo: "https://pbs.twimg.com/profile_images/1600778659371298816/0ngXcEDA_400x400.png",
    title: "MFIL",
    twitter: "https://twitter.com/MFILDAO",
    website: "https://mfil.modchain.io/#/stake",
    des: "MFIL is a DeFi liquidity staking product based on FVM that aims to solve the liquidity problem of FIL caused by staking",
  },
  {
    img: "/markets/collectif.png",
    img_title: true,
    logo: "https://pbs.twimg.com/profile_images/1614729203051827200/J0p2EPpg_400x400.jpg",
    title: "Collective DAO",
    twitter: "https://twitter.com/CollectifDAO",
    website: "https://collectif.finance",
    des: "The Collective DAO is a non-custodial liquid staking protocol built on top of the Filecoin that lets users “stake” their FIL and receive clFIL (Collective Filecoin) in exchange.",
  },
];

const Informations = [
  {
    icon: <Twitter />,
    link: "https://twitter.com/FVM_Spex",
  },
  {
    icon: <Medium />,
    link: "https://medium.com/@FVM_Spex",
  },
  {
    icon: <Github />,
    link: "https://github.com/orgs/SPex-team/repositories",
  },
];

export default function Home() {
  const [problem, setProblem] = useState(0);

  const findProblemImg = index => {
    // FIXME: SVGAElement color error
    switch (index) {
      case 1:
        // eslint-disable-next-line @next/next/no-img-element
        return <img src="/problems1.png" alt="Rewards Immediately" />;
      case 2:
        // eslint-disable-next-line @next/next/no-img-element
        return <img src="/problems2.png" alt="Aonymity of Transaction" />;
      case 3:
        // eslint-disable-next-line @next/next/no-img-element
        return <img src="/problems3.png" alt="Special IDs" />;
      default:
        // eslint-disable-next-line @next/next/no-img-element
        return <img src="/problems4.png" alt="Better Utilization" />;
    }
  };

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
      <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg [font-family:GeneralSansVariable]">
        <div className="container mx-auto flex items-center justify-between py-6 px-2">
          <Link href="/">
            <Image width={104} height={38} src="/logo.svg" alt="SPex" />
          </Link>
          <a
            href="https://app.spex.website/"
            rel="noreferrer"
            className="block h-11 w-40 rounded-full bg-gradient-to-r from-[#0077FE] to-[#3BF4BB] text-center leading-[44px] text-white"
          >
            Access App
          </a>
        </div>
      </header>
      <main className="[font-family:GeneralSansVariable]">
        <section className="banner bg-[url('/banner_bg.webp')] bg-cover pt-36 pb-20">
          <div className="container mx-auto flex items-center justify-between px-2">
            <div className="flex flex-1 flex-col">
              <p className="max-w-[909px] text-4xl font-extrabold md:text-4xl lg:text-6xl">
                A Decentralized Storage Provider Exchange on FVM
              </p>
              <p className="md:text-1xl mt-[20px] max-w-[709px] text-xl font-bold lg:text-2xl">
                Providing an all-in-one marketplace for Storage Providers to trade, swap, bid and
                interact.
              </p>
              <a
                href="https://app.spex.website/"
                rel="noreferrer"
                className="mt-10 hidden h-11 w-40 rounded-full bg-gradient-to-r from-[#0077FE] to-[#3BF4BB] text-center leading-[44px] text-white md:block"
              >
                Access App
              </a>
            </div>
            <div className="relative hidden h-[462px] w-[454px] md:block xl:h-[616px] xl:w-[605px]">
              <Image fill src="/banner.png" alt="SPex banner" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="lg:sticky lg:top-60">
            <div className="container mx-auto">
              <h1 className="mb-14 mt-20 text-center text-5xl font-semibold">
                The problems it solves
              </h1>
              <div className="flex justify-center lg:items-center lg:justify-between">
                <div>
                  {problems.map((item, index) => (
                    <div key={item.name}>
                      <div
                        data-active={index === problem}
                        className="group box-border flex max-w-[480px] rounded-[10px] p-[20px] text-[#57596c] data-[active=true]:border data-[active=true]:border-[#d3f0fe] data-[active=true]:bg-[#f6f8fc] data-[active=true]:text-[#111029]"
                      >
                        <div className="relative mr-[30px] h-[60px] w-[60px] text-[#62A0FF] group-data-[active=true]:text-[#0177FD]">
                          {item.icon}
                          {/* <Image width={60} height={60} src={item.src} alt="icon" /> */}
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-semibold ">{item.name}</div>
                          <p className="mt-1 text-base">{item.des}</p>
                        </div>
                      </div>
                      <div className={"block p-[40px] lg:hidden"}>{findProblemImg(index)}</div>
                    </div>
                  ))}
                </div>
                <div className="">
                  <div
                    data-active={problem === 0}
                    className="hidden h-[369px] w-[480px] data-[active=true]:block"
                  >
                    <Problems1 />
                  </div>
                  <Problems2
                    data-active={problem === 1}
                    className="hidden h-[460px] w-[496px] data-[active=true]:block"
                  />
                  <Problems3
                    data-active={problem === 2}
                    className="hidden h-[396px] w-[540px] data-[active=true]:block"
                  />
                  <Problems4
                    data-active={problem === 3}
                    className="hidden h-[437px] w-[496px] data-[active=true]:block"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            {problems.map((item, index) => (
              <div className="hidden h-[400px] lg:block" key={item.name} />
            ))}
          </div>
        </section>

        <section className="w-full bg-cover bg-center md:bg-[url('/work_bg.png')] lg:bg-[url('/')]">
          <div className="container relative mx-auto md:h-[716px] lg:bg-[url('/work_bg.png')] lg:bg-cover lg:bg-center">
            <h1 className="mb-14 mt-[136px] text-center text-5xl font-semibold">How it Works</h1>
            <div className="relative top-[26px] mx-auto max-w-[450px] px-2 md:h-[450px]">
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
                  <div className="relative h-[146px] max-w-full space-y-6 rounded-[10px] bg-gradient-to-r from-[#0077FE] to-[#3BF4BB] px-[18px] text-white opacity-70 md:max-w-[226px] md:space-y-0 md:from-[#FFF] md:to-[#FFF] md:text-black md:opacity-100">
                    <span className="absolute top-0 left-[18px] box-content inline-block h-5 w-5 -translate-y-1/2 rounded-full border-[5px] border-[#EFF3FC] bg-[#0077FE] text-center text-xl font-semibold leading-5 text-white">
                      {item.key}
                    </span>
                    <p className="flex w-full items-center whitespace-pre-line text-sm [height:inherit]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="container absolute left-1/2 top-[266px] hidden -translate-x-1/2 items-end justify-between lg:flex xl:top-[226px]">
              <div className="text-center font-semibold">
                <picture className="block w-[120px] xl:w-[157px]">
                  <source srcSet="/woman.webp" />
                  <img src="/woman.png" alt="SP-SELLER" />
                </picture>
                <span className="mt-4 inline-block text-lg xl:text-2xl">SP-SELLER</span>
              </div>
              <div className="text-center font-semibold">
                <picture className="block w-[110px] xl:w-[127px]">
                  <source srcSet="/men.webp" />
                  <img src="/men.png" alt="SP-BUYER" />
                </picture>
                <span className="mt-4 inline-block text-lg xl:text-2xl">SP-BUYER</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="container mx-auto px-2 pb-[178px]">
            <h1 className="mb-14 mt-20 text-center text-5xl font-semibold">
              Integrated Financial Servise Market On FVM
            </h1>
            <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
              {markets.map((market, index) => (
                <div key={market.title} className="group relative h-[222px] w-[354px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <span
                    className="absolute top-0 flex h-[222px] w-[354px] items-center justify-center rounded-[10px] bg-cover bg-center text-white shadow-md transition-all duration-300 ease-linear [transform:rotateY(0deg)] group-hover:opacity-0 group-hover:[transform:rotateY(90deg)]"
                    style={{ backgroundImage: `url(/markets/bg${index % 3}.png)` }}
                  >
                    {market.img_title && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="h-10" src={market.img} alt={market.title} />
                    )}
                    {!market.img_title && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-10" src={market.img} alt={market.title} />
                        <span className="ml-2 text-2xl font-semibold capitalize">
                          {market.title}
                        </span>
                      </>
                    )}
                  </span>
                  <div
                    className="absolute top-0 flex h-[222px] w-[354px] flex-col rounded-[10px] px-[30px] opacity-0 shadow-md backdrop-blur-3xl transition-all	duration-300 ease-linear [transform:rotateY(90deg)] group-hover:opacity-100 group-hover:[transform:rotateY(0deg)]"
                    title={market.des}
                  >
                    <div className="flex justify-between pt-11">
                      <div className="flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-10 w-10" src={market.logo} alt={market.title} />
                        <span className="ml-2 text-2xl font-semibold capitalize">
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
                    <p className="text-base2 mt-3 mb-5 overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:3]">
                      {market.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#d0e6ff] [font-family:GeneralSansVariable]">
        <div className="container mx-auto px-2">
          <div className="flex justify-between pt-20 pb-24">
            <Image width={104} height={38} src="/logo.svg" alt="SPex" />
            <div className="space-x-6">
              {Informations.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="inline-block h-[30px] w-[30px] hover:text-[#545368]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <hr className=" h-[1px] border-0 bg-[#B4C5DF]" />
          <span className="inline-block py-5">Copyright © 2023 SPex All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}

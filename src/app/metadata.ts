import { Metadata } from "next";

const siteName = "ライチ求人";
const description =
  "即日手渡し案件多数💰 全国の高額モデルバイトの求人情報を発信します✨ 時給10万円〜の高額案件からインセンティブで月100万円OverのYoutube案件、顔出し無しのパンチラ、熟女、SM、etc...";
const url = "https://raichi-qzin.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: [
      // {
      //   url: '/og.jpg',
      //   width: 800,
      //   height: 600
      // },
      {
        url: "/og.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@raichi-qzin",
    creator: "@raichi-qzin",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: url,
  },
};

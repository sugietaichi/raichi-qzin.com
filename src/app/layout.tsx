import "@/styles/globals.css";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "@/components/organisms/header/Header";
import { Footer } from "@/components/organisms/footer/Footer";
import { LikeJobProvider } from "@/states/LikeJobState";


export const metadata = {
  title: "個撮のライチ求人",
  description: "説明文",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const menu: { label: string; href: string }[] = [
  {
    label: 'TOP',
    href: '/'
  },
  {
    label: '案件を探す',
    href: '/'
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' prefix='og: http://ogp.me/ns#'>
      <TRPCReactProvider cookies={cookies().toString()}>
        <body className={`flex flex-col items-center justify-center bg-pink-200 ont-sans`}>
          <LikeJobProvider>
            <Header menuList={[...menu]} />
            <main className='w-full max-w-xl mt-3'>
              <div className='w-full px-2 py-3 bg-gray-200 shadow-md rounded-lg'>
                {children}
              </div>
            </main>
            <Footer />
          </LikeJobProvider>
        </body>
      </TRPCReactProvider>
    </html >
  );
}

import "./globals.css";
import Link from "next/link";
import ConnectWallet from "@/components/ConnectWallet";

// Add this import at the top with the other imports
import { Open_Sans } from "next/font/google";
import { IconHome } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

// Add this configuration after the imports
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}  antialiased`}>
        <nav className="border-b">
          <div className="flex h-16 items-center container px-4 mx-auto">
            <div className="mr-8 flex items-center">
              <Link href="/" className="flex items-center">
                <svg width="59" height="28" viewBox="0 0 59 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.02734 12.8047H0.574219V10.4492H2.02734V7.89453L4.95703 6.81641V10.4492H8.40234V12.8047H4.95703V18.3008C4.95703 19.1992 5.09766 19.8359 5.37891 20.2109C5.66016 20.5781 6.15234 20.7617 6.85547 20.7617C7.55859 20.7617 8.21484 20.5703 8.82422 20.1875V22.8828C8.14453 23.1172 7.17578 23.2344 5.91797 23.2344C4.66797 23.2344 3.70703 22.8828 3.03516 22.1797C2.36328 21.4688 2.02734 20.4609 2.02734 19.1562V12.8047ZM15.7116 13.1797C15.1881 12.8359 14.6139 12.6641 13.9889 12.6641C13.3092 12.6641 12.7037 12.9727 12.1725 13.5898C11.6491 14.207 11.3873 14.9609 11.3873 15.8516V23H8.45766V10.4492H11.3873V11.5977C12.2077 10.6758 13.2975 10.2148 14.6569 10.2148C15.6569 10.2148 16.4225 10.3672 16.9537 10.6719L15.7116 13.1797ZM27.2864 17.6211H18.3216C18.3762 18.6211 18.72 19.3984 19.3528 19.9531C19.9856 20.5078 20.8372 20.7852 21.9075 20.7852C23.2434 20.7852 24.2591 20.4375 24.9544 19.7422L26.0911 21.9805C25.0598 22.8164 23.5208 23.2344 21.4739 23.2344C19.5598 23.2344 18.0442 22.6758 16.927 21.5586C15.8177 20.4336 15.263 18.8672 15.263 16.8594C15.263 14.8828 15.8723 13.2812 17.0911 12.0547C18.3177 10.8281 19.7864 10.2148 21.4973 10.2148C23.3177 10.2148 24.7786 10.7578 25.8802 11.8438C26.9817 12.9297 27.5325 14.3125 27.5325 15.9922C27.5325 16.3516 27.4505 16.8945 27.2864 17.6211ZM18.427 15.418H24.5911C24.388 13.582 23.3723 12.6641 21.5442 12.6641C19.8723 12.6641 18.8333 13.582 18.427 15.418ZM35.3222 23V15.7461C35.3222 14.6758 35.1152 13.8945 34.7011 13.4023C34.2948 12.9102 33.6269 12.6641 32.6972 12.6641C32.2675 12.6641 31.8066 12.7852 31.3144 13.0273C30.83 13.2695 30.4511 13.5703 30.1777 13.9297V23H27.248V10.4492H29.3573L29.8964 11.6211C30.6933 10.6836 31.8691 10.2148 33.4237 10.2148C34.9159 10.2148 36.0917 10.6641 36.9511 11.5625C37.8183 12.4531 38.2519 13.6992 38.2519 15.3008V23H35.3222ZM46.8619 23V22.2383C46.6197 22.5039 46.2095 22.7383 45.6314 22.9414C45.0533 23.1367 44.4556 23.2344 43.8384 23.2344C42.0884 23.2344 40.7095 22.6797 39.7017 21.5703C38.7017 20.4609 38.2017 18.9141 38.2017 16.9297C38.2017 14.9453 38.7759 13.332 39.9244 12.0898C41.0806 10.8398 42.5259 10.2148 44.2603 10.2148C45.2134 10.2148 46.0806 10.4102 46.8619 10.8008V5.77344L49.7916 5.07031V23H46.8619ZM46.8619 13.4492C46.2369 12.9492 45.5845 12.6992 44.9048 12.6992C43.733 12.6992 42.8306 13.0586 42.1978 13.7773C41.565 14.4883 41.2486 15.5117 41.2486 16.8477C41.2486 19.457 42.5064 20.7617 45.022 20.7617C45.3033 20.7617 45.647 20.6797 46.0533 20.5156C46.4673 20.3438 46.7369 20.1719 46.8619 20V13.4492ZM49.3195 22.1914L50.3625 19.8594C51.2375 20.5547 52.2258 20.9023 53.3273 20.9023C54.468 20.9023 55.0383 20.4961 55.0383 19.6836C55.0383 19.207 54.8664 18.8164 54.5227 18.5117C54.1789 18.207 53.5109 17.8477 52.5187 17.4336C50.3547 16.5352 49.2727 15.2773 49.2727 13.6602C49.2727 12.5742 49.6867 11.7305 50.5148 11.1289C51.343 10.5195 52.4016 10.2148 53.6906 10.2148C54.9953 10.2148 56.2219 10.5078 57.3703 11.0938L56.5266 13.3672C55.8859 12.8203 54.9953 12.5469 53.8547 12.5469C52.8312 12.5469 52.3195 12.9531 52.3195 13.7656C52.3195 14.0859 52.4875 14.375 52.8234 14.6328C53.1594 14.8906 53.8781 15.2383 54.9797 15.6758C56.0812 16.1055 56.8742 16.6289 57.3586 17.2461C57.843 17.8633 58.0852 18.6094 58.0852 19.4844C58.0852 20.6484 57.6516 21.5664 56.7844 22.2383C55.925 22.9023 54.7531 23.2344 53.2687 23.2344C52.4328 23.2344 51.7609 23.1641 51.2531 23.0234C50.7531 22.8906 50.1086 22.6133 49.3195 22.1914Z"
                    fill="#10A7FF"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/">
                <Button className="gap-1 font-bold" variant="ghost">
                  <IconHome className="w-4 h-4" />
                  home
                </Button>
              </Link>
            </div>
            <div className="ml-auto">
              <ConnectWallet />
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
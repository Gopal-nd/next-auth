import type { Metadata } from "next/";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "AI SAAS",
  description: "Future is Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI SAAS</title>
        <meta name="description" content={"next AI SAAS Application"} />
      </head>
      <body

      >
   
            <NavBar />
          <div className="flex ">
            <Sidebar />
            {children}
          </div>
       
      </body>
    </html>
  );
}

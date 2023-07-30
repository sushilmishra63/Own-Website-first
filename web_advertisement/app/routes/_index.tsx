import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "~/Componants/navigationBar";
import Footer from "~/Componants/footer";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
<Navbar/>
    <h1 className="text-[59px] font-bold text-blue-500">
      Hello world!
    </h1>
    <Footer/>
    </>
    
  )
}
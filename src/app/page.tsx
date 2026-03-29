import Collection from "./Components/Collection";
import { Headline } from "./Components/Headline";
import { Hero } from "./Components/Hero";
import Recommendation from "./Components/NewArrival";
import { Signature } from "./Components/Signature";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero></Hero>
      <Headline></Headline>
      <Signature></Signature>
      <Collection></Collection>
      <Recommendation></Recommendation>
    </div>
  );
}

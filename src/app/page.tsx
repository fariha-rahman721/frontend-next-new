import Collection from "./Components/Collection";
import { Headline } from "./Components/Headline";
import { Hero } from "./Components/Hero";
import Recommendation from "./Components/NewArrival";
import Occasion from "./Components/WeddingCollection";
import { Signature } from "./Components/Signature";
import WeddingCollection from "./Components/WeddingCollection";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero></Hero>
      <Headline></Headline>
      <Signature></Signature>
      <Collection></Collection>
      <Recommendation></Recommendation>
      <WeddingCollection></WeddingCollection>
    </div>
  );
}

import HeroContentLeft from '../components/HeroHeader';
import {ArticlesCardsGrid} from "../components/first_component";
import Intro from '../components/Intro';
import Features from '../components/Features'
import UpAffix from '../components/affix'


export default function Home() {
  return (
    <>
      <HeroContentLeft />
      <ArticlesCardsGrid />
      <Intro />
      <Features />
      <UpAffix />
    </>
  );
}
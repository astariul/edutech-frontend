import HeroContentLeft from '../components/HeroHeader';
import {ArticlesCardsGrid} from "../components/first_component";
import {CarouselFirst} from '../components/second_component'
import Intro from '../components/Intro';
import Features from '../components/Features'
import UpAffix from '../components/affix'

export default function Home() {
  return (
    <>
      <HeroContentLeft />
      <ArticlesCardsGrid />
      <CarouselFirst />
      <Intro />
      <Features />
      <UpAffix />
    </>
  );
}
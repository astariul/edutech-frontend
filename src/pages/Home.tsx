import HeroContentLeft from '../components/HeroHeader';
import {ArticlesCardsGrid} from '../components/first_component';
import {CarouselFirst} from '../components/second_component';
import {ArticlesCardsGrid2} from '../components/third_component';
import Intro from '../components/Intro';
import {ArticlesCardsGrid3} from '../components/fifth_component';
import UpAffix from '../components/affix';

export default function Home() {
  return (
    <>
      <HeroContentLeft />
      <ArticlesCardsGrid />
      <CarouselFirst />
      <ArticlesCardsGrid2 />
      <Intro />
      <ArticlesCardsGrid3 />
      <UpAffix />
    </>
  );
}
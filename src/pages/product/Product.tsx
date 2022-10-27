import Top from "../../components/product/Top";
import BodyTop from '../../components/product/BodyTop';
import BodyProgram from '../../components/product/BodyProgram';
import BodyManagement from '../../components/product/BodyManagement';
import BodyFeatures from "../../components/product/BodyFeatures";
import useStyles from './style';
import Bottom from '../../components/product/Bottom';

const Product = () => {
  const {classes} = useStyles();
  return (
    <section className={classes.main}>
      <Top />
      <BodyTop />
      <BodyProgram />
      <BodyFeatures />
      <BodyManagement />
      <Bottom />
      {/* <TimeBanner dDay="2022-11-21" message="1기 판매 마감! 이 가격 마지막"/> */}
    </section>
  );
}

export default Product;

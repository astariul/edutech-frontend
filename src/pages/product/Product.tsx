import Top from "../../components/product/Top";
import BodyTop from '../../components/product/BodyTop';
import BodyProgram from '../../components/product/BodyProgram';
import BodyManagement from '../../components/product/BodyManagement';
import useStyles from './style';
import Bottom from '../../components/product/Bottom';
import FAQ from "../../components/product/FAQ";

const Product = () => {
  const {classes} = useStyles();
  return (
    <section className={classes.main}>
      <Top />
      <BodyTop />
      <BodyProgram />
      <BodyManagement />
      <Bottom />
      <FAQ />
    </section>
  );
}

export default Product;

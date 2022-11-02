import { FC } from "react";
import MainSection from "../../components/networkingProgram/MainSection";
import Sub1Section from "../../components/networkingProgram/Sub1Section";
import Sub2Section from "../../components/networkingProgram/Sub2Section";

const NetworkingProgram: FC = () => {
  return (
    <section>
      <MainSection />
      <Sub1Section />
      <Sub2Section />
    </section>
  );
};

export default NetworkingProgram;

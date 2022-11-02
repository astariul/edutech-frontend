import { FC } from "react";
import MainSection from "../../components/networkingProgram/MainSection";
import Sub1Section from "../../components/networkingProgram/Sub1Section";
import Sub2Section from "../../components/networkingProgram/Sub2Section";
import Sub3Section from "../../components/networkingProgram/Sub3Section";
import Sub4Section from "../../components/networkingProgram/Sub4Section";

const NetworkingProgram: FC = () => {
  return (
    <section>
      <MainSection />
      <Sub1Section />
      <Sub2Section />
      <Sub3Section />
      <Sub4Section />
    </section>
  );
};

export default NetworkingProgram;

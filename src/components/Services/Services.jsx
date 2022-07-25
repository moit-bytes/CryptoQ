import React from "react";

import {
  ServicesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./serviStyles";

import Icon1 from "../../assets/img/services_1.gif";
import Icon2 from "../../assets/img/services_2.gif";
import Icon3 from "../../assets/img/services_3.gif";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Our Services</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>Reduce Risks</H2>
          <P>
            We help you reduce risks by properly analyzing using our dashboard! 😉
          </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Swap Currencies</H2>
          <P>You can swap the cryptos with any user across the globe. 🌎</P>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Safe and Secure</H2>
          <P>You can safely and securely transact crypto by using our platform. 🤑</P>
        </Card>
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;

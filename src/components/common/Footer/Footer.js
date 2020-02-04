import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

const Footer = ({ name, title, socialLinks, phone, email }) => (
  <Wrapper>
    <Container>
      <Contacts>
        <p>
          Name <br />
          Title <br />
          Social links etc <br />
        </p>
        <p>
          Phone: <ContactLink href="tel:phonenumber">phonenumber</ContactLink>{' '}
          <br />
          Email: <ContactLink href="mailto:email">email</ContactLink>
        </p>
      </Contacts>
    </Container>
  </Wrapper>
);

const Wrapper = styled.footer`
  background: ${props => props.theme.color.background.secondary};
  padding: 20px 0 0 0;
  margin-top: 45px;
`;

const Contacts = styled.div``;

const ContactLink = styled.a`
  color: ${props => props.theme.color.text.primary};
`;

export default Footer;

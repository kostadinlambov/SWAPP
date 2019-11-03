import  React  from 'react';
import { Container } from 'reactstrap';

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)

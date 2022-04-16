import PropTypes from 'prop-types';
import { SectionContainer } from './Container.styled';

export const Container = ({ children }) => {
    return (
        <SectionContainer>{children}</SectionContainer>
    )
}

Container.propTypes = {
    children: PropTypes.node,
}
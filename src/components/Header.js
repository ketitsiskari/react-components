import PropTypes from 'prop-types';

function Header({ title = "My first Header in React" }) {
    return <header>{title}</header>;
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
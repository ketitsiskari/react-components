import PropTypes from 'prop-types';

function Footer({ title = "Footer title" }) {
    return <footer>{title}</footer>;
}

Footer.propTypes = {
    title: PropTypes.string
};

export default Footer;
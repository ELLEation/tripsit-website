import PropTypes from 'prop-types';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

function NavItem({ children, className, href }) {
  return (
    <Nav.Item as="li" className={className}>
      <Link href={href} passHref>
        <Nav.Link>{children}</Nav.Link>
      </Link>
    </Nav.Item>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  className: null,
};

export default NavItem;

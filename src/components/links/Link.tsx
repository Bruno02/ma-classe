import React, { CSSProperties } from 'react';
import { Link as RRLink, LinkProps } from 'react-router-dom';

const styles: CSSProperties = {
  textDecoration: 'none',
};

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  <RRLink {...props} style={styles}>
    {children}
  </RRLink>
);

export { Link };

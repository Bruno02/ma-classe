import React, { CSSProperties } from 'react';
import { Link as RRLink, LinkProps } from 'react-router-dom';

const styles: CSSProperties = {
  textDecoration: 'none',
};

interface ILink {
  fullWidth?: boolean;
}
const Link: React.FC<LinkProps & ILink> = ({
  children,
  fullWidth = false,
  ...props
}) => (
  <RRLink {...props} style={{ ...styles, width: fullWidth ? '100%' : 'auto' }}>
    {children}
  </RRLink>
);

export { Link };

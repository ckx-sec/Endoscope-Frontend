import { Link } from 'react-router-dom';
import { ReactComponent as EndoLogo } from '../../assets/images/endoscope.svg';
import { styled, Typography } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '50px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/overview">
      <EndoLogo height={70} />
      
    </LinkStyled>
  )
};

export default Logo;
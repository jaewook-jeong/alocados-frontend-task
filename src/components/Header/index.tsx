import { useLocation } from 'react-router-dom';
import Icons from '@assets/svg';
import * as Styled from './Header.styled';
import Buttons from './Buttons';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Styled.Wrapper>
      <Icons.Alocados />
      <Styled.ButtonWrapper>
        <Buttons currentPath={pathname} />
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default Header;

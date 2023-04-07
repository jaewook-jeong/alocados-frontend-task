import ROUTES from 'constants/ROUTES';
import StyledLink from './Buttons.styled';

type Props = {
  currentPath: string;
};

const ButtonsRoutes = {
  [ROUTES.EXCHANGE]: '환전하기',
  [ROUTES.EXCHANGE_HISTORY]: '거래내역',
};

const Buttons = ({ currentPath }: Props) => {
  return (
    <>
      {Object.entries(ButtonsRoutes).map(([key, name]) => {
        return (
          <StyledLink $active={key === currentPath} to={key} key={key}>
            {name}
          </StyledLink>
        );
      })}
    </>
  );
};

export default Buttons;

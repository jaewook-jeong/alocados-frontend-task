import { text15 } from 'constants/typhograp';
import { Link } from 'react-router-dom';
import styled, {  css } from 'styled-components';

const StyledLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  ${text15};
  width: 90px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    return props.$active ? css`
      background-color: var(--light-primary-12);
      color: var(--light-primary-font);
    ` : css`
      background-color: #fff;
      color: var(--light-shade-700);
      font-weight: 600;
    `
  }}
`;

export default StyledLink;
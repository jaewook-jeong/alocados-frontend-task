import { useCallback, useRef, useState } from 'react';
import Icons from '@assets/svg';
import * as Styled from './Dropdown.styled';

type Props = {};

const TEMP_LIST = [
  {
    id: 'Solana',
    name: 'Solana',
    Icon: Icons.Solana,
    disabled: true,
  },
  {
    id: 'Ethereum',
    name: 'Ethereum',
    Icon: Icons.Ethereum,
    disabled: false,
  },
  {
    id: 'BnB',
    name: 'BnB',
    Icon: Icons.Bnb,
    disabled: false,
  },
];

const Dropdown = ({}) => {
  const [isListOpen, setListOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as HTMLElement)) {
      close();
    }
  }, []);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  return (
    <Styled.Wrapper ref={dropdownRef} onClick={toggleList}>
      <Styled.DropdownButton>
        <Icons.Down />
      </Styled.DropdownButton>
      {isListOpen && (
        <Styled.DropdownList>
          {TEMP_LIST.map(({ Icon, disabled, name, id }) => {
            return (
              <Styled.DropdownChildren
                $disabled={disabled}
                onClick={(e) => {
                  if (!disabled) {
                    setSelectedId(id);
                  } else {
                    e.stopPropagation();
                  }
                }}
              >
                <Icon />
                {name}
              </Styled.DropdownChildren>
            );
          })}
        </Styled.DropdownList>
      )}
    </Styled.Wrapper>
  );
};

export default Dropdown;

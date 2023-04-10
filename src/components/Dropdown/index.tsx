import { FunctionComponent, useCallback, useRef, useState } from 'react';
import Icons from '@assets/svg';
import * as Styled from './Dropdown.styled';
import useClickOutside from 'hooks/useClickOutside';

const Dropdown = <IdType extends string>({
  list,
  keyName,
  placeholder,
  onChange,
  selectedId,
}: {
  keyName: string;
  placeholder: string;
  list: { id: IdType; name: string; disabled: boolean; Icon: FunctionComponent }[];
  onChange: (id: IdType) => void;
  selectedId?: IdType;
}) => {
  const [isListOpen, setListOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as HTMLElement)) {
      close();
    }
  }, []);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  const selectedItem = list.find((item) => item.id === selectedId);
  useClickOutside<HTMLDivElement>(dropdownRef, () => setListOpen(false));

  return (
    <Styled.Wrapper ref={dropdownRef} onClick={toggleList}>
      <Styled.DropdownButton>
        {selectedItem ? (
          <div>
            <selectedItem.Icon />
            {selectedItem.name}
          </div>
        ) : (
          placeholder
        )}
        <Icons.Down />
      </Styled.DropdownButton>
      {isListOpen && (
        <Styled.DropdownList>
          {list.map(({ Icon, disabled, name, id }) => {
            return (
              <Styled.DropdownChildren
                key={`${keyName}_${id}`}
                $disabled={disabled}
                onClick={(e) => {
                  if (!disabled) {
                    onChange(id);
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

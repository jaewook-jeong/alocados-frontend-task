import { useCallback, useEffect, useState } from 'react';
import * as Styled from './Input.styled';

type Props = {
  value: string | number;
  onChange: (value: string) => void;
  label?: string;
  error?: boolean;
};

const Input = ({ value, onChange, label = '전환 수량', error }: Props) => {
  const [inputNode, setNode] = useState<HTMLDivElement>();

  const callbackRef = useCallback((node: HTMLDivElement) => {
    setNode(node);
  }, []);

  const onClick = useCallback(() => {
    if (inputNode) {
      const input = inputNode?.querySelector('input');
      input?.focus();
    }
  }, [inputNode]);

  useEffect(() => {
    if (inputNode) {
      inputNode.addEventListener('click', onClick);
      return () => {
        inputNode.addEventListener('click', onClick);
      };
    }
  }, [inputNode]);

  return (
    <Styled.Wrapper ref={callbackRef} $isError={error}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Styled.Wrapper>
  );
};

export default Input;

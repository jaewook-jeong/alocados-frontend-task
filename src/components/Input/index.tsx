import { useCallback, useEffect, useState } from 'react';
import * as Styled from './Input.styled';

type Props = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

const Input = ({ value, onChange, label = '전환 수량' }: Props) => {
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
    <Styled.Wrapper ref={callbackRef}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Styled.Wrapper>
  );
};

export default Input;

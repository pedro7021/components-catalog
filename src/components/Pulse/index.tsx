import * as Styled from './styles';

export type PulseProps = {
  title?: string;
};

export function Pulse() {
  return (
    <Styled.Wrapper>
      <Styled.pulse>
        <Styled.ring />
        <Styled.ring />
        <Styled.ring />
        <Styled.ring />
      </Styled.pulse>
    </Styled.Wrapper>
  );
}

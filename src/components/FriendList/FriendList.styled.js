import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
`;

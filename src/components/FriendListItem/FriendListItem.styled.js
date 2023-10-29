import styled from 'styled-components';

const getBorderColor = props => {
  switch (props.rank) {
    case 'novice':
      return 'green';
    case 'intermediate':
      return `${p => p.theme.palette.peach}`;
    default:
      return props.theme.palette.light.blue;
  }
};

export const ListItem = styled.div`
  width: 162px;
  height: 90px;
  display: flex;
  align-items: center;
  border: ${p => p.theme.spacing(2)} solid ${getBorderColor};
  padding: ${p => p.theme.spacing(3)};
  border-radius: ${p => p.theme.radii.lg};

  &:hover {
    background-color: ${p => p.theme.palette.light.lavender};
  }
`;

export const StatusIndicator = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props =>
    props['data-is-online'] === 'true' ? 'green' : 'red'};
  margin-right: 10px;
`;

export const AvatarImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const NameText = styled.p`
  font-size: 16px;
  margin: 0;
`;

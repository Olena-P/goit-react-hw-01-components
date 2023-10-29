import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.spacing(5)};
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  background-color: #f9f9f9;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: ${p => p.theme.spacing(24)};
  height: ${p => p.theme.spacing(24)};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: ${props => {
    switch (props.$variant) {
      case 'primary':
        return props.theme.colors.peach;
      case 'secondary':
        return props.theme.colors.light.lavender;
      default:
        return props.theme.colors.light.green;
    }
  }};
`;

export const Tag = styled.p`
  font-size: 16px;
  color: ${props => {
    switch (props.$variant) {
      case 'primary':
        return props.theme.colors.peach;
      case 'secondary':
        return props.theme.colors.light.lavender;
      default:
        return props.theme.colors.red;
    }
  }};
  margin: 0;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const StatItem = styled.li`
  margin-right: 20px;
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

import styled from 'styled-components';
const getRandomColor = props => {
  const lightColorKeys = Object.keys(props.theme.colors.light);
  const randomColorKey = lightColorKeys[Math.floor(Math.random() * lightColorKeys.length)];
  return props.theme.colors.light[randomColorKey];
};

export const StatisticsSection = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const StatItem = styled.li`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${getRandomColor};
  padding: ${p => p.theme.spacing(3)};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;

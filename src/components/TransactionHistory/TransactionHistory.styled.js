import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
  max-width: 767px;
  border-collapse: collapse;
  border: ${p => p.theme.spacing(1)} solid ${p => p.theme.palette.light.lilac};
`;

export const TableHeader = styled.thead`
  background-color: ${p => p.theme.palette.light.lavender};
  font-weight: bold;
`;

export const TableRow = styled.tr`
  border: ${p => p.theme.spacing(1)} solid ${p => p.theme.palette.red};
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: ${p => p.theme.spacing(1)} solid ${p => p.theme.palette.light.lilac};
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: ${p => p.theme.spacing(1)} solid ${p => p.theme.palette.light.lilac};
`;

export const TypeCell = styled(TableCell)`
  background-color: ${p => p.theme.palette.lightBlue};
  font-weight: bold;
`;

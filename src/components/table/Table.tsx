import styled from "@emotion/styled";
import { css, ThemeProvider } from "@emotion/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "src/components";
import { theme } from "src/styles/globalStyles";
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: -3.3rem;
`;
const TableStyled = styled.table`
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: ${(props) => props.theme.boxShadow[0]};
`;
const Thead = styled.thead``;
const TheadRow = styled.tr``;
const Tbody = styled.tbody``;
const TheadData = styled.th`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[300]};
  padding: 0.75rem;
  text-align: left;
  text-transform: capitalize;
  position: relative;
  color: ${(props) => props.theme.colors.neutral[700]};
  &:not(:last-of-type) {
    &::before {
      content: "";
      position: absolute;
      right: 0;
      height: 1rem;
      width: 1px;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${(props) => props.theme.colors.neutral[300]};
    }
  }
`;
const TRow = styled.tr`
  &:hover {
    background-color: ${(props) => props.theme.colors.primary[50]};
  }
`;
const TData = styled.td`
  padding: 0.75rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${(props) => props.theme.colors.neutral[300]};
  }
`;

interface Props {
  data: any[];
  columns: any[];
  onBulkDeleteProps: (rows: any[]) => void;
}

const Table = (props: Props) => {
  const { data, columns, onBulkDeleteProps } = props;
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });
  const { getHeaderGroups, getRowModel, getSelectedRowModel } = tableInstance;

  const onBulkDelete = () => {
    onBulkDeleteProps(getSelectedRowModel().flatRows);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          position: relative;
        `}
      >
        <ActionWrapper>
          {getSelectedRowModel().flatRows &&
          getSelectedRowModel().flatRows?.length ? (
            <Button onClick={onBulkDelete}>Bulk Delete</Button>
          ) : (
            ""
          )}
          {getSelectedRowModel().flatRows &&
          getSelectedRowModel().flatRows?.length ? (
            <Button>Bulk Update</Button>
          ) : (
            ""
          )}
        </ActionWrapper>
        <TableStyled>
          <Thead>
            {getHeaderGroups().map((headerGroup) => (
              <TheadRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TheadData key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TheadData>
                ))}
              </TheadRow>
            ))}
          </Thead>
          <Tbody>
            {getRowModel().rows.map((row) => (
              <TRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TData key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TData>
                ))}
              </TRow>
            ))}
          </Tbody>
        </TableStyled>
      </div>
    </ThemeProvider>
  );
};

export default Table;

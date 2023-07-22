/* libs */
import { css } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useState } from "react";
import styled from "@emotion/styled";
/* theme */
import { materialTheme } from "src/styles/globalStyles";
/* components */
import { Button } from "../common";
const SpacingWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface Props {
  rows: any[];
}

interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  isActive: boolean;
}

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const CustomDataGrid = ({ rows }: Props) => {
  // pagination state
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedRow, setSelectedRow] = useState<Data[] | []>([]);

  // define columns
  const col: GridColDef[] = [
    { field: "first_name", headerName: "First Name", flex: 1, minWidth: 200 },
    { field: "last_name", headerName: "Last Name", flex: 1, minWidth: 200 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
    { field: "gender", headerName: "Gender", flex: 1, minWidth: 100 },
    { field: "isActive", headerName: "is Active", flex: 1, minWidth: 100 },
  ];

  const onSelectionChange = (ids: any) => {
    const selectedIDs = new Set(ids);
    const selectedData = rows.filter((row) => selectedIDs.has(row.id));
    setSelectedRow(selectedData);
  };

  const onButtonClick = () => {
    alert("Add Contact is clicked! 💣");
  };

  return (
    <>
      <SpacingWrapper>
        <Button icon="plus" onClick={onButtonClick}>
          Contact
        </Button>
        {selectedRow && selectedRow?.length ? <Button>Hello</Button> : ""}
      </SpacingWrapper>
      <ThemeProvider theme={materialTheme}>
        <div>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              width: 100%;
              height: 100%;
            `}
          >
            <DataGrid
              rows={rows}
              columns={col}
              rowsPerPageOptions={[10, 20, 50]}
              pageSize={pageSize}
              pagination
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              autoHeight
              checkboxSelection
              onSelectionModelChange={(ids) => onSelectionChange(ids)}
              components={{
                Toolbar: CustomToolbar,
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default CustomDataGrid;

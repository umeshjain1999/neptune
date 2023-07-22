/* Table with react-table Library */
import styled from "@emotion/styled";
import type { NextPage, GetServerSideProps } from "next";
import { Heading1, Table } from "src/components";
import { createColumnHelper } from "@tanstack/react-table";
import { IndeterminateCheckbox, Button } from "src/components";
interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  isActive: boolean;
}

interface Props {
  companies: Data[];
}
interface Company {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  isActive: boolean;
}

const Companies: NextPage<Props> = ({ companies }) => {
  const PageWrapper = styled.div`
    padding: 1rem;
  `;
  const ActionWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
  `;
  const columnHelper = createColumnHelper<Company>();

  const COLUMNS = [
    {
      id: "select",
      header: ({ table }: { table: any }) => {
        return (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        );
      },
      cell: ({ row }: { row: any }) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    columnHelper.accessor("first_name", {
      header: "first name",
    }),
    columnHelper.accessor("last_name", {
      header: "last name",
    }),
    columnHelper.accessor("email", {
      header: "email",
    }),
    columnHelper.accessor("gender", {
      header: "gender",
    }),
    columnHelper.accessor("isActive", {
      header: "is Active",
    }),
  ];

  const onButtonClick = () => {
    alert("Add Company is clicked! 💣");
  };

  const getOriginalRows = (rows: any[]) => {
    return rows.map((row) => row.original);
  };

  const onBulkDeleteProps = (rows: any[]) => {
    alert("check console for data");
    console.info(getOriginalRows(rows));
  };

  return (
    <PageWrapper>
      <Heading1>Companies</Heading1>
      <ActionWrapper>
        <Button icon="plus" onClick={onButtonClick}>
          Company
        </Button>
      </ActionWrapper>
      <Table
        data={companies}
        columns={COLUMNS}
        onBulkDeleteProps={onBulkDeleteProps}
      />
    </PageWrapper>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return {
    props: {
      companies: data || [],
    },
  };
};

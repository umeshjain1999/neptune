/* Table with MUI Datagrid Library */
/* libs */
import styled from "@emotion/styled";
import { useState } from "react";
/* types */
import type { GetServerSideProps, NextPage } from "next";
/* theme */
/* components */
import { CustomDataGrid, Heading1 } from "src/components";
interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  isActive: boolean;
}

interface Props {
  contacts: Data[];
}

const Contacts: NextPage<Props> = ({ contacts }) => {
  const PageWrapper = styled.div`
    padding: 1.5rem;
  `;

  return (
    <PageWrapper>
      <Heading1>Contacts</Heading1>
      <CustomDataGrid rows={contacts} />
    </PageWrapper>
  );
};

export default Contacts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return {
    props: {
      contacts: data || [],
    },
  };
};

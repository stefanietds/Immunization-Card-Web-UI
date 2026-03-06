import { Table } from "antd";
import type { TableProps } from "antd";
import React from "react";

function DataTable<T>(props: TableProps<T>) {
  return <Table {...props} />;
}

export default DataTable;
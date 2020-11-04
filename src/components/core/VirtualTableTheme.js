import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableSelection,
} from "@devexpress/dx-react-grid-material-ui";

import { SelectionState, VirtualTableState } from "@devexpress/dx-react-grid";

const MyVirtualTable = ({
  rows,
  columns,
  formatters,
  onClick,
  getRowId,
  columnExtensions,
  loading,
}) => {
  const [selection, setSelection] = React.useState();

  React.useEffect(() => {
    selection && onClick && onClick(selection);
  }, [selection, onClick]);
  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <VirtualTable columnExtensions={columnExtensions} />
        <TableHeaderRow />
        <SelectionState
          selection={selection}
          onSelectionChange={(select) =>
            setSelection([select.length && select[select.length - 1]])
          }
        />
        {loading && <VirtualTableState loading getRows={() => 100} />}
        <TableSelection
          selectByRowClick
          highlightRow
          showSelectionColumn={false}
        />
        {formatters}
      </Grid>
    </Paper>
  );
};

export default MyVirtualTable;

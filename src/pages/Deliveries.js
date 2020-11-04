import React from "react";
import Box from "@material-ui/core/Box";
import TabTheme from "../components/core/TabTheme";
import Typography from "@material-ui/core/Typography";
import MyVirtualTable from "../components/core/VirtualTableTheme";

import { DataTypeProvider } from "@devexpress/dx-react-grid";

const rows = [];
for (let index = 0; index < 100; index++) {
  rows.push({
    id: index,
    dateCreated: new Date().toISOString(),
    client: "Samuel Seibidor",
    pickUp: "10, Wogu Street D/Line, Port Harcourt",
    dropOff: "Creekside Logistics, Port Harcourt",
    distance: 5,
    mode: "Motorcycle",
  });
}

const columns = [
  { name: "dateCreated", title: "Date Created" },
  { name: "client", title: "Client" },
  { name: "pickUp", title: "Pick-up" },
  { name: "dropOff", title: "Drop-off" },
  { name: "distance", title: "Distance (km)" },
  { name: "mode", title: "Mode" },
];

const columnExtensions = [
  { columnName: "distance", width: 120, align: "center" },
];

const DateFormatter = ({ value }) => new Date(value).toLocaleDateString();

const DateFormatProvider = (props) => (
  <DataTypeProvider formatterComponent={DateFormatter} {...props} />
);

const Deliveries = (props) => {
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" mb={3}>
        <Typography variant="h5" color="initial" gutterBottom>
          Deliveries
        </Typography>
      </Box>
      <TabTheme
        aria="deliveries tab"
        tabs={["Pending", "Processing", "Delivered", "Cancelled"]}
        onChange={(value) => {}}
      />
      <MyVirtualTable
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        columnExtensions={columnExtensions}
        formatters={[<DateFormatProvider for={["dateCreated"]} />]}
        onClick={(id) => {
          console.log(id);
          props.history.push(`/dashboard/delivery/${id}`);
        }}
        loading={false}
      />
    </React.Fragment>
  );
};

export default Deliveries;

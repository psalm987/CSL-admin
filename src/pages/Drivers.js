import React from "react";
import Box from "@material-ui/core/Box";
import TabTheme from "../components/core/TabTheme";
import Typography from "@material-ui/core/Typography";
import MyVirtualTable from "../components/core/VirtualTableTheme";

import Avatar from "@material-ui/core/Avatar";

import { DataTypeProvider } from "@devexpress/dx-react-grid";

const rows = [];
for (let index = 0; index < 100; index++) {
  rows.push({
    id: index,
    image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Samuel Seibidor",
    staffID: "abcde12345",
    phone: "09022003627",
    email: "samrythmn@gmail.com",
  });
}

const columns = [
  { name: "image", title: " " },
  { name: "name", title: "Name" },
  { name: "staffID", title: "Staff ID" },
  { name: "phone", title: "Phone" },
  { name: "email", title: "Email" },
];

const columnExtensions = [
  { columnName: "image", width: 100, align: "center" },
  { columnName: "name" },
  { columnName: "staffID" },
  { columnName: "phone" },
  { columnName: "email" },
];

const AvatarFormatter = ({ value }) => (
  <Avatar alt="Driver image" src={value} />
);

const AvatarProvider = (props) => (
  <DataTypeProvider formatterComponent={AvatarFormatter} {...props} />
);

const Drivers = (props) => {
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" mb={3}>
        <Typography variant="h5" color="initial" gutterBottom>
          Drivers
        </Typography>
      </Box>
      <TabTheme
        aria="deliveries tab"
        tabs={["Active", "Pending", "Blacklist", "Map"]}
        onChange={(value) => {}}
      />
      <MyVirtualTable
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id + 5}
        formatters={[<AvatarProvider for={["image"]} />]}
        columnExtensions={columnExtensions}
        loading={false}
        onClick={(id) => {
          console.log(id);
          props.history.push(`/dashboard/driver/${id}`);
        }}
      />
    </React.Fragment>
  );
};

export default Drivers;

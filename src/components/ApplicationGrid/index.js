import React, { useState } from "react";
import { useHistory }  from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { SearchState, IntegratedFiltering, SelectionState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableColumnVisibility,
  TableSelection,
  Toolbar,
  ColumnChooser,
  SearchPanel,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { getAllApplications } from "../../utils/API/index.js";

const getHiddenColumnsFilteringExtensions = (hiddenColumnNames) =>
  hiddenColumnNames.map((columnName) => ({
    columnName,
    predicate: () => false,
  }));

export default () => {
  const [rows, setRows] = useState([
    { first_name: "Wen", last_name: "Zhang", email: "wz2705@gmail.com"},
    { first_name: "Brayden", last_name: "Royston", email: "helloworld2@gmail.com"},
    { first_name: "Dunja", last_name: "Tomic", email: "dunja.tomic@thegoldenhack.ca"}
  ]);
  getAllApplications(
    (response) => {
      setRows(response.Items);
    },
    () => {
      console.log("error");
    }
  );
  const [columns] = useState([
    { name: "first_name", title: "First Name" },
    { name: "last_name", title: "Last Name" },
    { name: "birth_date", title: "Birth Date" },
    { name: "Gender", title: "Gender" },
    { name: "email", title: "Email" },
    { name: "ethnicity", title: "Ethnicity" },
    { name: "degree", title: "Degree" },
    { name: "coop_terms", title: "Co-op Terms" },
    { name: "num_hackathons", title: "Number of Hackathons" },
    { name: "how_heard", title: "How you heard about us" },
    { name: "submitted", title: "Submitted" },
    { name: "date_submitted", title: "Application date/time" },
    { name: "github_url", title: "Github URL" },
  ]);
  const [selection, setSelection] = useState([]);

  const [defaultHiddenColumnNames] = useState(["submitted"]);
  const [filteringColumnExtensions, setFilteringColumnExtensions] = useState(
    getHiddenColumnsFilteringExtensions(defaultHiddenColumnNames)
  );

  const onHiddenColumnNamesChange = (hiddenColumnNames) =>
    setFilteringColumnExtensions(
      getHiddenColumnsFilteringExtensions(hiddenColumnNames)
    );

  let history = useHistory();
  let id = '1020';

  const onSelectionChange = (selection) => {
    id = rows[selection].email;
    history.push('/exec/' + id);
  }

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <SearchState defaultValue="" />
        <IntegratedFiltering columnExtensions={filteringColumnExtensions} />
        <SelectionState 
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
        <Table />
        <TableHeaderRow />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
          onHiddenColumnNamesChange={onHiddenColumnNamesChange}
        />
        <TableSelection
          selectByRowClick
          highlightRow
          showSelectionColumn={false}
        />
        <Toolbar />
        <SearchPanel />
        <ColumnChooser />
      </Grid>
    </Paper>
  );
};

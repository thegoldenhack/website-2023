import React, { useState, useEffect } from "react";
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
import { getAllApplications, getAllEvents } from "../../utils/API/index.js";

const getHiddenColumnsFilteringExtensions = (hiddenColumnNames) =>
  hiddenColumnNames.map((columnName) => ({
    columnName,
    predicate: () => false,
  }));

export default () => {
  const [rows, setRows] = useState([
    { name: "Workshop #1", time: "3:00 - 4:00", description: "Fun workshop to attend...", num_attendees: "17"},
    { name: "Workshop #2", time: "3:00 - 4:00", description: "Fun workshop to attend...", num_attendees: "17"},
    { name: "Workshop #3", time: "3:00 - 4:00", description: "Fun workshop to attend...", num_attendees: "17"},
    { name: "Workshop #4", time: "3:00 - 4:00", description: "Fun workshop to attend...", num_attendees: "17"}
  ]);
  useEffect(() => {getAllEvents(
    (response) => {
      console.log(response);
      setRows(response.Items);
    },
    () => {
      console.log("error");
    }
  );}, [getAllEvents]);
  
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "time", title: "Time" },
    { name: "description", title: "Description" },
    { name: "num_attendees", title: "# Attendees" },
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
    // id = rows[selection].name;
    history.push('/manageEvents/' + id);
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

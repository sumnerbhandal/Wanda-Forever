import React, { useCallback, createRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom/index";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import "../contract-hub/styles.scss";
import "../contract-hub/query-styles.scss";
import "./styles.scss";
import guid from "../utils/guid";
import DropDown from "../_input/dropDown/dropDown";
import Button from "../_input/button/button";
import Incomplete from "./_assets/incomplete.svg";
import Delete from "./_assets/delete.svg";
import Bulk from "./_assets/bulk.svg";
import Clock from "./_assets/incomplete-icon.svg";

const BulkAssign = (
  <>
    Bulk Assign
    <img alt="Add icon" style={{ marginLeft: "0.5rem" }} src={Bulk} />
  </>
);

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "type",
    label: "Status"
  },
  {
    id: "name",
    label: "File Name"
  },
  {
    id: "group",
    label: "Contract Type"
  },
  {
    id: "uploadDate",
    label: "Group"
  },
  {
    id: "actions",
    label: ""
  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            className="table-header"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <div component="span" sx={visuallyHidden}>
                  {/* {order === "desc" ? "Contract Name" : "sorted ascending"} */}
                </div>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const rowId = guid();

  return (
    <React.Fragment>
      <TableRow
        className={open ? "default-row" : "default-row closed"}
        tabIndex={-1}
        key={rowId}
        sx={{ "& > *": { borderBottom: "unset" } }}
        id={props.id}
      >
        <TableCell>
          <img
            alt="Incomplete icon"
            style={{ marginTop: "0.25rem" }}
            src={Incomplete}
          />
          <span style={{ display: "none" }}>Incomplete</span>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell style={{ paddingRight: "1rem" }}>
          <DropDown
            id={rowId + "Select Type"}
            name="Select Type"
            option={[
              "Select Type",
              "Amendmen",
              "NDA One-Way",
              "Side Letter",
              "Supply Agreement"
            ]}
          />
        </TableCell>
        <TableCell style={{ paddingRight: "1rem" }}>
          <DropDown
            id={rowId + "Select Group"}
            name="Select Group"
            option={["Select Group", "Default", "James' Group"]}
          />
        </TableCell>
        <TableCell>
          <img alt="Delete" src={Delete} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function QueryTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (props.uploadedFiles !== undefined) {
  //     navigate("/query/search");
  //   } else return;
  // }, [props.uploadedFiles]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.

  const feed = props.uploadedFiles;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - feed.length) : 0;

  return (
    <>
      <div className="contract-hub query upload">
        <div className="header-count">
          <h1>Items in Queue ({feed.length})</h1>
          <div>
            <img alt="clock" src={Clock} />
            {feed.length} incomplete documents
          </div>
        </div>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={feed.length}
            />
            <TableBody>
              {stableSort(feed, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <Row
                      key={index}
                      row={row}
                      id={index}
                      configureContract={props.configureContract}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 50]}
          component="div"
          count={feed.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className="bulk-banner">
          <div className="bulk-banner-content">
            {" "}
            <div className="bulk-options">
              <DropDown
                id="Select Type"
                name="Select Contract Type"
                label="Bulk Assign"
                option={[
                  "Select Type",
                  "Amendmen",
                  "NDA One-Way",
                  "Side Letter",
                  "Supply Agreement"
                ]}
              />
              <DropDown
                id="Select Group"
                name="Select Type"
                option={[
                  "Select Type",
                  "Amendmen",
                  "NDA One-Way",
                  "Side Letter",
                  "Supply Agreement"
                ]}
              />
            </div>
            <Button variant="primary" label={BulkAssign} />
          </div>
        </div>
      </div>
    </>
  );
}

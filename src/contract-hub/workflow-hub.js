import * as React from "react";
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
import Collapse from "@mui/material/Collapse";
import "./styles.scss";
import workflow from "./_workflow-feed/workflow";
import workflowKB from "./_workflow-feed/workflowKB";
import guid from "../utils/guid";
import DropDown from "../_input/dropDown/dropDown";
import Input from "../_input/text/input";
import Button from "../_input/button/button";
import decorativeAngle from "./_assets/Decoration.svg";
import { Link } from "react-router-dom/index";

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
    id: "name",
    label: "Name"
  },
  {
    id: "dueDate",
    label: "Due Date"
  },

  {
    id: "status",
    label: "Status"
  },
  {
    id: "assignedBy",
    label: "Assigned By"
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
  const typeOptions = ["NDA", "Another One"];
  const groupOptions = ["Example Group 1", "Example Group 2"];
  const playbookOptions = ["Playbook 1", "Playbook 2"];
  const [contractName, setContractName] = React.useState(row.name);
  const [lastEdited, setLastEdited] = React.useState(row.lastEdited);
  const [contractMessage, setContractMessage] = React.useState(null);
  const [contractNameState, setContractNameState] = React.useState(null);

  function getDate() {
    let today = new Date();
    let strDate = "Y/m/d"
      .replace("Y", today.getFullYear())
      .replace("m", today.getMonth() + 1)
      .replace("d", today.getDate());
    setLastEdited(strDate);
  }

  function getFirstLetters(str) {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstLetters;
  }

  function hyphenate(str) {
    const string = str.replace(/\s+/g, "-").toLowerCase();

    return string;
  }

  function updateName(e) {
    const event = e.target;
    setContractName(event.value);
    getDate();
    if (contractName.length < 4) {
      setContractMessage("Contract name must be more than 3 characters");
      setContractNameState("error");
    } else {
      setContractMessage(null);
      setContractNameState(null);
    }
  }

  return (
    <React.Fragment>
      <TableRow
        className={
          open ? "default-row workflow-hub" : "default-row closed workflow-hub"
        }
        tabIndex={-1}
        key={rowId}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <Link
            to={{
              pathname: `./editor/${contractName
                .replace(/\s/g, "-")
                .toLowerCase()}_${row.contractRef}`,
              state: { fileName: true }
            }}
          >
            {row.name}
          </Link>
        </TableCell>
        <TableCell>
          <div className="name-container">{row.dueDate}</div>
        </TableCell>
        <TableCell>
          <div className={`nda-seed ${hyphenate(row.status)}`}>
            {row.status}
          </div>
        </TableCell>
        <TableCell>
          <div className="name-container">
            <div className="name-seed">{getFirstLetters(row.assignedBy)}</div>
            {row.assignedBy}
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function WorkflowTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const feed =
    props.feed === "workflow"
      ? workflow
      : props.feed === "workflow-kb"
      ? workflowKB
      : props.feed === "workflow-jf"
      ? workflowJF
      : null;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - feed.length) : 0;

  return (
    <div className="contract-hub">
      <h1>My Workflows</h1>
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
                    key={row.name}
                    row={row}
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
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={feed.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <img
        alt="background-accent"
        className="decorative-angle"
        src={decorativeAngle}
      />
    </div>
  );
}

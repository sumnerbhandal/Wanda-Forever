import React, { useState, useRef, useEffect } from "react";
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
import IconButton from "@mui/material/IconButton";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styles.scss";
import "./query-styles.scss";
import query from "./_feed/query";
import guid from "../utils/guid";
import DropDown from "../_input/dropDown/dropDown";
import Input from "../_input/text/input";
import Button from "../_input/button/button";
import decorativeAngle from "./_assets/Decoration.svg";
import { Link } from "react-router-dom/index";
import Tags from "../_query/autocomplete";
import DefaultContract from "../_query/_contracts/default";
import QueryResults from "../_query/query-results";

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
    label: "Type"
  },
  {
    id: "name",
    label: "File Name"
  },
  {
    id: "group",
    label: "Group"
  },
  {
    id: "uploadDate",
    label: "Upload Date"
  },
  // {
  //   id: "status",
  //   label: "Labelling"
  // },
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

  // function getFirstLetters(str) {
  //   const firstLetters = str
  //     .split(" ")
  //     .map((word) => word[0])
  //     .join("");

  //   return firstLetters;
  // }

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
        className={open ? "default-row" : "default-row closed"}
        tabIndex={-1}
        key={rowId}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <div className="nda-seed">
            <span>{row.type}</span>
          </div>
        </TableCell>
        <TableCell>
          <Link
            to={{
              pathname: `/query/label/${contractName
                .replace(/\s/g, "-")
                .toLowerCase()}_${row.contractRef}`,
              state: { fileName: true }
            }}
          >
            {contractName}
          </Link>
        </TableCell>
        <TableCell>
          <div className="name-container query">{row.group}</div>
        </TableCell>
        <TableCell>{row.lastEdited}</TableCell>
        {/* <TableCell>
          <div className={`nda-seed ${row.status}`}>{row.status}</div>
        </TableCell> */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            // onClick={() => (props.configureContract ? setOpen(!open) : null)}
          >
            {open ? <UnfoldLessIcon /> : <MoreVertIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function QueryTable(props) {
  const heightRef = useRef();
  const [queryBarHeight, setQueryBarHeight] = useState();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const [activeTags, setActiveTags] = useState();
  const [labelsExist, setLabelsExist] = useState(false);

  useEffect(() => {
    setQueryBarHeight(heightRef?.current?.clientHeight);
  }, [heightRef?.current?.clientHeight]);

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

  const feed = query;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - feed.length) : 0;

  return (
    <div className="query-action-container">
      <div ref={heightRef} className="query-bar">
        <Tags
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          labelsExist={labelsExist}
          setLabelsExist={setLabelsExist}
        />
      </div>
      {activeTags === undefined || activeTags.length === 0 ? (
        <div className="contract-hub query">
          <h1>Uploaded Documents ({feed.length})</h1>
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
                        key={row.name + index}
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
            rowsPerPageOptions={[50, 100]}
            component="div"
            count={feed.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      ) : (
        <div
          style={{ height: `calc(100% - ${queryBarHeight + 1}px` }}
          className="results-container"
        >
          <QueryResults
            labelsExist={labelsExist}
            setLabelsExist={setLabelsExist}
            activeTags={activeTags}
          />
        </div>
      )}
    </div>
  );
}

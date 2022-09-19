import React, { useState, useEffect, useRef } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Close from "./_assets/close-circle.svg";
import Button from "../_input/button/button";
import "./styles.scss";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const provisions = [
  { title: "Acting as Principal", type: "select" },
  { title: "Agreement Date", type: "date" },
  { title: "Assignment", type: "select" },
  { title: "Attorney's Fees", type: "select" },
  { title: "Audited Statement", type: "select" },
  { title: "Automatic Renewal", type: "select" },
  { title: "Board Obligations/Rights", type: "select" },
  { title: "Board Observer Rights", type: "select" },
  { title: "Capped or Uncapped", type: "select" },
  { title: "Client Specific Robin AI - QC", type: "select" },
  { title: "Company Details", type: "select" },
  { title: "Company Liability", type: "select" },
  { title: "Company Name", type: "select" },
  { title: "Company Obligations", type: "select" },
  { title: "Counterparty", type: "select" }
];

const clearAll = (
  <Button contentEditable="false" variant="text" label="Clear All" />
);

const CustomChip = (props) => {
  // const [tempTag, setTempTag] = useState();

  // const realTagTotal = () => {
  //   const valueTotal = props.valueTotal;
  //   valueTotal.length === 1 ? props.setActiveTags([]) : null;
  // };

  const closeIcon = <img alt="close-button" src={Close} />;
  //close icon
  return (
    <div className="custom-tag">
      {provisions.find((record) => record.title === props.value) ===
      undefined ? (
        <>
          <Chip deleteIcon={closeIcon} {...props.getTagProps} label="Text:" />
          <span className="text-search">"{props.value}"</span>
        </>
      ) : (
        <>
          <Chip
            deleteIcon={closeIcon}
            label={`${props.label}:`}
            {...props.getTagProps}
          />
          <select
            name="date"
            onMouseDown={(event) => {
              event.stopPropagation();
            }}
            onMouseUp={(event) => {
              event.stopPropagation();
            }}
          >
            <option value="any">any</option>
            {/* <option value="is">is</option>
            <option value="is before">is before</option>
            <option value="is after">is after</option> */}
          </select>
          {/* <input
            type={
              provisions.find((record) => record.title === props.value).type
            }
          /> */}
        </>
      )}
    </div>
  );
};

export default function Tags(props) {
  const PopperMy = React.useCallback((props) => {
    const anchorEl = document.getElementById("tags"); // Or any other element

    return (
      <Popper
        {...props}
        anchorEl={anchorEl}
        style={{ width: "692px" }}
        placement="bottom-end"
      />
    );
  }, []);

  return (
    <Stack spacing={3} sx={{ width: "47.5rem" }}>
      <Autocomplete
        clearIcon={clearAll}
        multiple
        id="tags"
        autoComplete={true}
        options={provisions.map((option) => option.title)}
        // defaultValue={[provisions[12].title, provisions[13].title]}
        onChange={(event, value) => props.setActiveTags(value)}
        freeSolo
        renderTags={(value: string[], getTagProps) => (
          <div className="tag-container">
            {value.map((option: string, index: number) => (
              <>
                <CustomChip
                  value={option}
                  getTagProps={getTagProps({ index })}
                  label={option}
                  valueTotal={value}
                />
              </>
            ))}
          </div>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder="Start a Query" />
        )}
        PopperComponent={PopperMy}
        // onChange={(value: string[]) => setTagValues(value)}
      />
    </Stack>
  );
}

import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Close from "./_assets/close-circle.svg";
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
  { title: "Company Obligations", type: "select" }
];

const CustomChip = (props) => {
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
          <select name="date">
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

const closeIcon = <img alt="close-button" src={Close} />;

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: "47.5rem" }}>
      <Autocomplete
        multiple
        id="tags"
        options={provisions.map((option) => option.title)}
        // defaultValue={[provisions[12].title, provisions[13].title]}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) => (
          <div className="tag-container">
            {value.map((option: string, index: number) => (
              <CustomChip
                value={option}
                getTagProps={getTagProps({ index })}
                label={option}
              />
            ))}
          </div>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder="Start a Query" />
        )}
      />
    </Stack>
  );
}

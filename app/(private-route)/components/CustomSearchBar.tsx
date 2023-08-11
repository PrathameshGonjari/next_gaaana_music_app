import SearchBar from "@/components/SearchBar";
import { Paper } from "@mui/material";
import { FC } from "react";

const CustomSearchBar: FC<SearchBarProps> = ({ filter, onFilterChange }) => {
  return (
    <Paper sx={{ position: "fixed", left: 5, right: 5, top: 70 }} elevation={3}>
      <SearchBar filter={filter} onFilterChange={onFilterChange} />
    </Paper>
  );
};

export default CustomSearchBar;
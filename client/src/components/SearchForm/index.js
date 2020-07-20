import React from "react";

const SearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Medication Name</label>
        <input
          type="search"
          placeholder="insert name of medication"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
		<button type="submit" className="searchMedName">Search</button>
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </form>
  );
};

export default SearchForm;
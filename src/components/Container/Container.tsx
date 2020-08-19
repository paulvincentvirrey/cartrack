import React, { useState, useEffect } from "react";
import { Card, Search, Icon } from "../../components";
import { User } from "../../store/types";
import "./Container.css";

type ContainerProps = {
  data: User[];
};

const Container = ({ data }: ContainerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = data.filter((item: User) =>
      Object.values(item).some((val) =>
        JSON.stringify(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  return (
    <React.Fragment>
      <Search input={searchTerm} onChange={handleChange} />
      {searchResults.length > 0 ? (
        <div className="flex-container">
          {searchResults.map((user: any) => (
            <div className="flex-row" key={user.id}>
              <Card data={user} />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-result">
          <Icon className="no-result__icon" value="error" />
          <h3>No teammates found</h3>
        </div>
      )}
    </React.Fragment>
  );
};
export default Container;

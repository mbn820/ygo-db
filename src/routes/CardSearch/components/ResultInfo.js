import React, { useContext } from 'react';
import CardSearchContext from '../../../context/CardSearchContext';

const ResultInfo = () => {
  const { pageInfo, searchResults } = useContext(CardSearchContext);

  const endPage = Math.min(pageInfo.page * pageInfo.size, searchResults.meta.total_rows);
  const startPage = Math.max(endPage - pageInfo.size + 1, 1);

  return (
    <>
      <div className="mb-3 mb-sm-3 mb-md-0">
        <strong>Search Results: {startPage} - {endPage} of {searchResults.meta.total_rows}</strong>
      </div>
    </>
  )
};

export default ResultInfo;

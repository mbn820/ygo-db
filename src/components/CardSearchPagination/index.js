import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import CardSearchContext from '../../context/CardSearchContext';

const CardSearchPagination = ({ meta }) => {
  const { params, setParams, pageInfo, setPageInfo, search } = useContext(CardSearchContext);

  const firstPage = 1;

  const lastPage = meta.total_pages + 1;

  const pages = Array(Math.min(5, lastPage)).fill(1).map((val, index) => val + index);

  const paginate = (page) => {
    const update = { ...pageInfo, page };
    setPageInfo(update);
    search(params, update);
  };

  return (
    <>
      <Pagination className="m-0">
        <Pagination.First onClick={() => paginate(firstPage)} disabled={pageInfo.page === firstPage} />
        <Pagination.Prev onClick={() => paginate(pageInfo.page - 1)} disabled={pageInfo.page === firstPage} />

        {pages
          .map( page => (page + Math.max(pageInfo.page - pages.length, 0)) )
          .map(page => (<Pagination.Item key={page} active={pageInfo.page === page} onClick={() => paginate(page)}>{page}</Pagination.Item>))
        }

        <Pagination.Next onClick={() => paginate(pageInfo.page + 1)} disabled={pageInfo.page === lastPage} />
        <Pagination.Last onClick={() => paginate(lastPage)} disabled={pageInfo.page === lastPage} />
      </Pagination>
    </>
  );
};

export default CardSearchPagination;

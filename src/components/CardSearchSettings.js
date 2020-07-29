import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParamsSelect from './ParamsSelect';
import CardSearchContext from '../context/CardSearchContext';

const CardSearchSettings = () => {
  const { params, setParams, pageInfo, setPageInfo, search } = useContext(CardSearchContext);

  const sorts = ['Newest', 'ATK', 'DEF', 'Level', 'Name', 'Views', 'TCG Release', 'OCG Release'];

  const pages = [10, 50, 100];

  const views = ['Gallery', 'List'];

  const onSort = (e) => {
    const update = { ...params, sort: e.target.value };
    setParams(update);
    search(update, pageInfo);
  }

  const onSelectPageSize = (e) => {
    const update = { ...pageInfo, size: e.target.value };
    setPageInfo(update);
    search(params, update);
  }

  const onSelectView = (e) => {
    console.log('Changing view');
  };

  return (
    <>
      <Row>
        <Col sm={12} md={4}>
          <ParamsSelect name="sort" value={params.sort} options={sorts} onChange={onSort} display={sort => `Sort by ${sort}`} />
        </Col>
        <Col sm={12} md={4}>
          <ParamsSelect name="num" value={pageInfo.size} options={pages} onChange={onSelectPageSize} display={page => `Show ${page} items per page`} />
        </Col>
        <Col sm={12} md={4}>
          <ParamsSelect name="view" value={params.view} options={views} onChange={onSelectView} display={view => `View as ${view}`} />
        </Col>
      </Row>
    </>
  )
};

export default CardSearchSettings;

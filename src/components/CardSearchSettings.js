import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParamsSelect from './ParamsSelect';
import CardSearchContext from '../context/CardSearchContext';

const CardSearchSettings = () => {
  const { params, setParams, search } = useContext(CardSearchContext);

  const sorts = ['Newest', 'ATK', 'DEF', 'Level', 'Name', 'Views', 'TCG Release', 'OCG Release'];

  const pages = [10, 50, 100];

  const views = ['Gallery', 'List'];

  const onChange = (e) => {
    const update = {...params, [e.target.name]: e.target.value};
    setParams(update);
    search(update);
  };

  return (
    <>
      <Row>
        <Col sm={12} md={4}>
          <ParamsSelect name="sort" value={params.sort} options={sorts} onChange={onChange} display={sort => `Sort by ${sort}`} />
        </Col>
        <Col sm={12} md={4}>
          <ParamsSelect name="num" value={params.num} options={pages} onChange={onChange} display={page => `Show ${page} items per page`} />
        </Col>
        <Col sm={12} md={4}>
          <ParamsSelect name="view" value={params.view} options={views} onChange={onChange} display={view => `View as ${view}`} />
        </Col>
      </Row>
    </>
  )
};

export default CardSearchSettings;

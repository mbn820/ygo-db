import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import GitInfo from 'react-git-info/macro'

const Footer = () => {
  const gitInfo = GitInfo();

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mt-3 p-1">
        <Container className="d-flex">
          <small>{`Version: ${gitInfo.commit.shortHash} (${gitInfo.branch})`}</small>
          <small className="ml-auto">{`Last Updated Date: ${new Date(gitInfo.commit.date).toLocaleDateString()}`}</small>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;

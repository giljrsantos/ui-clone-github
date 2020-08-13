import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';


const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'giljrsantos'}>
          giljrsantos
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/giljrsantos'}>
          be-the-hero
        </Link>
      </Breadcrumb>

      <p>Contains all of my YouTube lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/giljrsantos/be-the-hero`}>
        <GithubIcon />
        View on GitHub
      </LinkButton>
    </Container>
    
  );
}

export default Repo;
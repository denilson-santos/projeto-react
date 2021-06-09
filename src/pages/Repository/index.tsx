import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './style';
import logoImg from '../../assets/logo.svg';

type RepositoryParams = {
  repository: string;
};

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/35299274?v=4"
            alt="Denilson"
          />

          <div>
            <strong>denilson-santos/projeto-react</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/repositories/${false}`}>
          <div>
            <strong>sssss</strong>
            <p>sdsdsdsssdsdsdsdsdsdsdsdsdsds</p>
          </div>

          <FiChevronRight size={24} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

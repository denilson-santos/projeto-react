import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Form, Title, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositorios no github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/35299274?v=4"
          alt="Denilson da Silva Santos"
        />

        <div>
          <strong>denilson-santos/projeto-react</strong>
          <p>
            Projeto feito no bootcamp da rocketseat com objetivo de aprender
            conceitos sobre react com typescript
          </p>
        </div>

        <FiChevronRight size={24} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/35299274?v=4"
          alt="Denilson da Silva Santos"
        />

        <div>
          <strong>denilson-santos/projeto-react</strong>
          <p>
            Projeto feito no bootcamp da rocketseat com objetivo de aprender
            conceitos sobre react com typescript
          </p>
        </div>

        <FiChevronRight size={24} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/35299274?v=4"
          alt="Denilson da Silva Santos"
        />

        <div>
          <strong>denilson-santos/projeto-react</strong>
          <p>
            Projeto feito no bootcamp da rocketseat com objetivo de aprender
            conceitos sobre react com typescript
          </p>
        </div>

        <FiChevronRight size={24} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/35299274?v=4"
          alt="Denilson da Silva Santos"
        />

        <div>
          <strong>denilson-santos/projeto-react</strong>
          <p>
            Projeto feito no bootcamp da rocketseat com objetivo de aprender
            conceitos sobre react com typescript
          </p>
        </div>

        <FiChevronRight size={24} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/35299274?v=4"
          alt="Denilson da Silva Santos"
        />

        <div>
          <strong>denilson-santos/projeto-react</strong>
          <p>
            Projeto feito no bootcamp da rocketseat com objetivo de aprender
            conceitos sobre react com typescript
          </p>
        </div>

        <FiChevronRight size={24} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

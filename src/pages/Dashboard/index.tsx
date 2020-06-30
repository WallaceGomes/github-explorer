import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Githun Explorer" />
    <Title>Explore Repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/43701494?s=460&u=6f9699f3b36c089cd98bc13bdf51d76223192c29&v=4"
          alt="Wallace Git"
        />
        <div>
          <strong>wallace/applesaopressao</strong>
          <p>
            Aplicação web/mobile, desenvolvida com React, para prevenção
            e rastreamento da lesão por pressão (LPP). (WIP)
          </p>
        </div>

        <FiChevronRight size={50} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/43701494?s=460&u=6f9699f3b36c089cd98bc13bdf51d76223192c29&v=4"
          alt="Wallace Git"
        />
        <div>
          <strong>wallace/applesaopressao</strong>
          <p>
            Aplicação web/mobile, desenvolvida com React, para prevenção
            e rastreamento da lesão por pressão (LPP). (WIP)
          </p>
        </div>

        <FiChevronRight size={50} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/43701494?s=460&u=6f9699f3b36c089cd98bc13bdf51d76223192c29&v=4"
          alt="Wallace Git"
        />
        <div>
          <strong>wallace/applesaopressao</strong>
          <p>
            Aplicação web/mobile, desenvolvida com React, para prevenção
            e rastreamento da lesão por pressão (LPP). (WIP)
          </p>
        </div>

        <FiChevronRight size={50} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/43701494?s=460&u=6f9699f3b36c089cd98bc13bdf51d76223192c29&v=4"
          alt="Wallace Git"
        />
        <div>
          <strong>wallace/applesaopressao</strong>
          <p>
            Aplicação web/mobile, desenvolvida com React, para prevenção
            e rastreamento da lesão por pressão (LPP). (WIP)
          </p>
        </div>

        <FiChevronRight size={50} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

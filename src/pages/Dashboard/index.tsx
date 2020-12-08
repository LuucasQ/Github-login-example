import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/user';

import {FiLogOut, FiGithub, FiUsers} from 'react-icons/fi';
import {BiHomeAlt} from 'react-icons/bi';

import FollowerComponent from '../../components/FollowerComponent';
import { ScreenDashboard, MenuBar, FollowerBar, BioBar, NavBar } from './style'; 
import ItemNavigation from '../../components/ItemNavigation';

function Dashboard() {
  const history = useHistory()
  const { user } = useContext<any>(UserContext);
  const { logout } = useContext<any>(UserContext);

  function handleBack(){
    logout()
    history.push('/')
  }

  function handleRepo(){
    history.push('/repository')
  }
  
  function handleFollowers(){
    history.push('/follower')
  }
  
  function handleFollowing(){
    history.push('/following')
  }

  return (
    <ScreenDashboard>
      <MenuBar>
        <p>#{user.login}</p>
        <h3>Sair <FiLogOut onClick={handleBack} color="#D03434" /></h3>
      </MenuBar>

      <img src={user.avatar_url} alt="avatar_url"/>
      <div className="section-info">
        <div className="edge"></div>
        <div className="info-user">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.location}</p>
        </div>
      </div>

      <FollowerBar>
        <FollowerComponent className="box" amount={user.followers} title="Seguidores"/>
        <FollowerComponent className="box"amount={user.following} title="Seguindo"/>
        <FollowerComponent className="box" amount={user.public_repos} title="Repos"/>
      </FollowerBar>

      <BioBar>
        <div className="edge"></div>
        <div className="section-bio">
          <h1>BIO</h1>
          <p>{user.bio}</p>  
        </div>  
      </BioBar>

      <NavBar>
        <ItemNavigation className="box-navigation" title="Home" icon={<BiHomeAlt size="30px" />} />
        <ItemNavigation onClick={handleRepo} className="box-navigation" title="Repos" icon={<FiGithub size="30px"  />} />
        <ItemNavigation onClick={handleFollowers} className="box-navigation" title="Seguidores" icon={<FiUsers size="30px"  />} />
        <ItemNavigation onClick={handleFollowing} className="box-navigation" title="Seguindo" icon={<FiUsers size="30px"  />} />
      </NavBar>
    </ScreenDashboard>
  );
}

export default Dashboard;
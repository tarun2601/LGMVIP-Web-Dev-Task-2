import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);

  const loadUser = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div>
      <div className="header">
        <h1 className="head-title">LGMVIP-Task-2</h1>
        <button className="head-btn" onClick={loadUser}>
          Get User
        </button>
      </div>
      <div className="users-space">
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="data" style={{ width: '12rem' }}>
            <div className="main">
              <img className="img" src={avatar} alt="image cap" />
              <div className="data-body">
                <h5 className="data-id" key={id}>
                  ID: {id}
                </h5>
                <h5
                  className="data-title"
                  key={id}
                >{`${first_name} ${last_name}`}</h5>
                <p className="data-text" key={id}>
                  {email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }

        


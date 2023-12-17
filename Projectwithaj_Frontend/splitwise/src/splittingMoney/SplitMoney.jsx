import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SplitMoney = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [userOptions, setUserOptions] = useState([]);

  //   const userOptions = [
//     { value: 'user1', label: 'User 1' },
//     { value: 'user2', label: 'User 2' },
//     { value: 'user3', label: 'User 3' },
//     // Add more users as needed
//   ];

  useEffect(() => {
    const fetchUserOptions = async () => {
      try {
        const response = await fetch('http://localhost:8080/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user options');
        }

        const data = await response.json();
        const usernames = data.map(user => user.userName);
        const formattedOptions = usernames.map(username => ({ value: username, label: username }));
        setUserOptions(formattedOptions);
      } catch (error) {
        console.error('Error fetching user options:', error);
      }
    };

    fetchUserOptions();
  }, []); // Run the effect only once when the component mounts

  const addUser = () => {
    if (selectedUser && amount) {
      const newUser = {
        value: selectedUser.value,
        label: selectedUser.label,
        amount: parseFloat(amount),
      };
      setUsers([...users, newUser]);
      setSelectedUser(null);
      setAmount('');
    }
  };

  return (
    <div>
      <h2>Split Money</h2>
      <div>
        <label>
          Select User:
          <Select
            options={userOptions}
            value={selectedUser}
            onChange={(selectedOption) => setSelectedUser(selectedOption)}
            isSearchable
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        <h3>Users for Splitting Money:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.label} - ${user.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      {/* Add your additional splitting money components and logic here */}
    </div>
  );
};

export default SplitMoney;

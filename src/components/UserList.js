import React from 'react';

function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user._id} className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;

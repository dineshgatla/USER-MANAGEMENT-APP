import React from "react";
import { Card, CardContent } from "./ui/card";
import Button from "./ui/button";

const UserList = ({ users, handleEditUser, handleDeleteUser }) => {
  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p>ID: {user.id}</p>
                <p>
                  Name: {user.firstName} {user.lastName}
                </p>
                <p>Email: {user.email}</p>
                <p>Department: {user.department}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleEditUser(user)}>
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserList;

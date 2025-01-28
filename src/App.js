import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import ErrorBoundary from "./components/ErrorBoundary";
import { Pagination } from "./components/ui/pagination";
import axios from "axios";

const UserManagementApp = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formState, setFormState] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const paginatedUsers = response.data.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
      );
      setUsers(paginatedUsers);
      setTotalPages(Math.ceil(response.data.length / usersPerPage));
    } catch (error) {
      setError("Failed to fetch users. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formState
      );
      setUsers([...users, response.data]);
      resetForm();
    } catch (error) {
      setError("Failed to add user. Please try again later.");
    }
  };

  const handleEditUser = (user) => {
    setFormState(user);
    setIsEditing(true);
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${formState.id}`,
        formState
      );
      const updatedUsers = users.map((user) =>
        user.id === formState.id ? formState : user
      );
      setUsers(updatedUsers);
      resetForm();
    } catch (error) {
      setError("Failed to update user. Please try again later.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const newUsers = users
        .filter((user) => user.id !== id)
        .map((user, index) => ({ ...user, id: index + 1 }));
      setUsers(newUsers);
    } catch (error) {
      setError("Failed to delete user. Please try again later.");
    }
  };

  const resetForm = () => {
    setFormState({ id: null, firstName: "", lastName: "", email: "", department: "" });
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">USER MANAGEMENT</h1>

      <ErrorBoundary error={error} />

      <UserForm
        formState={formState}
        handleInputChange={handleInputChange}
        isEditing={isEditing}
        handleSubmit={isEditing ? handleUpdateUser : handleAddUser}
      />

      <UserList
        users={users}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="mt-4"
      />
    </div>
  );
};

export default UserManagementApp;

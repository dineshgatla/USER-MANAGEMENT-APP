import React from "react";
import { Card, CardContent } from "./ui/card";
import Button from "./ui/button";
import { Input } from "./ui/input";

const UserForm = ({ formState, handleInputChange, isEditing, handleSubmit }) => (
  <Card className="mb-4">
    <CardContent>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            name="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={handleInputChange}
            required
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={handleInputChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          <Input
            name="department"
            placeholder="Department"
            value={formState.department}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" className="w-full">
            {isEditing ? "Update User" : "Add User"}
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
);

export default UserForm;

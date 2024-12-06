import React, { useState, useEffect } from "react";
import userList from "../data/user_list.json";
import UserFilter from "./UserFilter";
import UserSearchBar from "./UserSearchBar";
import { Button, Flex, Table, Text, Strong } from "@radix-ui/themes";
import { Separator } from "@radix-ui/themes/dist/cjs/components/context-menu";
import Sidebar from "./Sidebar";
import Header from "./Header";

const UserPage = ({user}) => {
  const [filteredUsers, setFilteredUsers] = useState(user.userRole !== "RegularUser" ? userList : [user]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("userName");
  const [availableRoles, setAvailableRoles] = useState([]);

  useEffect(() => {
    const roles = [...new Set(userList.map((user) => user.userRole))];
    setAvailableRoles(roles);
    if (user.userRole === "RegularUser") {
        userList = [user];
    }
  }, []);

  useEffect(() => {
    setFilteredData();
  }, [selectedRoles, searchQuery]);

  const handleSearch = () => {
    setSearchQuery(searchQuery);
    setSearchField(searchField);
    setFilteredData();
  };

  const setFilteredData = () => {
    let filtered = userList;
    if (selectedRoles.length > 0) {
      filtered = userList.filter((user) => selectedRoles.includes(user.userRole));
    }
    
    if (searchQuery !== "") {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((user) =>
        user[searchField].toLowerCase().includes(lowercasedQuery)
      );
    }
    setFilteredUsers(filtered);
  }

  if (user.userRole === "Viewer") {
    return <p>Access denied: You do not have permission to view this page.</p>;
  }

  const inviteButton = user.userRole === "Admin" ? (
    <Button color="teal" onClick={() => alert("Invite User functionality")}>Invite User</Button>
  ) : null;

  return (
    <Flex m='-2'>
      <Sidebar showUsers={user.userRole !== "Viewer"}/>
      <Flex direction="column" p="5">
        <Header title={"User List"} />
        <Flex gap="3" mb="4">
        <UserSearchBar onSearch={handleSearch} query={searchQuery} setQuery={setSearchQuery} field={searchField} setField={setSearchField} />
        {inviteButton}
        </Flex>
        <Text size="3" color="teal" mt="3">
          <Strong><Flex gap="2" align="center"><p>Selected</p><div style={{display:"flex", borderRadius:"50%", width:"30px", height:"30px",border:"2px solid #12A594", justifyContent:"center", alignItems:"center"}}>{filteredUsers.length}</div></Flex></Strong>
        </Text>
        <Separator style={{height:"3px", backgroundColor:"black"}}></Separator>
        <UserFilter roles={availableRoles} selectedRoles={selectedRoles} setSelectedRoles={setSelectedRoles}  />
        <Separator></Separator>
        <Table.Root mt="3">
        <Table.Header style={{ borderBottom: '3px solid #000' }}>
            <Table.Row>
              <Table.ColumnHeaderCell align="center">User Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">User Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">User Role</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">User Phone</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">Created At</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">Last Logged In At</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredUsers.map((user) => (
              <Table.Row key={user.userName}>
                <Table.RowHeaderCell >{user.userName}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{user.userEmail}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{user.userRole}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{user.userPhone}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{user.createdAt}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{user.lastLoggedInAt}</Table.RowHeaderCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </Flex>
  );
};

export default UserPage;

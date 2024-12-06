import React, { useState, useEffect } from "react";
import taskList from "../data/task_list.json";
import TaskFilter from "./TaskFilter";
import TaskSearchBar from "./TaskSearchBar";
import { Button, Flex, Table, Text, Strong } from "@radix-ui/themes";
import { Separator } from "@radix-ui/themes/dist/cjs/components/context-menu";
import Sidebar from "./Sidebar";
import Header from "./Header";

const TaskPage = ({user}) => {
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchField, setSearchField] = useState("taskName");
    const [availableStatuses, setAvailableStatuses] = useState([]);
    const [availableTypes, setAvailableTypes] = useState([]);


  useEffect(() => {
    const statuses = [...new Set(taskList.map((task) => task.status))];
    setAvailableStatuses(statuses);
    const types = [...new Set(taskList.map((task) => task.taskType))];
    setAvailableTypes(types);

    let initialTasks = taskList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (user.userRole === "RegularUser") {
        initialTasks = taskList.filter((task) => task.reporter === user.userName);
    }
    else if (user.userRole === "Viewer") {
        initialTasks = taskList.filter((task) => task.assignee === user.userName);
    }
    setFilteredTasks(initialTasks);
    taskList = initialTasks;
  }, []);

  useEffect(() => {
    setFilteredData();
  }, [selectedStatuses, selectedTypes, searchQuery]);

  const handleSearch = () => {
    setSearchQuery(searchQuery);
    setSearchField(searchField);
    setFilteredData();
  };

  const setFilteredData = () => {
    let filtered = taskList;
    if (selectedTypes.length > 0) {
      filtered = taskList.filter((task) => selectedTypes.includes(task.taskType));
    }

    if (selectedStatuses.length > 0) {
        filtered = filtered.filter((task) => selectedStatuses.includes(task.status));
    }
    
    if (searchQuery !== "") {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((user) =>
        user[searchField].toLowerCase().includes(lowercasedQuery)
      );
    }
    setFilteredTasks(filtered);
    console.log(filteredTasks)
  }

  const createTaskButton = user.userRole !== "Viewer" ? (
    <Button color="teal" onClick={() => alert("Create task functionality")}>Create Task</Button>
  ) : null;

  return (
    <Flex m='-2'>
        <Sidebar showUsers={user.userRole !== "Viewer"}/>
        <Flex direction="column" p="5">
        <Header title={"Task List"} />
        <Flex gap="3" mb="4">
        <TaskSearchBar onSearch={handleSearch} query={searchQuery} setQuery={setSearchQuery} field={searchField} setField={setSearchField} />
        {createTaskButton}
        </Flex>
        <Text size="3" color="teal" mt="3">
          <Strong><Flex gap="2" align="center"><p>Selected</p><div style={{display:"flex", borderRadius:"50%", width:"30px", height:"30px",border:"2px solid #12A594", justifyContent:"center", alignItems:"center"}}>{filteredTasks.length}</div></Flex></Strong>
        </Text>
        <Separator style={{height:"3px", backgroundColor:"black"}}></Separator>
        <TaskFilter types={availableTypes} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} statuses={availableStatuses} selectedStatuses={selectedStatuses} setSelectedStatuses={setSelectedStatuses}  />
        <Separator></Separator>
        <Table.Root mt="3">
        <Table.Header style={{ borderBottom: '3px solid #000' }}>
            <Table.Row>
                <Table.ColumnHeaderCell align="center">Task Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">Task Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">Created At</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">Due Date</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">Reporter</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">Description</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">담당자(Assignee)</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell align="center">상태(Status)</Table.ColumnHeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
            {filteredTasks.map((task) => (
                <Table.Row key={`${task.taskName}-${task.taskType}`}>
                <Table.RowHeaderCell >{task.taskName}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.taskType}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.createdAt}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.dueDate}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.reporter}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.taskDescription}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.assignee}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{task.status}</Table.RowHeaderCell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table.Root>
        </Flex>
    </Flex>
  );
};

export default TaskPage;

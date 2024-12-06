import { Select, TextField, Flex } from "@radix-ui/themes";
import Image from "next/image";

const TaskSearchBar = ({ query, setQuery, field, setField }) => {
  return (
    <Flex gap="2">
      <Select.Root
        value={field}
        onValueChange={(value) => { 
            setField(value); 
        }}>
        <Select.Trigger/>
        <Select.Content>
            <Select.Item value="taskName">Task Name</Select.Item>
            <Select.Item value="reporter">Reporter</Select.Item>
            <Select.Item value="taskDescription">Description</Select.Item>
            <Select.Item value="assignee">담당자 (Assignee)</Select.Item>
        </Select.Content>
      </Select.Root>
      <TextField.Root
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
    <TextField.Slot></TextField.Slot>
      <TextField.Slot>
        <Image
          src="/assets/magnifying-glass.svg"
          alt="Magnifying Glass"
          width={20}
          height={20}
        />
      </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};

export default TaskSearchBar;

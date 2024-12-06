import { Select, TextField, Flex } from "@radix-ui/themes";
import Image from "next/image";

const UserSearchBar = ({ query, setQuery, field, setField }) => {
  return (
    <Flex gap="2">
      <Select.Root
        value={field}
        onValueChange={(value) => { 
            setField(value); 
        }}>
        <Select.Trigger/>
        <Select.Content>
            <Select.Item value="userName">User Name</Select.Item>
            <Select.Item value="userEmail">User Email</Select.Item>
            <Select.Item value="userPhone">User Phone</Select.Item>
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

export default UserSearchBar;

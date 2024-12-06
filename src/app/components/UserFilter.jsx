import { Checkbox, Flex, Text, Strong } from "@radix-ui/themes";
const UserFilter = ({ roles, selectedRoles, setSelectedRoles }) => {
  const handleCheckboxChange = (role) => {
    setSelectedRoles((prevSelectedRoles) => {
      if (prevSelectedRoles.includes(role)) {
        return prevSelectedRoles.filter((r) => r !== role);
      } else {
        return [...prevSelectedRoles, role];
      }
    });
  };

  return (
    <Flex gap="6" style={{padding:"3px"}}>
      <Text><Strong>사용자 권한</Strong></Text>
      <Text as="label" size="2">
        <Flex as="span" gap="2">
        <Checkbox
          value="select-all"
          color="teal"
          checked={selectedRoles.length === roles.length}
          onCheckedChange={() => {
            if (selectedRoles.length === roles.length) {
              setSelectedRoles([]);
            } else {
              setSelectedRoles(roles);
            }
          }}
        />
        ALL
        </Flex>
      </Text>

    {roles.map((role) => (
        <div key={role}>
            <Text as="label" size="2">
            <Flex as="span" gap="2">
                    <Checkbox
                        value="select-all"
                        color="teal"
                        checked={selectedRoles.includes(role)}
                        onCheckedChange={() => handleCheckboxChange(role)}
                    />
                    {role}
                </Flex>
            </Text>
        </div>
    ))}
    </Flex>
  );
};

export default UserFilter;

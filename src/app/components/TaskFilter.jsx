import { Checkbox, Flex, Text, Strong } from "@radix-ui/themes";
const TaskFilter = ({ types, selectedTypes, setSelectedTypes, statuses, selectedStatuses, setSelectedStatuses }) => {
  const handleTypeCheckboxChange = (type) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };
  const handleStatusCheckboxChange = (status) => {
    setSelectedStatuses((prevSelectedStatuses) => {
      if (prevSelectedStatuses.includes(status)) {
        return prevSelectedStatuses.filter((s) => s !== status);
      } else {
        return [...prevSelectedStatuses, status];
      }
    });
  };

  return (
    <Flex direction="column">
        <Flex gap="5" style={{padding:"3px"}}>
        <Text mr="5"><Strong>Task Type</Strong></Text>
        <Text as="label" size="2">
        <Flex as="span" gap="2">
        <Checkbox
            value="select-all"
            color="teal"
            checked={selectedTypes.length === types.length}
            onCheckedChange={() => {
            if (selectedTypes.length === types.length) {
                setSelectedTypes([]);
            } else {
                setSelectedTypes(types);
            }
            }}
        />
        ALL
        </Flex>
        </Text>

    {types.map((type) => (
        <div key={type}>
            <Text as="label" size="2">
            <Flex as="span" gap="2">
                    <Checkbox
                        color="teal"
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => handleTypeCheckboxChange(type)}
                    />
                    {type}
                </Flex>
            </Text>
        </div>
    ))}
    </Flex>

    <Flex gap="6" style={{padding:"3px"}}>
      <Text mr="9"><Strong>상태</Strong></Text>
      <Text as="label" size="2">
        <Flex as="span" gap="2">
        <Checkbox
          value="select-all"
          color="teal"
          checked={selectedStatuses.length === statuses.length}
          onCheckedChange={() => {
            if (selectedStatuses.length === statuses.length) {
              setSelectedStatuses([]);
            } else {
              setSelectedStatuses(statuses);
            }
          }}
        />
        ALL
        </Flex>
      </Text>

    {statuses.map((status) => (
        <div key={status}>
            <Text as="label" size="2">
            <Flex as="span" gap="2">
                    <Checkbox
                        color="teal"
                        checked={selectedStatuses.includes(status)}
                        onCheckedChange={() => handleStatusCheckboxChange(status)}
                    />
                    {status}
                </Flex>
            </Text>
        </div>
    ))}
    </Flex>


    </Flex>
    
  );
};

export default TaskFilter;

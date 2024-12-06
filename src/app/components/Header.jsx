import { Flex, Text, Heading, Strong } from "@radix-ui/themes";
import Image from "next/image";
import { useUserContext } from "../contexts/UserContext";

const Header = ({title}) => {
    const { user } = useUserContext();
    return (
    <Flex justify="between">
        <Heading mb="9" size="7">{title}</Heading>
        <Flex gap="3">
            <Text color="blue" size="2"><Strong>{user.userName}</Strong></Text>
            <Text color="blue" size="2"><Strong>{user.userRole}</Strong></Text>
            <Image
              src="/assets/person.svg"
              alt="Person"
              width={20}
              height={20}
            />
        </Flex>
    </Flex>
    );
}

export default Header;
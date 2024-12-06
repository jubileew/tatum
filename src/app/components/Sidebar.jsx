import { Button, Flex, Strong } from "@radix-ui/themes";
import Link from "next/link";

const Sidebar = ({showUsers}) => {
    return (
        <Flex direction="column" gap="3" style={{position:"sticky", width:"15vw", height:"150vh", backgroundColor:"#12A594", paddingTop:"10vh", paddingLeft:"10px", paddingRight:"10px"}}>
            {showUsers && <Button color="teal" style={{justifyContent:"left"}}>
                <Link href="/users" style={{color:"white", textDecoration:"none"}}><Strong>Users</Strong></Link>
            </Button>}
            <Button color="teal" style={{justifyContent:"left"}}>
                <Link href="/tasks" style={{color:"white", textDecoration:"none"}}><Strong>Tasks</Strong></Link>
            </Button>
        </Flex>
    );
}

export default Sidebar;
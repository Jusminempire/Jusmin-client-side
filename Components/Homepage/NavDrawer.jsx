import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Box } from "@mantine/core";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

function NavDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Items"
        position="left"
        size="xs"
        overlayProps={{ opacity: 0.5, blur: 4 }} // Use opacity instead of backgroundOpacity
      >
        <Box className="">ytufyyu</Box>
      </Drawer>

      <Box onClick={open} style={{ fontSize: "30px" }}>
        <FiMenu />
      </Box>
    </>
  );
}
export default NavDrawer;

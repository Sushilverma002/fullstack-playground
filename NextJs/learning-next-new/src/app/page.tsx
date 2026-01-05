import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import { SquareDot } from "lucide-react";

export default function Home() {
  return (
    <>
      <div>{process.env.NEXT_PUBLIC_API_BASE_URL}</div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button
          variant="contained"
          href="https://mui.com/material-ui/react-button/"
        >
          Link
        </Button>
      </Stack>
      <Person2SharpIcon className="w-10 h-20" />
      <SquareDot />
    </>
  );
}

import GitHubCalendar from "react-github-calendar";
import { Box } from "@chakra-ui/react";


export function GithubCalendarComp() {
  return (
    <Box className="github-calendar" mt={0}>
      <GitHubCalendar username="ZekoSNB" colorScheme="dark" hideMonthLabels hideTotalCount hideColorLegend />
    </Box>
  )
}

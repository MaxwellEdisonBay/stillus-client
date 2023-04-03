import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Stillus
          </Typography>
          <div>
            Our craft distillery produces spirits in small batches which can be
            as small as 100 bottles. We have the flexibility to experiment and
            produce limited editions of various products. If you need a good
            drink, make sure you haven’t missed it here at Stillus!
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchases</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Contact Us
          </Typography>
          <Typography mb="30px">
            {" "}
            2404 PRINCE EDWARD COUNTY RD 1, BLOOMFIELD, ON K0K 1G0, CANADA
          </Typography>
          <Typography mb="30px">info@stillus.ca</Typography>
          <Typography mb="30px">(416) 271-6150</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

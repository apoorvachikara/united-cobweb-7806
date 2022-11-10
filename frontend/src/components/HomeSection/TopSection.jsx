import React from "react";
import "../../styles/TopSection.css";
import { Box, Button } from "@chakra-ui/react";
function TopSection() {
  const data = [
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-laptops-686b0d25-dbcf-484f-8c88-046275bf8ef5.jpg;maxWidth=220", name:"Laptop"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tv-364a6674-a730-4b5b-a7c9-94d55f7e82b5.jpg;maxWidth=220", name:"TVs"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220", name:"Apple"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-vg-d7f85256-6a3f-4f54-872d-c89c69954d73.jpg;maxWidth=220", name:"Consoles"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-phones-4e886f8b-2e80-47db-b8eb-1d10332ffd44.jpg;maxWidth=220", name:"Mobile Phones"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-mappls-561d66ab-817b-4d28-b076-5d889afff7a2.jpg;maxWidth=220", name:"Major Appliances"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-laptops-686b0d25-dbcf-484f-8c88-046275bf8ef5.jpg;maxWidth=220", name:"Laptop"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tv-364a6674-a730-4b5b-a7c9-94d55f7e82b5.jpg;maxWidth=220", name:"TVs"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220", name:"Apple"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-vg-d7f85256-6a3f-4f54-872d-c89c69954d73.jpg;maxWidth=220", name:"Consoles"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-phones-4e886f8b-2e80-47db-b8eb-1d10332ffd44.jpg;maxWidth=220", name:"Mobile Phones"},
    {img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-mappls-561d66ab-817b-4d28-b076-5d889afff7a2.jpg;maxWidth=220", name:"Major Appliances"},
    
  ]
  return (
    <Box className="Top_container">
      <Box className="img_container">
        <Box className="content_container">
          <Box className="p_tag_head">
            <p>Black Friday Deals</p>
            <p>right now</p>
            <p>Start saving with Black Friday prices today.</p>
          </Box>
          <Box className="p_tag_back">
            <p>Limited quantity. No rainchecks</p>
            <p>See Black Friday FAQs</p>
            <Button>shop the deals</Button>
          </Box>
        </Box>
        <Box className="item_container">
          <p>Shop Deals by Category</p>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopSection;

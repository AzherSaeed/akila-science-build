import React from "react";
import { Card, CardContent, Typography, ListItem } from "@mui/material";

function ProjectCard() {
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        sx={{
          maxWidth: "15vw",
          maxHeight: "40vh",
          minHeight: "40vh",
        }}
      >
        <CardContent
          style={{ display: "flex", flexDirection: "column" }}
          sx={{
            paddingBottom: "10px",
          }}
        >
          <Typography fontSize="2rem" fontWeight="600">
            Demo Project - California Housing{" "}
          </Typography>
        </CardContent>
        <CardContent
          style={{ flexGrow: "2" }}
          sx={{
            paddingTop: "10px",
            height: "15",
            overflow: "scroll",
          }}
        >
          <Typography
            gutterBottom={true}
            fontSize="1.5rem"
            fontWeight="600"
            sx={{ textAlign: "center" }}
          >
            Project Description
          </Typography>
          <Typography gutterBottom={true} fontSize="1.2rem" fontWeight="600">
            Lorem nihil libero totam velit non! Rem debitis corporis ab possimus
            officiis Eaque fuga reprehenderit quidem recusandae quo soluta,
            reprehenderit expedita. Laboriosam asperiores quidem culpa debitis
            reiciendis Consequatur laboriosam ratione facilis ipsam nemo Quidem
            atque omnis unde veniam neque, dolorem. Odio fugiat excepturi ipsam
            nihil minima Dolor ducimus quae beatae deleniti dolorum? Illum
            veniam laboriosam veritatis dolore delectus. Nesciunt dolorum
            temporibus ducimus illum tempore! Dolorem mollitia dicta veniam
            alias iure. Vel incidunt nostrum quis fuga officia in culpa.
            Expedita tenetur accusantium quibusdam sed accusamus sit, amet
            Asperiores assumenda odio tempora optio id? Id neque sunt rem natus
            doloremque voluptatibus Tenetur?
          </Typography>{" "}
        </CardContent>
        <CardContent
          sx={{
            height: "10vh",
            padding: "0px",
            marginBottom: "auto",
          }}
        >
          <Typography gutterBottom={true} fontSize="1.0rem" fontWeight="600">
            <ListItem
              sx={{
                textAlign: "center",
              }}
              disablePadding={true}
            >
              Last Accessed: <br />
              March 4, 2022 4:03pm{" "}
            </ListItem>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectCard;

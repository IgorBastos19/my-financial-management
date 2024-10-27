// CardActionsContent.jsx
import React from "react";
import { CardActions } from "@mui/material";
import ButtonCard from "../ButtonCard";
import Text from "../Text";

const CardActionsContent = ({ buttonText, signupText, buttonLink }) => {
  return (
    <CardActions sx={{ flexDirection: "column", alignItems: "center" }}>
      <ButtonCard nameButton={buttonText} buttonLink={buttonLink} />
      {signupText && (
        <Text text={signupText.text} href={signupText.href} />
      )}{" "}
      {/* Renderiza apenas se signupText não for null */}
    </CardActions>
  );
};

export default CardActionsContent;

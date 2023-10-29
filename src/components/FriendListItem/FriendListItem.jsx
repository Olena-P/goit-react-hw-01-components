import React from "react";
import {
  ListItem,
  StatusIndicator,
  AvatarImage,
  NameText,
} from "./FriendListItem.styled";

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <ListItem>
      <StatusIndicator data-is-online={isOnline ? "true" : "false"} />
      <AvatarImage src={avatar} alt={name} />
      <NameText>{name}</NameText>
    </ListItem>
  );
};

export default FriendListItem;

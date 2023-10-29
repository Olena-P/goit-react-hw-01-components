import FriendListItem from "../FriendListItem/FriendListItem";
import { FriendListContainer } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  if (!friends || friends.length === 0) {
    return <p>No friends to display.</p>;
  }
  return (
    <FriendListContainer>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </FriendListContainer>
  );
};

export default FriendList;

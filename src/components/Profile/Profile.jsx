import {
  ProfileContainer,
  Name,
  Description,
  Avatar,
  Tag,
  Location,
  Stats,
  StatItem,
  Label,
  Quantity,
} from "./Profile.styled";

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <div>
          <Name $variant="primary">{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </div>
      </Description>

      <Stats>
        <StatItem>
          <Label>Followers: </Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views: </Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes: </Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileContainer>
  );
};

export default Profile;

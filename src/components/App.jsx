import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatisticItem } from './Statistics/StatisticItem';
import { FriendList } from './FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats">
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticItem id={id} label={label} percentage={percentage} />
          );
        })}
      </Statistics>
      <FriendList friends={friends} />
    </>
  );
};

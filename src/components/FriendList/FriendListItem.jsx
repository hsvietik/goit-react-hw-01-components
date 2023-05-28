import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span className={clsx(css.status, { [css.isOnline]: isOnline })}></span>
      <img class="avatar" src={avatar} alt={`User ${name} avatar`} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

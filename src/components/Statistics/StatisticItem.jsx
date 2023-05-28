import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomcolor';
import css from './Statistics.module.css';
export const StatisticItem = ({ id, label, percentage }) => {
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{`${percentage}%`}</span>
    </li>
  );
};
StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{children}</ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
};

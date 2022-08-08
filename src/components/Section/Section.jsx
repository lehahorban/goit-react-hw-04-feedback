import style from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      <p className={style.section}>{title}</p>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
console.log(object);

export default Section;

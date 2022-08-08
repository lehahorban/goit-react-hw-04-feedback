import style from './Style.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={style.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

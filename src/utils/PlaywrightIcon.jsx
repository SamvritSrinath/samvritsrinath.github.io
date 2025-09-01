import PropTypes from 'prop-types';

const PlaywrightIcon = ({size = 24, color = '#2EAD33', ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      role="img"
      {...props}>
      <title>Playwright</title>
      <path d="m12 24 .39-.78L18 12l-5.61-11.22L12 0l-.39.78L6 12l5.61 11.22zM12 20.31 8.24 12 12 3.69 15.76 12z" />
    </svg>
  );
};

PlaywrightIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default PlaywrightIcon;

import PropTypes from 'prop-types';
function Header({ text = 'Feedback UI' }) {
  const headerStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95',
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;

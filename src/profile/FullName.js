import PropTypes from 'prop-types'; // ES6
const FullName = (props) => {
   
    return (
    < >
    <h2 className="full-title" style={{textTransform: "uppercase"}}>
    {props.firstName} {props.lastName}
    </h2>
    {props.children}
    </>
    );
};
FullName.defaultProps = {
    firstName:"fatma",
    lastName:"Daly"
  }
  FullName.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
     
  };
export default FullName;
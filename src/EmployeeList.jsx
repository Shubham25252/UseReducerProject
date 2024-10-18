import PropTypes from 'prop-types';

const EmployeeList = (props) => {
  // console.log(props);
  return (
    <>
      <h1>EmployeeList</h1> 
      {props.employees.map((data, index) => (
        <div key={index} style={{padding:"20px", boxShadow:"4px 4px 4px grey"}}>
          {data.first_name} {data.last_name}- {data.age} years old
          <button onClick={()=>props.dispatch({type:"Add_To_Team_list",payload:data})}>Add</button>
        </div>
      ))}
    </>
  );
};

// Props validation
EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  disptach: PropTypes.func.isRequired,
};

export default EmployeeList;

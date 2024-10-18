import EmployeeList from "./EmployeeList";
import TeamList from "./TeamList";
import "./App.css";
import EmployeesJson from "./employees.json";
import { useReducer, useEffect } from "react";

function App() {
  // Reducer function
  const reducerFn = (state, action) => {
    console.log("action Dispatched", action);
    console.log("State Dispatched", state);
    
    // Add to team list
    if (action.type === "Add_To_Team_list") {
      const updatedData = {
        ...state,
        // employeeList:[...state.employeeList]
        teamList: [...state.teamList, action.payload],
        employeeList: state.employeeList.filter((item) => item !== action.payload)
      };
      return updatedData;
    }
    
    // Remove from team list
    else if (action.type === "Remove_From_Team_list") {
      const updatedData = {
        ...state,
        teamList: state.teamList.filter((item) => item !== action.payload),
        employeeList: [...state.employeeList, action.payload]
      };
      return updatedData;
    }

    // Calculate average age
    else if (action.type === "Calculate_Avg_Age") {
      const totalAge = state.teamList.reduce((sum, item) => sum + item.age, 0);
      const average = state.teamList.length > 0 ? totalAge / state.teamList.length : 0;

      const updatedData = {
        ...state,
        averageAge: average,
      };
      return updatedData;
    }

    // Sort by age
    else if (action.type === "Sort_the_age") {
      const sortedList = [...state.teamList].sort((a, b) => a.age - b.age);

      const updatedData = {
        ...state,
        teamList: sortedList,
      };
      return updatedData;
    }

    return state;
  };

  // Initial state and useReducer setup
  const [masterdata, dispatch] = useReducer(reducerFn, {
    employeeList: EmployeesJson,
    teamList: [],
    averageAge: 0,
  });

  // UseEffect to auto-calculate and sort when teamList changes
  // useEffect(() => {
  //   // Dispatch actions for calculating average age and sorting the list
  //   dispatch({ type: "Calculate_Avg_Age" });
  //   dispatch({ type: "Sort_the_age" });
  // }, [masterdata.teamList]); // Dependency array with teamList

  return (
    <>
      <div>
        <h1>Employee App</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", padding: "20px" }}>
          <div style={{ border: "2px solid black", width: "40%", padding: "10px", borderRadius: "10px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <EmployeeList employees={masterdata.employeeList} dispatch={dispatch} />
          </div>
          <div style={{ border: "2px solid black", width: "40%", padding: "10px", borderRadius: "10px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <TeamList TeamEmployees={masterdata.teamList} averageAge={masterdata.averageAge} dispatch={dispatch} />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App;

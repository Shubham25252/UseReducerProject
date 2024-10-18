const TeamList = (props) => {
    // console.log("TeamList props:",props);
    return (
        <>
            <h1>TeamList</h1>
            <div>
                {props.TeamEmployees.map((data, index) => (
                    <div key={index} style={{ padding: "20px", boxShadow: "4px 4px 4px grey" }}>
                        {data.first_name} {data.last_name}- {data.age} years old
                        <button onClick={()=>props.dispatch({type:"Remove_From_Team_list",payload:data})}>Remove</button>
                    </div>
                ))}
                Average Age:{props.averageAge} <br />
                {/* <button onClick={()=>props.dispatch({type:"Calculate_Avg_Age",payload:data})}>Calculate Average Age</button> */}
                <button onClick={() => props.dispatch({ type: "Calculate_Avg_Age",payload:{}})}> Calculate Average Age</button>

                <button onClick={()=>props.dispatch({type:"Sort_the_age",payload:{}})}>Sort By Age</button>
            </div>
        </>
    )
}
export default TeamList;
const Funcdata = ({ data }) => {
    return (
        <div>
            <h1 align="center">Function Based Component</h1>
            <div>
                <table className="main-box" border={15}>
                    <thead>
                        <tr>
                            <th scope="col">Grid</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Empdeg</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Department</th>
                            <th scope="col">Country</th>
                            <th scope="col">State</th>
                            <th scope="col">City</th>
                            <th scope="col">Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val) => {
                                return (
                                    <tr key={val.empid} >
                                        <th scope="row">{val.empid}</th>
                                        <th className="midel">{val.empname}</th>
                                        <th className="midel">{val.empemail}</th>
                                        <th className="midel">{val.empphone}</th>
                                        <th className="midel">{val.empdeg}</th>
                                        <th className="midel">{val.empsalary}</th>
                                        <th className="midel">{val.empdepartment}</th>
                                        <th className="midel">{val.empaddress.country}</th>
                                        <th className="midel">{val.empaddress.state}</th>
                                        <th className="midel">{val.empaddress.city}</th>
                                        <th className="midel">{val.empaddress.area}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Funcdata;
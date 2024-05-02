import { Component } from "react";

class Record extends Component {
    constructor(props) {
        super()
        this.state = {
            record: props.record
        }
    }
    render() {
        return (
            <div className="box">
                <h1 align="center">Class Based Component</h1>
                <div>
                    <table className="main-box" border={15}>
                        <thead>
                            <tr>
                                <th scope="col">GRID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Course</th>
                                <th scope="col">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.record.map((val)=>{
                                    return(
                                        <tr key={val.grid}>
                                            <th scope="row">{val.grid}</th>
                                            <th>{val.name}</th>
                                            <th>{val.email}</th>
                                            <th>{val.password}</th>
                                            <th>{val.course}</th>
                                            <th>{val.city}</th>
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
}

export default Record
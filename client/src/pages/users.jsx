/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const userData = async () => {
            const response = await fetch("http://localhost:8000/allData");
            const data = await response.json();
            setUsers(data.users);

        }
        userData();
    }, []);

    function displayUser(id) {
        navigate(`/screen/${id}`)
    }


    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Business Arena</th>
                        <th>Employees</th>
                        <th>Street Nr</th>
                        <th>Additional Info</th>
                        <th>Zip Code</th>
                        <th>Place</th>
                        <th>Country</th>
                        <th>Code</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} onClick={() => { displayUser(user._id) }}>
                            <td>{user.title}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.position}</td>
                            <td>{user.businessArena}</td>
                            <td>{user.employees}</td>
                            <td>{user.streetNr}</td>
                            <td>{user.additionalInfo}</td>
                            <td>{user.zipCode}</td>
                            <td>{user.place}</td>
                            <td>{user.country}</td>
                            <td>{user.code}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td className="d-flex flex-column">

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )

}
export default Users;
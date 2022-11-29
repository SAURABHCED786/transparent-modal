import React from 'react'
function Admin(props) {
  const { admin } = props;
  const data = [] = admin;
  return (
    <div>
      <h3> admin data</h3>
      <table align='center'>
        <tr>
          <th>User Id</th>
          <th>Username</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Office</th>
        </tr>
        {
          data.map((a, i) => {
            return (
              <tr align="center" key={i} >
                <td>{a.adminUserId}</td>
                <td>{a.username}</td>
                <td>{a.contact}</td>
                <td>{a.address}</td>
                <td>{a.office}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Admin

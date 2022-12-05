import React from 'react'

const TrackerUsers = () => {
  return (
    <div>
      <div className="px-2">
        <table>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>IP address</th>
            <th>Latest Active</th>
            <th>History Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Ernst Handel</td>
            <td>zhtet1636@gmail.com</td>
            <td>User</td>
            <td>43.245.46.186</td>
            <td>2024-10-29</td>
            {/* <td>firefox 107.0 window 10</td> */}
            <td>Log out</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tornament Brian</td>
            <td>tornamentBrian@gmail.com</td>
            <td>Admin</td>
            <td>43.245.46.187</td>
            <td>2024-10-29</td>
            {/* <td>firefox 107.0 window 10</td> */}
            <td>Delete user (112258643985731)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Heathcliff Earnshaw</td>
            <td>heathcliffEnshaw@gmail.com</td>
            <td>SuperAdmin</td>
            <td>43.245.46.188</td>
            <td>2024-10-29</td>
            {/* <td>firefox 107.0 window 10</td> */}
            <td>Add user (458795178982148)</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TrackerUsers
import React from "react";

const AdminList = () => {
  return (
    <div className="px-2">
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Username/Email</th>
          <th>Password(Encrypted)</th>
          <th>Last Active</th>
          <th>Role</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Naing Pyae</td>
          <td>nph</td>
          <td>db854*****</td>
          <td>28-09-2022(08:58 PM)</td>
          <td>Admin</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tester</td>
          <td>tester</td>
          <td>f14a0*****</td>
          <td>23-11-2022(02:16 PM)</td>
          <td>Admin</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Thutawave</td>
          <td>thutawave@gmail.com</td>
          <td>36484*****</td>
          <td>26-10-2022 (11:09 PM)</td>
          <td>Admin</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>4</td>
          <td>dhammasayti</td>
          <td>dhammasayti@gmail.com</td>
          <td>093e8*****</td>
          <td>30-11-2021 (10:40 PM )</td>
          <td>Admin</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>
      </table>
    </div>
  );
};

export default AdminList;

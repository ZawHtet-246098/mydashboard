import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";

import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const AdminList = () => {
  const { admins, setAdmins } = useGlobalContext();

  console.log(admins);

  useEffect(() => {
    fetch("http://aptm-b.ethical-digit.com/users?role=admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
    })
      .then((res) => res.json())
      .then((json) => setAdmins(json));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://aptm-b.ethical-digit.com/users/:${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

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
        {admins?.users?.map((detail, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>db854*****</td>
            <td>28-09-2022(08:58 PM)</td>
            <td>{detail.role}</td>
            <td>
              <FaEdit style={{ fontSize: "1.2rem", color: "blue" }} />
            </td>
            <td>
              <AiFillDelete
                onClick={(e) => handleDelete(detail._id)}
                style={{ fontSize: "1.2rem", color: "darkred" }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AdminList;

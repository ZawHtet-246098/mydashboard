import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { PaginatedItems } from "./Pagination";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";

const MemberList = () => {
  const { setUsers, users } = useGlobalContext();
  // const [users, setUsers] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch(`http://aptm-b.ethical-digit.com/users?role=user&sort=${filter}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
    })
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, [filter]);

  const handleAdminDelete = (id) => {
    console.log("====================================");
    console.log(`http://aptm-b.ethical-digit.com/users/${id}`);
    console.log("====================================");
    fetch(`http://aptm-b.ethical-digit.com/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
    })
      .then((res) => res.json())
      .then((json) =>
        fetch(
          `http://aptm-b.ethical-digit.com/users?role=user&sort=${filter}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
            },
          }
        )
          .then((res) => res.json())
          .then((json) => setUsers(json))
      );
  };

  // console.log(users.users[0].packageExpiresAt.split("T")[0]);

  return (
    <div className="px-2">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 m-1"
        name="cars"
        id="cars"
      >
        <option defaultValue={filter}>filter</option>
        <option value="a_to_z">A to Z</option>
        <option value="z_to_a">Z to A</option>
      </select>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Username/Email</th>
          <th>Expire Date</th>
          <th>Preminium</th>
          <th>Status</th>
          <th>Last Active</th>
          <th>Delete</th>
        </tr>
        {users?.users.map((detail, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{detail.name}</td>
            <td>{detail.phone}</td>
            <td>{detail.email}</td>
            <td>
              {/* {detail.packageExpiresAt}{" "} */}
              {`${
                detail.packageExpiresAt
                  ? detail.packageExpiresAt?.split("T")[0]
                  : "null"
              }`}
            </td>
            {detail.premium === "true" ? (
              <td style={{ color: "green" }}>Active</td>
            ) : (
              <td style={{ color: "darkYellow" }}>None</td>
            )}
            {/* <td>{detail.premium === "true" ? "Active" : "None"}</td> */}
            <td>
              {detail.status === "active" ? (
                <IoIosCheckmarkCircle
                  style={{ fontSize: "1.2rem", color: "green" }}
                />
              ) : (
                <AiFillCloseCircle
                  style={{ fontSize: "1.2rem", color: "#D0463B" }}
                />
              )}
            </td>
            <td>03-10-2022(12:39 AM)</td>
            <td>
              <AiFillDelete
                onClick={(e) => handleAdminDelete(detail._id)}
                style={{ color: "#D0463B", fontSize: "1.2rem" }}
              />
            </td>
          </tr>
        ))}

        {/* <tr>
          <td>2</td>
          <td>Moctezuma</td>
          <td>09254078328</td>
          <td>zhtet1636@gmail.com</td>
          <td>2024-10-29</td>
          <td>None</td>
          <td>true</td>
          <td>03-10-2022(12:39 AM)</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ernst Handel</td>
          <td>09763348773</td>
          <td>zhtet1636@gmail.com</td>
          <td>2024-10-29</td>
          <td>None</td>
          <td>true</td>
          <td>03-10-2022(12:39 AM)</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Roland Mendel</td>
          <td>09443443747</td>
          <td>zhtet1636@gmail.com</td>
          <td>2024-10-29</td>
          <td>None</td>
          <td>true</td>
          <td>03-10-2022(12:39 AM)</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Austria</td>
          <td>09686769422</td>
          <td>zhtet1636@gmail.com</td>
          <td>2024-10-29</td>
          <td>None</td>
          <td>true</td>
          <td>03-10-2022(12:39 AM)</td>
          <td>Delete</td>
        </tr> */}
      </table>
      <div>
        <PaginatedItems itemsPerPage={1} />
      </div>
    </div>
  );
};

export default MemberList;

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const Packages = () => {
  const { packages, setPackages } = useGlobalContext();
  const [packageData, setPackageData] = useState({
    name: "",
    month: "",
    price: "",
  });
  const [updatePackage, setUpdatePackage] = useState();
  const [update, setUpdate] = useState();

  console.log(updatePackage);
  console.log(packageData);

  useEffect(() => {
    fetch("http://aptm-b.ethical-digit.com/packages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
    })
      .then((res) => res.json())
      .then((json) => setPackages(json));
  }, []);

  const handleUpdatePackageFormSubmit = (e) => {
    const data = {
      name: updatePackage.name,
      price: updatePackage.price,
      month: updatePackage.month,
    };
    e.preventDefault();
    console.log(updatePackage._id);
    fetch(`http://aptm-b.ethical-digit.com/packages/${updatePackage?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      fetch("http://aptm-b.ethical-digit.com/packages", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
        },
      })
        .then((res) => res.json())
        .then((json) => setPackages(json))
    );

    setUpdatePackage({
      name: "",
      month: "",
      price: "",
    });
    setUpdate(false);
  };

  const handleCreatePackageFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://aptm-b.ethical-digit.com/packages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
      body: JSON.stringify(packageData),
    }).then((res) =>
      fetch("http://aptm-b.ethical-digit.com/packages", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
        },
      })
        .then((res) => res.json())
        .then((json) => setPackages(json))
    );
    setPackageData({
      name: "",
      month: "",
      price: "",
    });
  };

  const handlePackagesDelete = (id) => {
    console.log(`http://aptm-b.ethical-digit.com/packages/:${id}`);
    fetch(`http://aptm-b.ethical-digit.com/packages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
      },
    })
      .then((res) => res.json())
      .then((json) =>
        fetch("http://aptm-b.ethical-digit.com/packages", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mzg1ODA3YjEwMWFmMWUyZWIyMTRlMjgiLCJyb2xlIjoic3VwZXIgYWRtaW4iLCJpYXQiOjE2Njk3Nzc2NzMwMDEsImV4cCI6MTY2OTc3ODI3NzgwMX0.GzN8yg-RnVBqILyFye0B6-dA6KqKvWDqj09DxzvPJprUQiQ4QDcff0h8jKJNbpJ9mxzphhy8YUNznWQLVyNa1Vo__bRiObQqxnRNs5CNXbufC_xu0Yw_JgNRyz2xGovwJ4_PvGdRnK7pM5N-j8dsLijluUnQ_RE5yW1F4WKhOqGyM1s3SLO0BYm7Vb1Rx0XFpwBG18_xvygmQoEicMDm5BolTtJY9ud3I67243AelnsEx8yzSS5_j0hlPSEhstPGE76oJjrrArxT7zJJ_FwWGAaEdlo2Jgwm3u6BmtJsvabGNS7Dfksg5rN3dMtJgsqvrxBNfkNOGC0ZoqbDyhn3yPudb3jdoiLvpKSFnkWLPTyhJBsZgDniMFcD0CLq2fu1amXOvXpQFcZKZLCpsh51_B_zUVZKq87llSfDKvc98DLy9DwH2vHHwNd7DR-gzV3H8l6HX6xOUTPFvWNxYhiWfEUiY18quIpW45dB7zFxqYnO1XbrK1lFxJg25D0ptSnmrO_fW2q-zlMnwirUsQ64RtrFHIUMb-oT4CZALRPBLHqojPTzLDdz4abEMTLuP2ZqhsaZYx6Hma0VOZgy2yopFiL8Zu-Aujxsi-7AEAwstdidVb2alWQBtgYBn7TLZBAmVBbWgq93PcdNYCRHh8l4SVOOm37uUc2puabj70AouM8",
          },
        })
          .then((res) => res.json())
          .then((json) => setPackages(json))
      );

    setUpdatePackage();
  };

  const handlePackageFormChange = (e) => {
    if (update) {
      setUpdatePackage({ ...updatePackage, [e.target.name]: e.target.value });
    } else {
      setPackageData({ ...packageData, [e.target.name]: e.target.value });
    }
  };

  const handleOnChangeUpdate = (detail) => {
    setUpdate(true);
    setUpdatePackage(detail);
  };

  return (
    <div className="px-2">
      <table>
        <tr>
          <th>ID</th>
          <th>Package Name</th>
          <th>Month(s)</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {packages?.packages?.map((detail, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{detail.name}</td>
            <td>{detail.month}</td>
            <td>{detail.price}</td>
            <td>
              <FaEdit
                onClick={() => handleOnChangeUpdate(detail)}
                style={{ fontSize: "1.2rem", color: "blue" }}
              />
            </td>
            <td>
              <AiFillDelete
                onClick={() => handlePackagesDelete(detail._id)}
                style={{ fontSize: "1.2rem", color: "#D0463B" }}
              />
            </td>
          </tr>
        ))}
      </table>
      <form style={{ width: "500px" }} className="pt-5" action="">
        <h3 className="text-center">Make a package</h3>
        <input
          type="text"
          name="name"
          value={updatePackage?.name || packageData?.name}
          onChange={(e) => handlePackageFormChange(e)}
          placeholder="Package Name"
          className="w-100 p-2 rounded"
          style={{ border: "1px solid" }}
        />
        <br />
        <input
          name="month"
          type="number"
          value={updatePackage?.month || packageData?.month}
          onChange={(e) => handlePackageFormChange(e)}
          placeholder="Months"
          style={{ border: "1px solid" }}
          className="w-100 p-2 my-2 rounded"
        />
        <br />
        <input
          type="text"
          name="price"
          value={updatePackage?.price || packageData?.price}
          onChange={(e) => handlePackageFormChange(e)}
          placeholder="Price"
          className="w-100 p-2 rounded"
          style={{ border: "1px solid" }}
        />
        {update ? (
          <button
            onClick={(e) => handleUpdatePackageFormSubmit(e)}
            className="w-100 p-2 my-2 rounded"
            style={{ border: "1px solid" }}
          >
            update package
          </button>
        ) : (
          <button
            onClick={(e) => handleCreatePackageFormSubmit(e)}
            className="w-100 p-2 my-2 rounded"
            style={{ border: "1px solid" }}
          >
            create
          </button>
        )}
      </form>
    </div>
  );
};

export default Packages;

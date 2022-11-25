import React from "react";

const Packages = () => {
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

        <tr>
          <td>10</td>
          <td>12</td>
          <td>24</td>
          <td>6000</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>

        <tr>
          <td>11</td>
          <td>6</td>
          <td>6</td>
          <td>6000</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>

        <tr>
          <td>12</td>
          <td>1</td>
          <td>6</td>
          <td>6000</td>
          <td>edit</td>
          <td>Delete</td>
        </tr>
      </table>
    </div>
  );
};

export default Packages;

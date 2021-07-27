import React from "react";
import { FC, useState } from "react";

export interface LocationTableProps {
  fetchLocations: string[];
}

export const LocationTable: FC<LocationTableProps> = ({ fetchLocations }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Locations</th>
        </tr>
      </thead>
      <tbody>
        {fetchLocations.map((location, index) => (
          <tr>
            <td>{index}</td>
            <td>{location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

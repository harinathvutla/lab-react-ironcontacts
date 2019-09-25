import React from "react";

const RandomContacts = props => {
  let contact = props.contactList.map(val => {
    return (
      <tr>
        {" "}
        <td>
          <img
            src={val.pictureUrl}
            alt="contactpic"
            style={{ width: 40, height: 40 }}
          />
        </td>
        <td>{val.name}</td> <td>{val.popularity}</td>
      </tr>
    );
  });

  return <>{contact}</>;
};

export default RandomContacts;

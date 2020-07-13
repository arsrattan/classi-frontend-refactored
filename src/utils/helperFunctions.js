import React from 'react';

export const formatNamesList = (namesList) => {
  const namesListLength = namesList.length;
  const userNamesList = [];
  if (namesListLength <= 3) {
    var i;
    for (i = 0; i < namesListLength; i++) {
      const userID = namesList[i];
      if (i !== namesListLength - 1) {
        userNamesList.push(userID + ', ');
      } else {
        userNamesList.push(userID);
      }
    }
  } else {
    var i;
    for (i = 0; i < 3; i++) {
      const userID = namesList[i];
      userNamesList.push(userID + ', ');
    }
    userNamesList.push('+' + (namesListLength - 3) + ' more');
  }
  return userNamesList;
};

import React from 'react';
import { GraphQLClient } from '_services';

const SERVER_URL =
  'https://4ke4pz5op1.execute-api.us-east-1.amazonaws.com/Prod/';
const SERVER_REGION = 'us-east-1';

export function createMeetingRequest(meetingName, attendeeName) {
  let url = encodeURI(
    SERVER_URL +
      '/join?' +
      `title=${meetingName}&name=${attendeeName}&region=${SERVER_REGION}`,
  );

  return fetch(url, { method: 'POST' }).then((j) => j.json());
}

/*
export async function createMeetingRequest() {
  const getMeetingInfo = async () => {
    try {
      const hostname = 'ec2-107-23-186-194.compute-1.amazonaws.com';

      const res = await fetch(`http://${hostname}:3000/meeting`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      console.log(
        `Received meeting response: ${JSON.stringify(json.meeting.Meeting)}`,
      );
      return json.meeting;
    } catch (err) {
      console.log(`Error retrieving meeting: ${err}`);
    }
  };

  const getAttendeeInfo = async (meetingId, userName) => {
    try {
      const hostname = 'ec2-107-23-186-194.compute-1.amazonaws.com';

      const res = await fetch(
        `http://${hostname}:3000/attendee/${meetingId}?userId=${userName}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          query: {
            userId: userName,
          },
        },
      );
      const json = await res.json();
      console.log(
        `Received attendee response: ${JSON.stringify(json.attendee)}`,
      );
      return json.attendee;
    } catch (err) {
      console.log(`Error retrieving attendee: ${err}`);
    }
  };

  const meeting = await getMeetingInfo();
  const attendee = await getAttendeeInfo(
    meeting.Meeting.MeetingId,
    JSON.stringify(GraphQLClient.getCurrentUserId()),
  );

  return { meeting: meeting, attendee: attendee };
}
*/

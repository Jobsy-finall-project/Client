import React from "react";

import TrackSection from "../components/section/trackSection/TrackSection";

const RecruitmentTrackPage = () => {
  return (
    <React.Fragment>
      <TrackSection
        position={{
          positionId: "1",
          name: "Microsoft - Full Stack Developer",
          description:
            "We are looking for an “all-around” backend engineer that will take a key role in building Slack-based products for Salesforce Marketing Cloud from scratch. We are on “day zero” - you will have the opportunity to design and develop a challenging large-scale system from scratch, as well as influence the culture and standards of a new engineering group. As a newcomer to the industry, you’ll get a chance to work with many technologies and receive mentorship from experienced engineers.",
        }}
        isActive={true}
        isFavorite={true}
        steps={[
          {
            id: "0",
            applicationId: "1",
            title: "Telephon interview",
            stepDetails: "telephone interview",
            date: "07/05/2022",
            email: "c@c.c",
          },
          {
            id: "1",
            applicationId: "1",
            title: "HR",
            stepDetails: "Hr interview",
            date: "11/05/2022",
            email: "c@c.c",
          },
        ]}
        comments={[]}
        emails={[]}
        cvFiles={[]}
      />
    </React.Fragment>
  );
};

export default RecruitmentTrackPage;

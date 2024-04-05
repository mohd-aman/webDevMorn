import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";

// import TheatresList from "./TheatresList";
// import Bookings from "./Bookings";

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          Bookings
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theatre" key="2">
          Theatre List
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import {
  getRouteNumberOne,
  getRouteNumberThree,
  getRouteNumberTwo,
} from "../../Redux/actionCreators";

export function Routes() {
  const dispatch = useDispatch();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "1":
        return dispatch(getRouteNumberOne());
      case "2":
        return dispatch(getRouteNumberTwo());
      case "3":
        return dispatch(getRouteNumberThree());
      default:
        return;
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "1st route",
      key: "1",
    },
    {
      label: "2nd route",
      key: "2",
    },
    {
      label: "3rd route",
      key: "3",
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me, Click menu item
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default Routes;

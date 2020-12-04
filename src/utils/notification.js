import React from "react";
import { notification } from "antd";

export const infoOfAction = (textInfo) => {
    const openNotification = () => {
        notification.open({
            message: "Action information",
            description: textInfo
        });
    };
    openNotification();
};

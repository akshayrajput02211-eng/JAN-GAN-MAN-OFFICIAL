"use client";

import RobotFloat from "./RobotFloat";
import RobotGlow from "./RobotGlow";

export default function RobotAssistant() {
  return (
    <div className="relative flex items-center justify-center">

      <RobotGlow />

      <RobotFloat />

    </div>
  );
}
"use client";

import { useState } from "react";

import {
  BarChart3,
  MapPin,
  Shield,
} from "lucide-react";

import SettingsRow from "../shared/SettingsRow";
import SettingsSection from "../shared/SettingsSection";

export default function PrivacySettings() {
  const [location, setLocation] =
    useState(true);

  const [analytics, setAnalytics] =
    useState(false);

  return (
    <SettingsSection
      title="Privacy"
      icon={<Shield className="h-5 w-5" />}
    >
      <SettingsRow
        icon={<MapPin className="h-5 w-5" />}
        title="Location Sharing"
        subtitle="Nearby services improve karne ke liye"
        rightContent={
          <Toggle
            enabled={location}
            onClick={() =>
              setLocation(!location)
            }
          />
        }
      />

      <SettingsRow
        icon={<BarChart3 className="h-5 w-5" />}
        title="Analytics Opt-out"
        subtitle="Usage analytics disable karo"
        rightContent={
          <Toggle
            enabled={analytics}
            onClick={() =>
              setAnalytics(!analytics)
            }
          />
        }
      />
    </SettingsSection>
  );
}

function Toggle({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        h-7
        w-14
        rounded-full
        transition-all
        duration-300
        ${
          enabled
            ? "bg-green-600"
            : "bg-slate-300 dark:bg-slate-600"
        }
      `}
    >
      <span
        className={`
          absolute
          top-1
          h-5
          w-5
          rounded-full
          bg-white
          transition-all
          duration-300
          ${
            enabled
              ? "left-8"
              : "left-1"
          }
        `}
      />
    </button>
  );
}
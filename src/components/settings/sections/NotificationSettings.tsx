"use client";

import { useState } from "react";

import {
  Bell,
  MessageCircle,
  Smartphone,
} from "lucide-react";

import SettingsRow from "../shared/SettingsRow";
import SettingsSection from "../shared/SettingsSection";

export default function NotificationSettings() {
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(false);
  const [whatsapp, setWhatsapp] =
    useState(true);

  return (
    <SettingsSection
      title="Notifications"
      icon={<Bell className="h-5 w-5" />}
    >
      <SettingsRow
        icon={<Bell className="h-5 w-5" />}
        title="Push Notifications"
        subtitle="Important app alerts"
        rightContent={
          <Toggle
            enabled={push}
            onClick={() => setPush(!push)}
          />
        }
      />

      <SettingsRow
        icon={<Smartphone className="h-5 w-5" />}
        title="SMS Alerts"
        subtitle="SMS updates receive karo"
        rightContent={
          <Toggle
            enabled={sms}
            onClick={() => setSms(!sms)}
          />
        }
      />

      <SettingsRow
        icon={
          <MessageCircle className="h-5 w-5" />
        }
        title="WhatsApp Updates"
        subtitle="WhatsApp updates receive karo"
        rightContent={
          <Toggle
            enabled={whatsapp}
            onClick={() =>
              setWhatsapp(!whatsapp)
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
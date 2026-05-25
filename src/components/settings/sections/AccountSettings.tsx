"use client";

import {
  Camera,
  Mail,
  Phone,
  User,
} from "lucide-react";

import SettingsSection from "../shared/SettingsSection";
import SettingsRow from "../shared/SettingsRow";

export default function AccountSettings() {
  return (
    <SettingsSection
      title="Account"
      icon={<User className="h-5 w-5" />}
    >
      <SettingsRow
        icon={<User className="h-5 w-5" />}
        title="Akshay Kumar"
        subtitle="Full Name"
        rightContent={
          <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            Edit
          </button>
        }
      />

      <SettingsRow
        icon={<Phone className="h-5 w-5" />}
        title="+91 9876543210"
        subtitle="Phone Number"
      />

      <SettingsRow
        icon={<Mail className="h-5 w-5" />}
        title="Add Email"
        subtitle="Email Address"
        rightContent={
          <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            Add
          </button>
        }
      />

      <SettingsRow
        icon={<Camera className="h-5 w-5" />}
        title="Profile Photo"
        subtitle="Change profile image"
        rightContent={
          <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            Upload
          </button>
        }
      />
    </SettingsSection>
  );
}
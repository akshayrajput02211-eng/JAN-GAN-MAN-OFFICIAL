// ========================================
// FILE: src/app/settings/page.tsx
// ========================================

"use client";

import { useState } from "react";

import {
  Bell,
  Smartphone,
  MessageCircle,
  Languages,
  Moon,
  Shield,
  MapPin,
  BarChart3,
  Trash2,
  User,
  Mail,
  Camera,
  Phone,
  Type,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

type TextSize = "Small" | "Medium" | "Large";

export default function SettingsPage() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState<"Hindi" | "English">(
    "Hindi"
  );

  const [textSize, setTextSize] = useState<TextSize>("Medium");

  const [locationSharing, setLocationSharing] =
    useState(true);

  const [analyticsOptOut, setAnalyticsOptOut] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  return (
    <main
      className="
        min-h-screen
        bg-[#f4f8ff]
        px-4
        py-8
        text-slate-900
        dark:bg-[#07111f]
        dark:text-white
        sm:px-6
        lg:px-10
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-200
              bg-green-100
              px-4
              py-2
              text-sm
              font-semibold
              text-green-700
              dark:border-green-500/20
              dark:bg-green-500/10
              dark:text-green-400
            "
          >
            <Shield className="h-4 w-4" />
            JAN GAN MAN SETTINGS
          </div>

          <h1
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              sm:text-4xl
            "
          >
            Settings & Preferences
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-relaxed
              text-slate-600
              dark:text-slate-400
              sm:text-base
            "
          >
            Apne account, notifications, language,
            privacy aur appearance settings ko manage
            karo.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* ACCOUNT */}
            <SectionCard
              title="Account"
              icon={<User className="h-5 w-5" />}
            >
              <InputRow
                icon={<User className="h-5 w-5" />}
                label="Full Name"
                value="Akshay Kumar"
                editable
              />

              <InputRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone Number"
                value="+91 9876543210"
              />

              <InputRow
                icon={<Mail className="h-5 w-5" />}
                label="Email Address"
                value="Add Email"
                editable
              />

              <button
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-3xl
                  border
                  border-white/50
                  bg-white/70
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:scale-[1.01]
                  hover:shadow-lg
                  dark:border-slate-700
                  dark:bg-slate-800/70
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-green-100
                      text-green-600
                      dark:bg-green-500/10
                      dark:text-green-400
                    "
                  >
                    <Camera className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Profile Photo
                    </p>

                    <p
                      className="
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Change profile image
                    </p>
                  </div>
                </div>

                <span
                  className="
                    rounded-full
                    bg-green-600
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Upload
                </span>
              </button>
            </SectionCard>

            {/* NOTIFICATIONS */}
            <SectionCard
              title="Notifications"
              icon={<Bell className="h-5 w-5" />}
            >
              <ToggleRow
                icon={<Bell className="h-5 w-5" />}
                title="Push Notifications"
                subtitle="Important updates aur alerts"
                enabled={pushNotifications}
                onChange={() =>
                  setPushNotifications(
                    !pushNotifications
                  )
                }
              />

              <ToggleRow
                icon={<Smartphone className="h-5 w-5" />}
                title="SMS Alerts"
                subtitle="Phone par SMS notifications"
                enabled={smsAlerts}
                onChange={() =>
                  setSmsAlerts(!smsAlerts)
                }
              />

              <ToggleRow
                icon={
                  <MessageCircle className="h-5 w-5" />
                }
                title="WhatsApp Updates"
                subtitle="WhatsApp par important updates"
                enabled={whatsappUpdates}
                onChange={() =>
                  setWhatsappUpdates(
                    !whatsappUpdates
                  )
                }
              />
            </SectionCard>

            {/* LANGUAGE */}
            <SectionCard
              title="Language"
              icon={<Languages className="h-5 w-5" />}
            >
              <div className="flex gap-3">
                {["Hindi", "English"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() =>
                      setLanguage(
                        lang as "Hindi" | "English"
                      )
                    }
                    className={`
                      flex-1
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      font-bold
                      transition-all
                      duration-300
                      ${
                        language === lang
                          ? "bg-green-600 text-white shadow-lg"
                          : "bg-white/70 text-slate-700 hover:bg-white dark:bg-slate-800/70 dark:text-slate-300"
                      }
                    `}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* APPEARANCE */}
            <SectionCard
              title="Appearance"
              icon={<Moon className="h-5 w-5" />}
            >
              <ToggleRow
                icon={<Moon className="h-5 w-5" />}
                title="Dark Mode"
                subtitle="Night friendly interface"
                enabled={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />

              <div
                className="
                  rounded-3xl
                  border
                  border-white/50
                  bg-white/70
                  p-5
                  dark:border-slate-700
                  dark:bg-slate-800/70
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-purple-100
                      text-purple-600
                      dark:bg-purple-500/10
                      dark:text-purple-400
                    "
                  >
                    <Type className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Text Size
                    </p>

                    <p
                      className="
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      App text size adjust karo
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {(
                    ["Small", "Medium", "Large"] as TextSize[]
                  ).map((size) => (
                    <button
                      key={size}
                      onClick={() => setTextSize(size)}
                      className={`
                        rounded-2xl
                        px-4
                        py-3
                        text-sm
                        font-bold
                        transition-all
                        duration-300
                        ${
                          textSize === size
                            ? "bg-green-600 text-white shadow-lg"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </SectionCard>

            {/* PRIVACY */}
            <SectionCard
              title="Privacy"
              icon={<Shield className="h-5 w-5" />}
            >
              <ToggleRow
                icon={<MapPin className="h-5 w-5" />}
                title="Location Sharing"
                subtitle="Nearby services better dikhane ke liye"
                enabled={locationSharing}
                onChange={() =>
                  setLocationSharing(!locationSharing)
                }
              />

              <ToggleRow
                icon={<BarChart3 className="h-5 w-5" />}
                title="Analytics Opt-out"
                subtitle="Usage analytics disable karo"
                enabled={analyticsOptOut}
                onChange={() =>
                  setAnalyticsOptOut(
                    !analyticsOptOut
                  )
                }
              />
            </SectionCard>

            {/* DANGER ZONE */}
            <SectionCard
              title="Danger Zone"
              icon={<Trash2 className="h-5 w-5" />}
            >
              <div
                className="
                  rounded-3xl
                  border
                  border-red-200
                  bg-red-50
                  p-5
                  dark:border-red-500/20
                  dark:bg-red-500/10
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-red-600
                      "
                    >
                      Account Delete Karo
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-red-500
                      "
                    >
                      Yeh action permanent hai aur undo
                      nahi hoga.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setShowDeleteModal(true)
                    }
                    className="
                      rounded-2xl
                      bg-red-600
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/60
              p-4
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="
                w-full
                max-w-md
                rounded-[36px]
                border
                border-white/20
                bg-white
                p-6
                shadow-2xl
                dark:bg-slate-900
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    Confirm Delete
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    Kya aap sach me apna account
                    permanently delete karna chahte ho?
                  </p>
                </div>

                <button
                  onClick={() =>
                    setShowDeleteModal(false)
                  }
                  className="
                    rounded-xl
                    p-2
                    hover:bg-slate-100
                    dark:hover:bg-slate-800
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() =>
                    setShowDeleteModal(false)
                  }
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-200
                    px-5
                    py-3
                    font-semibold
                    dark:border-slate-700
                  "
                >
                  Cancel
                </button>

                <button
                  className="
                    flex-1
                    rounded-2xl
                    bg-red-600
                    px-5
                    py-3
                    font-semibold
                    text-white
                  "
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// ========================================
// SECTION CARD
// ========================================

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        rounded-[36px]
        border
        border-white/50
        bg-white/70
        p-5
        shadow-xl
        backdrop-blur-xl
        dark:border-slate-700
        dark:bg-slate-800/70
        sm:p-6
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-green-100
            text-green-600
            dark:bg-green-500/10
            dark:text-green-400
          "
        >
          {icon}
        </div>

        <h2
          className="
            text-xl
            font-black
          "
        >
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

// ========================================
// TOGGLE ROW
// ========================================

function ToggleRow({
  icon,
  title,
  subtitle,
  enabled,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-white/50
        bg-white/70
        p-4
        dark:border-slate-700
        dark:bg-slate-800/70
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-green-100
            text-green-600
            dark:bg-green-500/10
            dark:text-green-400
          "
        >
          {icon}
        </div>

        <div>
          <p className="font-semibold">
            {title}
          </p>

          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            {subtitle}
          </p>
        </div>
      </div>

      <button
        onClick={onChange}
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
            shadow-md
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
    </div>
  );
}

// ========================================
// INPUT ROW
// ========================================

function InputRow({
  icon,
  label,
  value,
  editable = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  editable?: boolean;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-white/50
        bg-white/70
        p-4
        dark:border-slate-700
        dark:bg-slate-800/70
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-yellow-100
            text-yellow-600
            dark:bg-yellow-500/10
            dark:text-yellow-400
          "
        >
          {icon}
        </div>

        <div>
          <p className="font-semibold">
            {label}
          </p>

          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            {value}
          </p>
        </div>
      </div>

      {editable && (
        <button
          className="
            rounded-full
            bg-green-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Edit
        </button>
      )}
    </div>
  );
}
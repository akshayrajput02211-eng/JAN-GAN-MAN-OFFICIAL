"use client";

import { useState } from "react";

import {
  Trash2,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import SettingsSection from "../shared/SettingsSection";

export default function DangerZone() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SettingsSection
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

              <p className="mt-1 text-sm text-red-500">
                Yeh action permanent hai.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="
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
        </div>
      </SettingsSection>

      <AnimatePresence>
        {open && (
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
              className="
                w-full
                max-w-md
                rounded-[36px]
                bg-white
                p-6
                dark:bg-slate-900
              "
            >
              <div className="flex justify-between">
                <div>
                  <h2
                    className="
                      text-2xl
                      font-black
                      dark:text-white
                    "
                  >
                    Confirm Delete
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    Kya aap sure ho?
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5 dark:text-white" />
                </button>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-200
                    px-5
                    py-3
                    font-semibold
                    dark:border-slate-700
                    dark:text-white
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
    </>
  );
}
"use client";

import { motion } from "framer-motion";
import { SchemeDocs } from "@/data/sarkari-seva/doc-requirements";

interface Props {
  schemes: SchemeDocs[];
  selected: SchemeDocs | null;
  onSelect: (scheme: SchemeDocs) => void;
}

export default function SchemeDocList({
  schemes,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {schemes.map((scheme) => {
        const active = selected?.id === scheme.id;

        return (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={scheme.id}
            onClick={() => onSelect(scheme)}
            className={`
              px-5
              py-3
              rounded-full
              font-medium
              transition-all
              ${
                active
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              }
            `}
          >
            {scheme.name}
          </motion.button>
        );
      })}
    </div>
  );
}
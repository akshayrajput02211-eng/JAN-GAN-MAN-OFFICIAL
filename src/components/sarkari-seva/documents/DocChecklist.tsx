"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import DocItem from "./DocItem";
import { SchemeDocs } from "@/data/sarkari-seva/doc-requirements";

interface Props {
  scheme: SchemeDocs;
}

export default function DocChecklist({
  scheme,
}: Props) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const progress = useMemo(() => {
    return (checkedItems.length / scheme.documents.length) * 100;
  }, [checkedItems, scheme.documents.length]);

  return (
    <div
      className="
        mt-6
        bg-white/70
        dark:bg-slate-800/70
        backdrop-blur-xl
        border border-white/50
        rounded-[42px]
        p-6
        shadow-2xl
      "
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {scheme.name}
          </h2>

          <p className="text-green-700 dark:text-green-400 mt-1">
            {scheme.ministry}
          </p>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {scheme.brief}
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-green-600 hover:bg-green-700
            text-white
            px-5 py-3
            rounded-2xl
            transition
          "
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>

      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-slate-700 dark:text-slate-200">
            Kitne documents ready hain
          </span>

          <span className="font-bold text-green-700">
            {checkedItems.length}/{scheme.documents.length}
          </span>
        </div>

        <div className="w-full h-4 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-full bg-green-600 rounded-full"
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {scheme.documents.map((doc) => (
          <DocItem
            key={doc.id}
            checked={checkedItems.includes(doc.id)}
            onToggle={() => toggleItem(doc.id)}
            name={doc.name}
            description={doc.description}
            whereToGet={doc.whereToGet}
            status={doc.status}
          />
        ))}
      </div>
    </div>
  );
}
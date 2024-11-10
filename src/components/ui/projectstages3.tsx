"use client";
import React, { useState } from "react";
import { useTranslations } from "use-intl";

// SVG-иконка
const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 w-10 mr-4 transition-transform duration-300 ${
            isOpen ? "rotate-45 text-blue-600" : "text-gray-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

export function ProjectStages3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("Ui");

  // Этапы работы с локализацией
  const stages = [
    {
      stage: t("stage"),
      description: t('description'),
    },
    {
      stage: t("stage1"),
      description: t("description1"),
    },
    {
      stage: t("stage2"),
      description: t("description2"),
    },
    {
      stage: t("stage3"),
      description: t("description3"),
    },
    {
      stage: t("stage4"),
      description: t("description4"),
    },
    {
      stage: t("stage5"),
      description: t("description5"),
    },
  ];

  const toggleStage = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="relative flex flex-col lg:flex-row mx-auto px-8 py-16 max-w-7xl">
        {/* Основной контент */}
        <div className="relative w-full lg:w-3/4 pr-8">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-10">
            {t("text")}
          </h2>
          <div className="space-y-8">
            {stages.map((stage, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  <button
                      className="flex items-center w-full text-left p-6 rounded-lg transition-colors duration-200 ease-in-out hover:text-blue-600"
                      onClick={() => toggleStage(index)}
                  >
                    <PlusIcon isOpen={openIndex === index} />
                    <h3 className="text-2xl font-medium">{stage.stage}</h3>
                  </button>
                  {openIndex === index && (
                      <div className="p-6 border-t border-gray-300">
                        <p className="text-lg">{stage.description}</p>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>

        {/* Боковая колонка */}
        <div className="relative w-full lg:w-1/4 mt-12 lg:mt-0">
          <div className="max-h-96 overflow-y-auto p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {t("text2")}
            </h3>
            <p className="text-lg text-gray-700 mb-6">{t("text3")}</p>
            <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              {t("text4")}
            </button>
          </div>
        </div>
      </div>
  );
}

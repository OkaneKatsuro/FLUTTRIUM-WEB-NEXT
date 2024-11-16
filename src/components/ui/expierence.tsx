"use client";
import React from "react";
import { FaBoxes, FaMobileAlt } from "react-icons/fa";
import { useTranslations } from "use-intl";

export function ExperienceDemo() {
    const t = useTranslations("Cover");

    return (
        <div className="flex flex-col lg:flex-row gap-10 p-10">
            {/* Левая колонка: Наш опыт */}
            <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">{t("heading")}</h2>
                <ul className="text-lg md:text-xl space-y-6">
                    <li className="flex items-start">
                        {/* Иконка Flutter */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                            className="mr-3"
                        >
                            <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon>
                            <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon>
                            <rect
                                width="8.485"
                                height="8.485"
                                x="16.757"
                                y="28.757"
                                fill="#03a9f4"
                                transform="rotate(-45 21 33)"
                            ></rect>
                            <polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon>
                            <polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
                        </svg>
                        {t("flutterExperience")}
                    </li>
                    <li className="flex items-start">
                        <FaBoxes className="text-2xl text-purple-500 mr-3" />
                        {t("companiesExperience")}
                    </li>
                    <li className="flex items-start">
                        <FaMobileAlt className="text-2xl text-green-500 mr-3" />
                        {t("appsDevelopment")}
                    </li>
                </ul>
            </div>

            {/* Правая колонка: Видео с панковским стилем */}
            <div className="lg:w-1/2">
                <div className="relative border-4 border-gray-300 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 transform rotate-2 skew-y-3 bg-blue-600 z-0"></div>
                    <video controls className="w-full h-full relative z-10">
                        <source src="/projects/2024-10-22 12.33.41.mp4" type="video/mp4" />
                        {t("videoFallback")}
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ExperienceDemo;

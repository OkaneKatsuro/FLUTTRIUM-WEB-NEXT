import React from "react";
import { HoverEffect } from "./card-hover-effect";
import { useTranslations } from "use-intl";

export function CardHoverEffectDemo2() {
    const t = useTranslations("Cover");

    // Определяем массив projects внутри компонента для использования функции t()
    const projects = [
        {
            title: t("title3"),
            description: t("description3"),
        },
        {
            title: t("title4"),
            description: t("description4"),
        },
        {
            title: t("title5"),
            description: t("description5"),
        },
        {
            title: t("title6"),
            description: t("description6"),
        },
    ];

    return (
        <>
            <div id="service" className="flex justify-center"></div>
            <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-md">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="flex items-center px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30 mt-10">
                {t("moreInfoButton")}
                <svg
                    className="ml-2 w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </>
    );
}

export default CardHoverEffectDemo2;

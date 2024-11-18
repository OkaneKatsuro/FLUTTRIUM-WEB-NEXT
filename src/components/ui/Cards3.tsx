"use client";

import React from "react";
import { useTranslations } from "use-intl";


export function CardHoverEffectDemo3() {
  const t = useTranslations('Steps');

  // Массив проектов теперь находится внутри компонента, чтобы использовать функцию `t`
  const projects = [
    {
      number: 1,
      title: t('title'),
      description: t('description'),
      link: "",
    },
    {
      number: 2,
      title: t('title2'),
      description: t('description2'),
      link: "",
    },
    {
      number: 3,
      title: t('title3'),
      description: t('description3'),
      link: "",
    },
    {
      number: 4,
      title: t('title4'),
      description: t('description4'),
      link: "",
    },
    {
      number: 5,
      title: t('title5'),
      description: t('description5'),
      link: "",
    },
    {
      number: 6,
      title: t('title6'),
      description: t('description6'),
      link: "",
    },
    {
      number: 7,
      title: t('title7'),
      description: t('description7'),
      link: "",
    },
    {
      number: 8,
      title: t('title8'),
      description: t('description8'),
      link: "",
    },
    {
      number: 9,
      title: t('title9'),
      description: t('description9'),
      link: "",
    },
  ];

  return (
      <>
        <div id="service" className="flex justify-center">
          <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
          <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none block mb-5">
            {t('heading')}
          </span>
          </h1>
        </div>
        <div className="max-w-5xl mx-auto px-8 lg:border lg:border-gray-200 lg:rounded-lg lg:p-4">
          <HoverEffect items={projects} />
        </div>
      </>
  );
}

type ProjectItem = {
  number: number;
  title: string;
  description: string;
  link?: string;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
            <div
                key={item.number}
                className="hover:bg-blue-600 hover:text-white transition p-6 border border-gray-200 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4">
                {item.number}. {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
        ))}
      </div>
  );
}

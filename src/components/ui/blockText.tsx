"use client";
import React from "react";
import Image from "next/image";
import {useTranslations} from "use-intl";

const FlutterInfo = () => {
const  t  = useTranslations('Cover');
    return (
        <div className="w-3/3 mx-20  rounded-lg shadow-md flex items-center"> {/* Flex для выравнивания */}
            <div className="flex-1"> {/* Текстовая часть */}
                <h2 className="text-6xl font-bold mb-4">{t('title2')}</h2>
                <p className="text-xl text-white-700 mb-4">
                    {t("description1")}
                </p>
                <p className="text-xl text-white-700">
                    {t("description2")}
                </p>
            </div>
            <Image
                src="/flutter_icon.png" // Путь к вашему SVG изображению
                alt="Flutter Logo"
                className="ml-6 w-1/3 h-auto object-contain"
                width={1000}
                height={1000}// Установлено на 1/3 ширины
            /> 
        </div>
    );
};

export default FlutterInfo;

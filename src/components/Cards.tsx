"use client"
import { HoverEffect } from "./ui/card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Полный цикл разработки мобильных приложений",
    description:
      "От идеи до реализации — мы занимаемся разработкой мобильных приложений под iOS и Android. Мы создаем интуитивно понятные и высокоэффективные приложения, которые привлекут пользователей и помогут вашему бизнесу достичь новых высот.",
    link: "https://stripe.com",
  },
  {
    title: "Дизайн, который вдохновляет",
    description:
      "Мы разрабатываем уникальный и привлекательный дизайн как для мобильных приложений, так и для сопутствующих веб-сайтов. Наша цель — сделать ваше приложение и сайт визуально привлекательными и удобными для пользователей.",
    link: "https://netflix.com",
  },
  {
    title: "Адаптивные веб-сайты для вашего приложения",
    description:
      "Создайте идеальное онлайн-присутствие для вашего мобильного приложения. Мы разрабатываем адаптивные веб-сайты, которые будут отлично выглядеть на всех устройствах и эффективно представлять ваше приложение.",
    link: "https://google.com",
  },
  {
    title: "Интеграция приложения и сайта",
    description:
      "Мы обеспечиваем бесшовную интеграцию между вашим мобильным приложением и веб-сайтом. Это включает синхронизацию данных, возможность авторизации через сайт и взаимодействие между двумя платформами.",
    link: "https://meta.com",
  },
  {
    title: "Оптимизация и SEO",
    description:
      "Повышайте видимость вашего приложения в поисковых системах с помощью наших SEO-услуг. Мы оптимизируем ваш сайт для привлечения целевой аудитории и обеспечиваем лучшее продвижение вашего приложения в интернете.",
    link: "https://amazon.com",
  },
  {
    title: "Поддержка и аналитика",
    description:
      "Мы предоставляем услуги по поддержке и обновлению ваших приложений и веб-сайтов. Также мы внедряем системы аналитики, чтобы вы могли отслеживать производительность, анализировать поведение пользователей и получать ценные инсайты для улучшения вашего продукта.",
    link: "https://microsoft.com",
  },
];

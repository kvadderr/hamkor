import MenuCard from "../components/Card/MenuCard/MenuCard";

import s from './Home.module.scss'

import { individualCardMenuItems } from "../constants/cardMenuItems";
import PromoCard from "../components/Card/PromoCard/PromoCard";
import SmallHorizontalCard from "../components/Card/SmallHorizontalCard/SmallHorizontalCard";

import map from '../assets/icons/Map.svg';
import chat from '../assets/icons/Message.svg';

import time from '../assets/icons/Time.svg';
import income from '../assets/icons/Income.svg';
import ButtonSelect from "../components/Select/ButtonSelect/ButtonSelect";


const Home = () => {
  return (
    <section className={s.container}>
      <section id="first" className={s.firstSection}>
        {
          individualCardMenuItems.map(item => (
            <MenuCard title={item.title} key={item.id} links={item.links} />
          ))
        }
      </section>

      <section id="second" className={s.secondSection}>
        <h2>Популярные продукты</h2>
        <ButtonSelect data={['Финансы', 'Молодежи', 'Пенсионерам', 'Премиум']} />
        <div className={s.child}>
          <PromoCard />
          <SmallHorizontalCard isNotSmall title="Микрозайм за 15 минут" description="Оформление онлайн" icon={time} buttonText="Подробнее" />
          <SmallHorizontalCard isNotSmall title="Ипотека под 12%" description="Нужен только паспорт" icon={income} buttonText="Подробнее" />
        </div>
      </section>


      <section id="six" className={s.sixSection}>
        <SmallHorizontalCard title="Отделения и банкоматы" description="Покажем ближайшие банкоматы для снятия наличных" icon={map} buttonText="Открыть карту" />
        <SmallHorizontalCard title="Обратная связь" description="Отвечаем на вопросы по всем продуктам" icon={chat} buttonText="Связаться с поддержкой" />
      </section>


    </section>
  )
}

export default Home;
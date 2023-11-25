import s from './MenuCard.module.scss'

import right from '../../../assets/icons/right.svg'

type Link = {
  id: number;
  title: string;
}

type Props = {
  title: string;
  links: Link[];
}

const LinkItem = ({ title }: Link) => {
  return (
    <div className={s.linkContainer}>
      <a>{title}</a>
      <img src={right} />
    </div>
  )
}

const MenuCard = ({ title, links }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h3>{title}</h3>
        <a onClick={() => { }}>Все</a>
      </div>
      <nav className={s.links}>
        {
          links.map(link => (
            <LinkItem key={link.id} title={link.title} id={link.id} />
          ))
        }
      </nav>

    </div>
  )
}

export default MenuCard;
import s from './MenuItem.module.scss'
import classNames from 'classnames'

type Props = {
  title: string;
  isActive: boolean;
}

const MenuItem = ({ title, isActive }: Props) => {
  return (
    <div className={classNames(s.container, { [s.active]: isActive })}>
      <p>{title}</p>
    </div>
  )
}

export default MenuItem;
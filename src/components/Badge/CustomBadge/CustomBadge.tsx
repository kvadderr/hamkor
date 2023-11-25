import s from './CustomBadge.module.scss'

type Props = {
  icons?: string;
  text: string;
}

const CustomBadge = (props: Props) => {
  return (
    <div className={s.container}>
      {props.icons && <img src={props.icons} />}
      <p>{props.text}</p>
    </div>
  )
}

export default CustomBadge
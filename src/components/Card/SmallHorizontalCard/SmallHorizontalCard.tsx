import s from './SmallHorizontalCard.module.scss'
import GrayButton from '../../Button/GrayButton';

type Props = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
  isNotSmall?: boolean;
}


const SmallHorizontalCard = (props: Props) => {
  return (
    <div className={s.container}>
      <div className={s.child}>
        <div className={props.isNotSmall ? s.bigText : s.text}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div>
          <GrayButton text={props.buttonText} onClick={() => { }} />
        </div>
      </div>
      <img src={props.icon} />
    </div>
  )
}

export default SmallHorizontalCard;
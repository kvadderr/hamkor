import s from  './button.module.scss'

type Props = {
  text: string;
  onClick: () => void;
}

const GrayButton = ({ text, onClick }: Props) => {
  return (
    <button className={s.grayContainer} onClick={onClick}>
      {text}
    </button>
  )
}

export default GrayButton
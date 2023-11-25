import s from './ButtonSelect.module.scss'

type Props = {
  data: string[];
}

const Button = ({text}: any) => {
  return (
    <div className={s.buttonContainer}>
      <p>{text}</p>
    </div>
  )
}

const ButtonSelect = ({ data }: Props) => {
  return (
    <div className={s.container}>
      {
        data.map((item, index) => (
          <Button key={index} text={item}/>
        ))
      }
    </div>
  )
}

export default ButtonSelect;
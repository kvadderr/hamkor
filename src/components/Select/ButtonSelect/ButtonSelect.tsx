import { useState } from 'react';
import s from './ButtonSelect.module.scss'
import classNames from 'classnames'

type Props = {
  data: string[];
  isActive: boolean;
  onClick: () => void;
}

const Button = ({ text, isActive, onClick }: any) => {
  return (
    <div className={classNames(s.buttonContainer, { [s.active]: isActive })} onClick={onClick}>
      <p>{text}</p>
    </div>
  )
}

const ButtonSelect = ({ data }: Props) => {

  const [isActive, setIsActive] = useState(0);

  return (
    <div className={s.container}>
      {
        data.map((item, index) => (
          <Button key={index} onClick={() => setIsActive(index)} text={item} isActive={isActive === index}/>
        ))
      }
    </div>
  )
}

export default ButtonSelect;
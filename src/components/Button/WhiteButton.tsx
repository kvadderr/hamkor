import './button.module.scss'

type Props = {
  text: string;
  onClick: () => void;
}

const WhiteButton = ({ text, onClick }: Props) => {
  return (
    <button  onClick={onClick}>
      {text}
    </button>
  )
}

export default WhiteButton
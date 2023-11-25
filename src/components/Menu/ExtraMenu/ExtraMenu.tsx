import s from './ExtraMenu.module.scss'
import logo from '../../../assets/logo.svg';

import CurrencyRate from '../../Card/CurrencyRate/CurrencyRate';
import WhiteButton from '../../Button/WhiteButton';
import { individualMenuItems } from '../../../constants/menuItems';

const ExtraMenu = () => {
  return (
    <div className={s.container}>
      <div className={s.leftSection}>
        <img src={logo} />
        <div className={s.menuRow}>
          {
            individualMenuItems.map(item => (
              <div className={s.itemContainer} key={item.id}>
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={s.rightSection}>
        <CurrencyRate />
        <WhiteButton text='Интернет-банк' onClick={() => { }} />
      </div>
    </div>
  )
}

export default ExtraMenu
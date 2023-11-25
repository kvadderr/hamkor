import MenuItem from './MenuItem/MenuItem';
import s from './MainMenu.module.scss'

import { mainMenu } from '../../../constants/menuItems';

const MainMenu = () => {
  return (
    <div className={s.container}>
      <div className={s.mainMenu}>
        {mainMenu.map(item => (
          <MenuItem title={item.title} key={item.id} isActive={item.id === 2} />
        ))}
      </div>
      <div className={s.rightSection}>
        <p>ewfwef </p>
      </div>
    </div>
  )
}

export default MainMenu;
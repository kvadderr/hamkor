import s from './Footer.module.scss'
import { bottomMenu } from '../../constants/menuItems'

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.contactContainer}>
                    <div className={s.phoneContainer}>
                        <p className={s.phone}>0 (800) 1 200 200</p>
                        <p>Для международных звонков</p>
                    </div>
                    <div className={s.phoneContainer}>
                        <p className={s.phone}>+ 998 (78) 150 91 25</p>
                        <p>Для звонков из Узбекистана</p>
                    </div>
                </div>
                <div className={s.bottomMenu}>
                    {
                        bottomMenu.map(item => (
                            <a key={item.id}>{item.title}</a>
                        ))
                    }
                </div>
                <div className={s.mobileAppContainer}>
                    ewfwef
                </div>
            </div>
            <div></div>
            <div className={s.license}>
                <p>© 2023 © АКБ «Hamkorbank»</p>
                <p>Лицензия №64 ЦБ РУз от 31 августа 1991 г.</p>
            </div>
        </div>
    )
}

export default Footer
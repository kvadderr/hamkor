import CustomBadge from '../../Badge/CustomBadge/CustomBadge'
import GrayButton from '../../Button/GrayButton'
import s from './Card.module.scss'

const Card = () => {
    return (
        <div className={s.container}>
            <div className={s.productInfo}>
                <div className={s.badgeContainer}>
                    <CustomBadge text='ewfewf' />
                </div>
                <div className={s.productData}>
                    <h3></h3>
                    <div className={s.smallData}>
                        <div className={s.data}>
                            <p></p>
                            <p>Оформление</p>
                        </div>
                        <div className={s.data}>
                            <p></p>
                            <p>Изготовление</p>
                        </div>
                    </div>
                </div>
                <GrayButton text='Подробнее' onClick={() => { }} />
            </div>
            <div>
                
            </div>
        </div>
    )
}
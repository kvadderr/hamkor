
import s from './PromoCard.module.scss'
import WhiteButton from '../../Button/WhiteButton';
import classNames from 'classnames';

const PromoCard = () => {
    return (
        <div className={classNames(s.container, s.background_image)}>
            <div>
                <h3>Бесплатная <br/>карта Visa</h3>
                <p>Откройте карту для покупок <br/>в интернете за 7 секунд</p>
            </div>
            <div>
                <WhiteButton text='Оформить' onClick={() => { }} />
            </div>
        </div>
    )
}

export default PromoCard;
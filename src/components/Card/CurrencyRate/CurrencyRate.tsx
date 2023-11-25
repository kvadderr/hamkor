import s from './CurrencyRate.module.scss'

const CurrencyRate = () => {
    return (
        <div className={s.container}>
            <p style={{fontSize: 14}}>$</p>
            <div className={s.data}>
                <p>Купить</p>
                <p className={s.bold}>12 800</p>
            </div>
            <div className={s.data}>
                <p>Продать</p>
                <p className={s.bold}>13 300</p>
            </div>
        </div>
    )
}

export default CurrencyRate
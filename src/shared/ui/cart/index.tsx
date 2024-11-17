import cart from './iconcart.svg';
import s from './styles.module.scss'

export const Cart = () => {
	

	return (
		<img src={cart} alt='cart' className={s.cart}/>
	)
}
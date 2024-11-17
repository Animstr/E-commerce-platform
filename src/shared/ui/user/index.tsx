import user from './iconuser.svg';
import s from './styles.module.scss'

export const User = () => {
	

	return (
		<img src={user} alt='user' className={s.user}/>
	)
}
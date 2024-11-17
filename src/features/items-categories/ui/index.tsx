import logo from './logo2.svg';

import s from './styles.module.scss';

function Navigation() {

	return ( 
		<div className={s.navigation_block}>
			<img src={logo} alt='realme'/>
			<div className={s.navigation_block_item}>Smartphone</div>
			<div className={s.navigation_block_item}>Laptop</div>
			<div className={s.navigation_block_item}>TV</div>
			<div className={s.navigation_block_item}>Aksesoris</div>
		</div>
	);
}

export default Navigation;
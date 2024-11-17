import loupe from './iconsearch.svg';

import s from './styles.module.scss'

export const SearchBar = () => {


	return ( 
		<img src={loupe} alt='search' className={s.search}/>
	);
}
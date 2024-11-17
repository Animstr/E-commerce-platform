import Navigation from "src/features/items-categories";
import { Cart } from "src/shared/ui/cart";
import { User } from "src/shared/ui/user";
import { SearchBar } from "src/shared/ui/search-bar";

import s from './styles.module.scss';

export const Header = () => {

	return (
		<header className={s.header}>
			<Navigation/>
			<div className={s.header_right}>
				<div className={s.header_right_item}><SearchBar/></div>
				<div className={s.header_right_item}><Cart/></div>
				<div className={s.header_right_item}><User/></div>
			</div>
		</header>
	)
}
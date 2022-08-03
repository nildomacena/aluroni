import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import classNames from 'classnames';

export default function NotFound() {
	return (
		<div className={classNames(
			{
				[styles.container]: true,
				[stylesTema.container]: true
			}
		)} >
			<div className={styles.voltar} >
				<button>{'< Voltar'}</button>
			</div>
			<NotFoundImage />
		</div>
	);
}
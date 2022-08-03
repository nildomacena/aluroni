import classNames from 'classnames';
import cardapio from 'data/cardapio.json';
import styles from './Item.module.scss';

interface Props {
    item: typeof cardapio[0]
}
export default function Item({ item }: Props) {
	return (
		<div className={styles.item} >
			<div className={styles.item__imagem} >
				<img src={item.photo} alt={item.title} />
			</div>
			<div className={styles.item__descricao} >
				<div className={styles.item__titulo} >
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</div>
				<div className={styles.item__tags} >
					<div className={classNames({
						[styles.item__tipo]: true,
						[styles[`item__tipo__${item.category.label.toLowerCase()}`]]: true
					})} >
						{item.category.label}
					</div>
					<div className={styles.item__porcao} >
                        Serve {item.serving} {item.serving > 1 ? 'Pessoas' : 'Pessoa'}
					</div>
					<div className={styles.item__valor} >
                        R$ {item.price}
					</div>
				</div>
			</div>
		</div>
	);
}
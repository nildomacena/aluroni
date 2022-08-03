import Item from './Item/Item';
import styles from './Itens.module.scss';
import cardapio from 'data/cardapio.json';

interface Props {
	cardapio: typeof cardapio
}

export default function Itens({ cardapio }: Props) {
	return (
		<div className={styles.itens} >
			{cardapio.map((item) => <Item key={item.id} item={item} />)}
		</div>
	);
}
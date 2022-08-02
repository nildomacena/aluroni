import Item from './Item/Item';
import cardapio from './itens.json';
import styles from './Itens.module.scss';
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
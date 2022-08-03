import styles from './Cardapio.module.scss';
import Buscador from './Buscador/Buscador';
import { useEffect, useState } from 'react';
import Filtros from './Buscador/Filtros/Filtros';
import Ordenador from './Ordenador/Ordenador';
import Itens from './Itens/Itens';
import cardapio from 'data/cardapio.json';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio() {

	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');
	const [cardapioFiltrado, setCardapioFiltrado] = useState(cardapio);
	//let cardapioFiltrado = cardapio;

	useEffect(() => {
		setCardapioFiltrado(cardapio);
		if (busca && filtro) {
			setCardapioFiltrado((cardapio).filter((item) => item.category.id === filtro && (item.description.toLowerCase().includes(busca.toLowerCase()) || item.title.toLowerCase().includes(busca.toLowerCase()))));
		}
		else if (filtro) {
			setCardapioFiltrado((cardapio).filter((item) => item.category.id === filtro));
		}
		else if (busca) {
			setCardapioFiltrado(cardapio.filter((item) => item.description.toLowerCase().includes(busca.toLowerCase()) || item.title.toLowerCase().includes(busca.toLowerCase())));
		}
		else {
			setCardapioFiltrado(cardapio);
		}
	}, [busca, filtro]);
	console.log('render');
	return (

		<section className={styles.cardapio} >
			<h3 className={stylesTema.titulo} >Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
			</div>
			<Itens cardapio={cardapioFiltrado} />

		</section>
	);
}
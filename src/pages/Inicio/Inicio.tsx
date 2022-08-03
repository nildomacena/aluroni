import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {

	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort((item) => .5 * Math.random()).splice(0, 3);

	return (
		<section>
			<h3 className={stylesTema.titulo} >
				Recomendações da Cozinha
			</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map((prato) => <div key={prato.id} className={styles.recomendado} >
					<div className={styles.recomendado__imagem} >
						<img src={prato.photo} alt={prato.title} />
						<button className={styles.recomendado__botao} >Ver mais</button>
					</div>
				</div>
				)}
			</div>
			<h3 className={stylesTema.titulo} >Nossa casa</h3>
			<div className={styles.nossaCasa} >
				<img src={nossaCasa} alt="Casa do Aluroni" />
				<div className={styles.nossaCasa__endereco} >
					Avenida Belmiro Amorim, 56 <br /><br /> Maceió - AL
				</div>
			</div>
		</section>
	);
}
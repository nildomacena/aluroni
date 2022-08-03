import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];
interface Props {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {
	function selecionarFiltro(opcao: IOpcao) {
		return opcao.id === filtro ? setFiltro(null) : setFiltro(opcao.id);
	}
	return <div className={styles.filtros} >
		{filtros.map((f) => <button

			className={classNames({
				[styles.filtros__filtro]: true,
				[styles['filtros__filtro--ativo']]: f.id === filtro
			})}
			//className={`${styles.filtros__filtro} ${f.id === filtro ? styles['filtros__filtro--ativo'] : ""} `}
			onClick={() => selecionarFiltro(f)}
			key={f.id}>{f.label}</button>)
		}
	</div >;
}
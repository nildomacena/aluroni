import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}
export default function Ordenador(
    { ordenador, setOrdenador }: Props
) {
    const [aberto, setAberto] = useState(false);
    function getOrdenadorNome(value: string): string {
        let nome = '';
        opcoes.forEach((o) => {
            if (o.value === value)
                nome = o.nome;
        });
        return nome;
    }
    return (
        <button className={classNames({
            [styles.ordenador]: true,
            [styles['ordenador--ativo']]: ordenador !== ''

        })}

            onClick={() => setAberto(!aberto)
            } onBlur={() => setAberto(false)} >
            <span>{ordenador === '' ? 'Ordenar por' : getOrdenadorNome(ordenador)}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto,
            })} >
                {opcoes.map((o) => (
                    <div onClick={() => { setOrdenador(o.value) }} className={styles.ordenador__option} key={o.value} >
                        {o.nome}
                    </div>
                ))}
            </div>
        </button >
    )
} 
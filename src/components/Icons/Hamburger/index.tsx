import style from './style.module.css';

function Hamburger(props: {className?: string}) {
    return <span className={[style.root, 'hamburger-icon', ...(props.className ?? [])].join(' ')}>
        <span />
        <span />
        <span />
    </span>
}

export default Hamburger;
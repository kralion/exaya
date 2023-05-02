import style from "../../styles/extra.module.css";

function Loader() {
	return (
		<div>
			<div className="dot-spinner">
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
				<div className={style.dotspinnerdot} />
			</div>
		</div>
	);
}

export default Loader;

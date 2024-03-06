import LabelStyle from './Row.module.css';

const Row=({children})=>{
    return (
        <div className={LabelStyle.row}>
            {children}
        </div>
    );

}
export default Row;
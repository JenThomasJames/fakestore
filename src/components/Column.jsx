import ColumnModuleStyle from './Column.module.css';

const Column=({children})=>{
    return (
        <div className={ColumnModuleStyle.column}>
            {children}
        </div>
    );

}
export default Column;
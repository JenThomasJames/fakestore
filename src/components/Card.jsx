import cardStyle from './Card.module.css';

const Card=({cardSize,children})=>{

    let cardDesign=cardStyle.cardNormalDesign;
    if(cardSize==='small'){
        cardDesign=cardDesign+" "+cardStyle.cardSmall
    }
    return (
        <div className={cardDesign}> 
           {children} 
        </div>
    );
}
export default Card;
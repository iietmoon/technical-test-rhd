import { connect } from 'react-redux';

const Bubble = (props:any)=>{
    return(
        <div className="bubble">
            <span>{props.totalQuantity}</span>
        </div>
    )
}

const mapStateToProps = (state:any)=>{
    return{
        totalQuantity: state.cart.reduce((total:any, item:any)=> parseInt(total) + parseInt(item.quantity) , 0)
    }
}
export default connect(mapStateToProps)(Bubble);
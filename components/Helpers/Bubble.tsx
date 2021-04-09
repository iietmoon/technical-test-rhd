import { connect } from 'react-redux';

const Bubble = (props)=>{
    return(
        <div className="bubble">
            <span>{props.totalQuantity}</span>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        totalQuantity: state.cart.reduce((total, item)=> parseInt(total) + parseInt(item.quantity) , 0)
    }
}
export default connect(mapStateToProps)(Bubble);
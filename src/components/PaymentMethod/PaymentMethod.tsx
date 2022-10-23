import useStyles from "./style";

const PaymentMethod=()=>{
    const {classes, cx} = useStyles();
    return(
        <div>
            <div className={classes.container} style={{padding:"2% 10%"}}>
            <h2>결제 방식</h2>
            <button>KG 이니시스</button>
            </div>

        </div>
    )
};

export default PaymentMethod;
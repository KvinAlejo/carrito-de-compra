import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    }
}

class BubbleAlert extends Component {
    //aqui va el metodo que da el numero de productos
    getNumber(n) {
        if (!n) { return '' }
        return n > 9 ? '9+' : n //pregunta si es mayor a 9
    }

    render() {
        {/* hay que pasarle el valor*/}
        const { value } = this.props 
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)} {/* hay que pasarle el valor*/}
            </span>
        )
    }
}
export default BubbleAlert
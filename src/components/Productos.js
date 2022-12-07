import { Component } from "react";
import Producto from "./Producto";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row', // de izquierda a derecha
        justifyContent: 'space-between' //deja espacio en cada uno
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />)}
            </div>
            // itera todos los productos 
        )
    }
}

export default Productos
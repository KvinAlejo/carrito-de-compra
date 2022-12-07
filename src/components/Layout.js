import { Component } from "react";

const styles = {
    layout: {
        backGroundColor: '#fff',
        color: '#0a283e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        width: '1200px'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}> {/* Centra el contenido */}
                <div style={styles.container}>{/* para el ancho */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout
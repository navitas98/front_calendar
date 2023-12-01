import React from 'react';

class Tabla extends React.Component {
    render() {
        const { miArray } = this.props;

        if (!Array.isArray(miArray) || miArray.length === 0) {
            return <p>No hay datos para mostrar</p>;
        }

        const filas = [];
        for (let i = 0; i < miArray.length; i += 6) {
            filas.push(miArray.slice(i, i + 6));
        }

        const tablaJSX = (
            <center>
            <table className="miTabla">
                <tbody>
                    {filas.map((fila, index) => (
                        <tr key={index}>
                            {fila.map((elemento, indexElemento) => (
                                <td key={indexElemento} className="celdaImagen">
                                    {/* Verificar la propiedad 'visible' antes de mostrar la imagen */}
                                    {elemento.visible ? (
                                        <div className="contenedorImagen">
                                            <img src={elemento.imagen} alt={`Imagen ${indexElemento + 1}`} />
                                            <h4>{elemento.nombre}</h4>
                                        </div>
                                    ) : (
                                        <div className="contenedorImagen">
                                             <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80d953c9-0de3-476c-bfc7-464be53632d8/de90rjv-30739dbb-3089-473c-bd50-30a9d59aa2f5.png/v1/fill/w_600,h_681/santa_s_bag_by_phoenixrisingstock_de90rjv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgxIiwicGF0aCI6IlwvZlwvODBkOTUzYzktMGRlMy00NzZjLWJmYzctNDY0YmU1MzYzMmQ4XC9kZTkwcmp2LTMwNzM5ZGJiLTMwODktNDczYy1iZDUwLTMwYTlkNTlhYTJmNS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._BgnyhgUllZ0rNJQjoE8M5G2whn3leAQsXAk5sWuyHk"></img>
                                        </div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        );

        return tablaJSX;
    }
}

export default Tabla;

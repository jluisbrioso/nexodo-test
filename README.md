# _Prueba Técnica para Néxodo Digital_


## **Caso 1**

La estructura que puedo extraer del ticket proporcionado es la siguiente:

- Por un lado, tendríamos información referente al **comercio**:

    - `Nombre Fiscal`
        - _Nexodo Digital_
    - `Dirección`
        - _Calle Carmen Martinez Sancho_
    - `CIF` (Identificador principal)
        - _A123456789_

    >Opcionalmente, atendiendo a la impresión y según las necesidades del comercio, podríamos tener:
    >- `Título`
    >   - _Nexodo Digital_
    >- `Despedida`
    >   - _Gracias por su visita_

- Por otro lado, tendríamos la información relativa al **ticket** en sí. Primero tendríamos la identificativa:

    - `Fecha`
        - _22-05-2019_
    - `Hora`
        - _17:56:42_
    - `Nº Orden` (Identificador principal)
        - _1_
    - `Estado`
        - _PENDIENTE DE COBRO_

- Después, tendríamos la referente al desglose:

    - `Artículos Pedidos`
        - Por cada uno de ellos, guardaríamos:
            - `Unidades`
                - _1_
            - `Importe`
                - _1.50_
        >Entendiéndose que la información propia de los artículos, como el `nombre`, `precio` e `IVA` están por separado y son generales para todos los tickets.
    - `Total`
        - _12.00_

- Y para finalizar, tendríamos la información fiscal, general del comercio:

    - `Tipo`
        - _10.00%_
    - `Base`
        - _10.91_
    - `Valor Añadido`
        -   _1.09_

## **Caso 2**

Puede accederse a la **vista** propuesta a través de [este](https://jluisbrioso.github.io/nexodo-test) enlace, o clonando este _repositorio_.
import InputComReferencia from "@/components/formulario/InputComReferencia";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef } from "react";

export default function () {
    const referencia = useRef()

    return (
        <Pagina titulo="Modificando uma referência" subtitulo="Usando useRef e useImperativeHandle">
            <Flex col>
                <InputComReferencia tipo="text" label="Digite o texto" ref={referencia} />
            </Flex>
        </Pagina>
    )
}
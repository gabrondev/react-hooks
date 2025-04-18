import InputFormatado from "@/components/formulario/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function () {
    function validaSenha(senha: string) {
        let correspondencia = senha.match(/[\d\S]{8,}/)
        return correspondencia?.[0].length === senha.length
    }

    const [senha, setSenha, senhaValida] = useStateValidado("", validaSenha);
    let borda
    if (senha === "") {
        borda = "border-none"
    } else if (senhaValida) {
        borda = "border-green-600"
    } else if (!senhaValida) {
        borda = "border-red-600"
    }

    return (
        <Pagina titulo="Validando senha" subtitulo="Usando um hook personalizado para validação">
            <InputFormatado
                valor={senha}
                onInput={(e) => setSenha(e.target.value)}
                label="Senha"
                tipo="text"
                className={`
                    ${borda} border-4 w-80 flex    
                `}
            />
        </Pagina>
    )
}
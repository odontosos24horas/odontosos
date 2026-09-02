/**
 * Ano do copyright que não envelhece.
 *
 * `new Date().getFullYear()` sozinho não resolve numa página estática: a
 * expressão roda no BUILD, não na visita. Foi o que aconteceu nos sites
 * irmãos — o código já usava getFullYear() e mesmo assim o rodapé em
 * produção exibia 2024, congelado no último deploy.
 *
 * Aqui o ano do build vai no HTML (válido para crawlers e para quem está
 * sem JavaScript) e um script de uma linha corrige no cliente quando a
 * virada de ano acontece sem novo deploy. Sem hidratação e sem client
 * component: são ~80 bytes inline.
 */
export default function AnoAtual() {
  const anoDoBuild = new Date().getFullYear()

  return (
    <>
      <span id="ano-copyright">{anoDoBuild}</span>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "var e=document.getElementById('ano-copyright');if(e)e.textContent=new Date().getFullYear();"
        }}
      />
    </>
  )
}

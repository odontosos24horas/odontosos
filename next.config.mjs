/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Só WebP, de propósito.
    //
    // Com AVIF na lista, a primeira geração de cada tamanho travava por
    // minutos — inclusive a foto do hero, que é a imagem de LCP: o visitante
    // que caísse no cache frio veria a caixa vazia esperando. A economia do
    // AVIF sobre o WebP aqui é de 6 a 9 KB por imagem, o que não paga esse
    // risco. O WebP tem suporte universal e já era o que o site entregava.
    formats: ['image/webp']
  }
}

export default nextConfig

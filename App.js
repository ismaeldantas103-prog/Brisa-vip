export default function BrisaSense() { const gerar = () => { const geral = Math.floor(Math.random() * (200 - 120) + 120) const redDot = Math.floor(Math.random() * (180 - 90) + 90) const mira2x = Math.floor(Math.random() * (170 - 80) + 80) const mira4x = Math.floor(Math.random() * (160 - 70) + 70) const awm = Math.floor(Math.random() * (100 - 30) + 30) const botao = Math.floor(Math.random() * (80 - 45) + 45)

document.getElementById('geral').innerText = geral
document.getElementById('red').innerText = redDot
document.getElementById('x2').innerText = mira2x
document.getElementById('x4').innerText = mira4x
document.getElementById('awm').innerText = awm
document.getElementById('botao').innerText = botao + '%'

}

return ( <div className="min-h-screen bg-black text-white flex items-center justify-center p-6"> <div className="bg-zinc-900 rounded-3xl shadow-2xl p-8 w-full max-w-md border border-green-500"> <h1 className="text-4xl font-bold text-center text-green-400 mb-2"> Brisa Sense </h1>

<p className="text-center text-zinc-400 mb-6">
      Gerador de Sensibilidade Free Fire
    </p>

    <button
      onClick={gerar}
      className="w-full bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold py-4 rounded-2xl text-lg"
    >
      GERAR SENSI
    </button>

    <div className="mt-8 space-y-4">
      <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between">
        <span>Geral</span>
        <span id="geral">---</span>
      </div>

      <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between">
        <span>Ponto Vermelho</span>
        <span id="red">---</span>
      </div>

      <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between">
        <span>Mira 2x</span>
        <span id="x2">---</span>
      </div>

      <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between">
        <span>Mira 4x</span>
        <span id="x4">---</span>
      </div>

      <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between">
        <span>Mira AWM</span>
        <span id="awm">---</span>
      </div>

      <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between">
        <span>Botão de Atirar</span>
        <span id="botao">---</span>
      </div>
    </div>

    <p className="text-center text-zinc-500 text-sm mt-6">
      Criado por Brisa Sense
    </p>
  </div>
</div>

) }
import React, { useState } from "react";
import "./GirasolesAmor.css";

const mensajes = [
  "💘 No hay distancia que pueda contra lo que siento por ti.",
  "✨ Mi amor por ti no depende de circunstancias, es una decisión diaria.",
  "🫀 Eres la melodía que calma mi alma.",
  "🌺 Amarte es como respirar, simplemente sucede.",
  "💞 A tu lado, todo es más claro, más suave, más bello.",
  "🌈 Eres mi refugio, mi alegría, mi hogar.",
  "🦋 En cada mirada tuya, renazco.",
  "🛤️ Si este camino es contigo, que venga lo que sea.",
  "🧱 Si toca construir desde cero, lo haré contigo.",
  "⏳ Aunque tome tiempo, vale la pena si es contigo.",
  "🏗️ Este amor no es perfecto, pero es real, y quiero trabajar en él.",
  "🥽 Estoy dispuesto a aprender a amar como tú mereces.",
  "🌪️ Aunque haya caos, yo quiero paz contigo.",
  "🧨 Prefiero mil veces los problemas contigo que la calma sin ti.",
  "🚧 Nuestro amor también se construye en los días difíciles.",
  "🛡️ En cada batalla emocional, yo estaré de tu lado.",
  "🌟 Estoy aquí para verte florecer, no para cortarte las alas.",
  "📚 Aprender de ti me hace mejor persona.",
  "🎯 Tus metas son importantes para mí también.",
  "🧘‍♀️ Quiero ser parte de tu paz, no de tu tormenta.",
  "🍃 Cada día contigo me enseña algo nuevo sobre el amor.",
  "🏆 Tu crecimiento me inspira a crecer contigo.",
  "🪞 Contigo aprendí que el amor también se construye mirando hacia adentro.",
  "🧭 Si alguna vez te pierdes, aquí estaré para recordarte lo valioso que eres.",
  "🚀 Estamos destinados a algo grande, lo siento en cada palabra que compartimos.",
  "🔭 El futuro me emociona porque sé que estás en él.",
  "📈 Lo mejor aún no llega, y quiero esperarlo contigo.",
  "🎇 Hay magia en nuestras posibilidades.",
  "🛸 Nadie nos puede detener cuando estamos alineados.",
  "🌌 Entre todas las estrellas, te seguiría a ti.",
  "🧑‍🚀 Si hace falta saltar al vacío, lo haré tomándote la mano.",
  "Mi cariño por ti es un universo en expansión, cada día descubro nuevas galaxias de afecto.",
  "Lo que siento por ti es un idioma que el corazón entiende perfectamente, aunque las palabras a veces fallen en traducirlo.",
  "Hay un lugar en mi alma donde resides tú, un espacio tan profundo que las palabras apenas alcanzan a rozar su superficie.",
  "Mi amor por ti no se mide en palabras dichas, sino en silencios cómplices y miradas que lo dicen todo.",
  "Intento cada día mostrarte cuánto me importas, pero la verdad es que mis acciones son solo una pequeña sombra de la inmensidad de este sentimiento.",
  "Eres más importante para mí de lo que cualquier frase podría jamás capturar.",
  "Mi corazón guarda secretos de cariño hacia ti que ni siquiera yo conozco por completo.",
  "A veces siento que mi amor por ti es como el viento, lo sientes pero no siempre lo ves en su totalidad.",
  "Cada gesto, cada mirada, cada detalle es un intento de mostrarte una parte de lo mucho que significas para mí.",
  "Lo que siento por ti es tan grande que a veces las palabras se quedan pequeñas y prefiero demostrártelo con mis actos.",
  "Eres la razón por la que creo en el amor, y aunque a veces me falten las palabras, mi corazón siempre sabe cómo expresarlo.",
  "A veces me pregunto si alguna vez podré encontrar las palabras adecuadas para describir lo que siento por ti, pero luego recuerdo que el amor no siempre necesita ser explicado.",
  "Eres la melodía que nunca deja de sonar en mi corazón, y aunque a veces me falte el aire, siempre encuentro la forma de seguir bailando contigo.",
  "Cada día a tu lado es un nuevo capítulo en esta historia de amor que nunca quiero que termine.",
  "A veces me siento como un poeta sin palabras, intentando describir lo que siento por ti, pero al final, solo puedo sonreír y dejar que mis acciones hablen por mí.",
  "Eres la razón por la que creo en los milagros, y aunque a veces me falten las palabras, siempre encuentro la forma de mostrarte lo mucho que significas para mí.",
  "Eres la luz que ilumina mis días más oscuros, y aunque a veces me falten las palabras, siempre encuentro la forma de mostrarte lo mucho que significas para mí.",

  "📜 Poema:\nMás allá de lo que digo,\nhay un sentir profundo.\nEn cada latido abrigo\nun amor sin segundo.",
  "📜 Poema:\nLas palabras son un puente frágil,\nmi amor por ti, un océano sin fin.\nEn cada acto, un dulce sortilegio,\nintentando mostrarte mi sentir.",
  "📜 Poema:\nNo bastan las letras, mi bien amado,\npara pintar la inmensidad.\nEn cada abrazo apretado,\nva un trozo de mi verdad.",
  "📜 Poema:\nA veces el silencio es el mejor verso,\ndonde el alma habla sin cesar.\nSiente mi amor, inmerso,\nmás allá de lo que puedo expresar.",
  "📜 Poema:\nEn mis ojos puedes mirar,\nun reflejo de mi querer.\nEs mucho más de lo que hablar,\nun sentimiento que no puede perecer.",
  "📜 Poema:\nLas palabras son solo un eco,\nmi amor por ti, un grito eterno.\nEn cada gesto, un reflejo,\nde lo que siento, puro y tierno.",
  "📜 Poema:\nNo hay palabras que puedan encerrar,\nlo que por ti siento, mi amor.\nEn cada mirada, un nuevo hogar,\ny en cada abrazo, un nuevo clamor.",
  "📜 Poema:\nLas palabras son solo un intento,\nde describir lo que siento por ti.\nEn cada latido, un nuevo aliento,\ny en cada abrazo, un nuevo sentir.",

  `📖 Poema:\nLas palabras, mi amor, a veces son prisión,\nencierran sentimientos que ansían volar.\nLo que por ti siento es una inmensa visión,\nun universo entero que quiero mostrar.
    En cada detalle, en cada pequeña acción,\nintento dibujar la magnitud de este querer.\nEs una melodía sin fin, una dulce canción,\nque mi alma canta solo para tu ser.
    Quizás mis torpes intentos no basten aún,\npara que comprendas la hondura de mi amar.\nPero en cada latido, bajo el sol y la luna,\nsabrás que te quiero más allá del hablar.`,

  '<a href="https://open.spotify.com/track/1YzCsTRb22dQkh9lWPBKv7" target="_blank" style="color: white;" rel="noopener noreferrer">🎵 Perfect - Ed Sheeran</a>',
  '<a href="https://open.spotify.com/track/4TnjEaWOeW0eKTKIEvJyCa" target="_blank" style="color: white;" rel="noopener noreferrer">🎵 All of Me - John Legend</a>',
  '<a href="https://open.spotify.com/track/5uEYRdEIh9Bo4fpjDd4Na9" target="_blank" style="color: white;" rel="noopener noreferrer">🎵 Just the Way You Are - Bruno Mars</a>',
  '<a href="https://open.spotify.com/track/7oK9VyNzrYvRFo7nQEYkWN" target="_blank" style="color: white;" rel="noopener noreferrer">🎵 Thinking Out Loud - Ed Sheeran</a>',

  '<a href="https://www.netflix.com/title/70293622" target="_blank" style="color: white;" rel="noopener noreferrer">🎬 Cuestión de tiempo (About Time) - Netflix</a>',
  '<a href="https://www.netflix.com/title/80189859" target="_blank" style="color: white;" rel="noopener noreferrer">🎬 A todos los chicos de los que me enamoré - Netflix</a>',
  '<a href="https://www.netflix.com/title/80220013" target="_blank" style="color: white;" rel="noopener noreferrer">🎬 Mi primer beso (The Kissing Booth) - Netflix</a>',
  '<a href="https://www.netflix.com/title/80203147" target="_blank" style="color: white;" rel="noopener noreferrer">🎬 Amor garantizado - Netflix</a>',
];

const TerminalAmor = () => {
  const [historial, setHistorial] = useState([]);
  const [input, setInput] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    setHistorial([...historial, { entrada: input, salida: mensaje }]);
    setInput("");
  };

  return (
    <div className="terminal">
      <div className="pantalla">
        {historial.map((item, i) => (
          <div key={i}>
            <div className="entrada"> {item.entrada}</div>
            <div
              className="salida"
              dangerouslySetInnerHTML={{ __html: item.salida }}
            />
          </div>
        ))}
      </div>
      <form onSubmit={manejarEnvio}>
        <span className="prompt">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-terminal"
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalAmor;

import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Layout, Typography, notification } from "antd";
import "antd/dist/reset.css";

const { Content } = Layout;
const { Title } = Typography;

// Tu arreglo de mensajes (resumido aquí por espacio)
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
];

const MatrixLoveEffect = ({
  text = "💖",
  fontSize = 18,
  color = "#ff69b4",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const char = text[Math.floor(Math.random() * text.length)];
        ctx.fillText(char, x, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [text, fontSize, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    />
  );
};

function App() {
  const [mostrarEfecto, setMostrarEfecto] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [cicloActivo, setCicloActivo] = useState(false);

  const onFinish = (values) => {
    const nombre = values.nombre?.trim().toLowerCase();
    if (nombre === "samuel" || nombre === "jafet") {
      setMostrarEfecto(true);
      setCicloActivo(true); // empieza el ciclo de mostrar mensajes
    } else {
      notification.error({
        message: "Nombre no válido",
        description: "Nombre no permitido 😅",
        placement: "top",
        duration: 3,
      });
      setMostrarEfecto(false);
      setCicloActivo(false);
      setMensaje(null);
    }
  };

  useEffect(() => {
    if (!cicloActivo) return;

    let mostrarTimeout;
    let ocultarTimeout;

    const cicloMensajes = () => {
      // Escoge un mensaje aleatorio
      const mensajeAleatorio =
        mensajes[Math.floor(Math.random() * mensajes.length)];
      setMensaje(mensajeAleatorio);

      // Después de 12s ocultar el mensaje
      mostrarTimeout = setTimeout(() => {
        setMensaje(null);

        // Después de 10s volver a mostrar otro mensaje
        ocultarTimeout = setTimeout(() => {
          cicloMensajes();
        }, 10000);
      }, 12000);
    };

    cicloMensajes();

    return () => {
      clearTimeout(mostrarTimeout);
      clearTimeout(ocultarTimeout);
    };
  }, [cicloActivo]);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#111" }}>
      {mostrarEfecto && (
        <>
          <MatrixLoveEffect
            text="Te Amo Samuel 💖"
            color="#ff69b4"
            fontSize={20}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
              flexDirection: "column",
              animation: "fadeIn 2s ease-in-out",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "3rem",
                textAlign: "center",
                zIndex: 2,
                animation: "shrinkExpand 3s ease-in-out forwards",
              }}
            >
              Te Amo Samuel 💖
            </h1>

            {mensaje && (
              <div
                style={{
                  marginTop: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "1.5rem 2rem",
                  borderRadius: "12px",
                  maxWidth: "600px",
                  color: "#fff",
                  fontSize: "1.2rem",
                  zIndex: 3,
                  backdropFilter: "blur(6px)",
                  textAlign: "center",
                  animation: "fadeIn 1s ease-in-out",
                }}
              >
                {mensaje}
              </div>
            )}
          </div>
        </>
      )}

      {!mostrarEfecto && (
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            name="nombreForm"
            onFinish={onFinish}
            layout="vertical"
            style={{
              background: "#1f1f1f",
              padding: "2rem",
              borderRadius: "12px",
              color: "white",
              minWidth: 300,
              boxShadow: "0 0 20px #ff69b4",
            }}
          >
            <Title level={3} style={{ color: "#ff69b4", textAlign: "center" }}>
              Ingresa tu nombre 💖
            </Title>
            <Form.Item
              name="nombre"
              rules={[
                { required: true, message: "Por favor, ingresa tu nombre" },
              ]}
            >
              <Input
                size="large"
                placeholder="Tu nombre aquí"
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" size="large">
                Aceptar
              </Button>
            </Form.Item>
          </Form>
        </Content>
      )}

      <style>{`
        @keyframes shrinkExpand {
          0% { transform: scale(1); opacity: 1; }
          25% { transform: scale(0.2); opacity: 0.5; }
          50% { transform: scale(0.2); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </Layout>
  );
}

export default App;

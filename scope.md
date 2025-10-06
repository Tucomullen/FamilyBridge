# 🧭 FamilyBridge — PRD (Product Requirements Document) v0.1

## 1. 🎯 Misión  
Conectar a las personas mayores con sus familias mediante una aplicación **ultrasencilla**, segura y accesible, que permita **comunicarse, compartir momentos y sentirse acompañados**, sin barreras tecnológicas.

---

## 2. 👥 Público objetivo  
- **Personas mayores (65+)** que tienen dificultades con los móviles actuales.  
- **Familiares o cuidadores** que desean mantener el contacto diario de manera práctica y sin complicaciones.  
- **Cuidadores o residencias** (en una fase posterior) que gestionen la comunicación de varios mayores.

---

## 3. 💡 Problema que resolvemos  
Las videollamadas, fotos y mensajes familiares están repartidos entre muchas apps (WhatsApp, Zoom, Facebook…), con interfaces confusas, textos pequeños y demasiados pasos.  
**FamilyBridge simplifica todo en tres botones grandes y claros**, para que el mayor no necesite ayuda para comunicarse ni sentirse solo.

---

## 4. 🧩 MVP — Funciones clave versión inicial  
1. **Llamada de un toque:** el mayor pulsa una foto o nombre y la llamada comienza (audio o vídeo).  
2. **Botón SOS:** un botón rojo que envía aviso inmediato al familiar principal (notificación y llamada automática).  
3. **Compartir y ver fotos:** los familiares suben fotos desde su móvil; el mayor las ve en pantalla grande y puede reaccionar con gestos o emojis grandes.  

> El MVP se centrará en accesibilidad, estabilidad y privacidad antes que en funciones extra.

---

## 5. 🧱 Reglas de simplicidad y diseño  
- **Tipografía grande y de alto contraste (≥ 18 pt).**  
- **Colores muy diferenciados** (modo alto contraste, blanco/negro + color primario).  
- **Botones grandes, uno por acción.**  
- **Sin menús ocultos ni configuraciones complicadas.**  
- **Lenguaje claro:** “Llamar a Ana” en lugar de “Iniciar videollamada”.  
- **Soporte por voz y lectura en voz alta (fase 2).**

> Todo el diseño seguirá las pautas **WCAG 2.2** y **EAA 2025**.

---

## 6. 📊 Métricas de éxito del MVP  
- ✅ El mayor puede realizar una videollamada **sin ayuda** en menos de 30 segundos.  
- ✅ El familiar recibe una alerta SOS en **menos de 1 minuto**.  
- ✅ El 90 % de los usuarios mayores se sienten cómodos usando la app tras el primer día.  
- ✅ Estabilidad: menos de 1 % de llamadas fallidas o desconectadas.

---

## 7. 🧠 Stack tecnológico previsto  
- **Frontend móvil:** React Native + Expo (app Senior).  
- **Frontend web:** React + Vite (panel familiar).  
- **Backend:** FastAPI (Python) + PostgreSQL.  
- **Infraestructura:** GitHub + CI/CD (Actions) + Railway / Firebase (en fases iniciales).  
- **Asistente IA:** Cursor AI Agents + ChatGPT-5 Pro para generación guiada de código y pruebas.

---

## 8. 🌐 Plataformas objetivo  
- **iOS y Android:** app nativa (instalable con icono grande y texto legible).  
- **Web familiar:** versión PWA (para navegador o escritorio).  
- **Modo Kiosko/Tableta:** para residencias o dispositivos fijos.

---

## 9. ⚙️ Riesgos y limitaciones actuales  
- Conexión a internet débil o inestable.  
- Permisos de cámara y micrófono pueden requerir asistencia inicial.  
- Necesidad de interfaz sin teclado (solo táctil).  
- Posible resistencia de algunos mayores al cambio.  
- Fase 1 sin autenticación avanzada ni pagos (privacidad ante todo).

---

## 10. 🔒 Privacidad y cumplimiento  
- Cumplimiento **GDPR / EAA 2025**.  
- Datos mínimos: sin geolocalización ni rastreo.  
- Cifrado de extremo a extremo en llamadas y mensajes.  
- Control familiar: solo familiares invitados pueden interactuar.  
- Todo el almacenamiento de fotos y llamadas será temporal y seguro.

---

## 11. 🧭 Fases previstas  
| Fase | Objetivo | Resultado esperado |
|------|-----------|--------------------|
| **Fase 1** | MVP funcional (3 botones) | App usable y estable |
| **Fase 2** | Accesibilidad ampliada (voz, lectura, contraste) | Inclusión total |
| **Fase 3** | Conexión familiar (grupos, álbumes, calendario) | Interacción emocional |
| **Fase 4** | Escalabilidad y despliegue comercial | Publicación App Store / Play Store |

---

## 12. 🚀 Próximo paso  
Guardar este documento como `scope.md` en Cursor (o `docs/scope.md` si ya existe carpeta `/docs/`).  

Será el punto de partida para que los **Agentes de Cursor** generen:  
- Historias de usuario,  
- Lista de tareas de desarrollo,  
- Plan de testing y CI/CD.  

---

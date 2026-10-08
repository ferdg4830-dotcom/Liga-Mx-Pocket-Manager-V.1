# Liga MX Pocket Manager — App multijugador LAN (Android)

## Qué necesitas en tu compu (gratis)
1. Node.js: https://nodejs.org (LTS)
2. Android Studio: https://developer.android.com/studio

## Pasos

1. Descarga y descomprime este proyecto.
2. Abre una terminal dentro de la carpeta `LigaMXApp` y ejecuta:
   ```
   npm install
   npx cap sync android
   npx cap open android
   ```
   El último comando abre Android Studio con el proyecto ya cargado.
3. En Android Studio espera a que "Gradle Sync" termine (barra de abajo).
4. Conecta tu teléfono por USB con "Depuración USB" activada, o crea un emulador.
5. Dale click al botón ▶ (Run) para instalar la app en tu teléfono.
6. Repite los pasos 4–5 en cada teléfono donde quieras jugar (todos con la misma app).

## Generar el APK para compartir sin cable
En Android Studio: `Build > Build App Bundle(s) / APK(s) > Build APK(s)`.
El archivo queda en `android/app/build/outputs/apk/debug/app-debug.apk`.
Pásalo a tus amigos por WhatsApp/Bluetooth y que lo instalen (activando "orígenes desconocidos").

## Cómo jugar en red local (Wi-Fi)
1. Todos deben estar conectados al MISMO Wi-Fi (o hotspot de un celular).
2. Un jugador presiona "CREAR SALA (SER ANFITRIÓN)" y comparte la IP que le aparece.
3. Los demás presionan "UNIRSE", escriben esa IP y su nombre de DT.
4. Cuando todos están en la sala, el anfitrión presiona "IR AL MERCADO PRE-TEMPORADA".

## Notas del beta
- El multijugador Wi-Fi SOLO funciona en la app instalada, no en el navegador.
- Hasta 6 jugadores (1 anfitrión + 5).
- Cada jornada se juega EN VIVO con interacción real solo el partido más relevante (si dos humanos chocan entre sí, ese es el que se juega en vivo); los demás partidos de esa jornada se resuelven automáticos.
- Si alguien se desconecta, su equipo pasa a ser controlado por la IA.
- Routers con "aislamiento de clientes" (común en Wi-Fi de negocios/algunos módems) pueden bloquear la conexión.

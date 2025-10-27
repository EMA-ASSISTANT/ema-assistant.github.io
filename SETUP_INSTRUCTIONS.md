# Instrucciones de Configuración - EMA Landing Page

## 1. Google Sheets Integration

Para recibir los datos del formulario en Google Sheets:

### Paso 1: Crear el Google Sheet
1. Crea un nuevo Google Sheet
2. Nómbralo como quieras (ej: "EMA - Formularios BETA")

### Paso 2: Configurar Google Apps Script
1. En tu Google Sheet, ve a **Extensiones → Apps Script**
2. Borra todo el código que aparece por defecto
3. Abre el archivo `scripts/google-apps-script.js` de este proyecto
4. Copia TODO el código y pégalo en el editor de Apps Script
5. Guarda el proyecto (Ctrl+S o Cmd+S)

### Paso 3: Implementar como Web App
1. Haz clic en **Implementar** → **Nueva implementación**
2. Haz clic en el icono de engranaje junto a "Seleccionar tipo"
3. Selecciona **Aplicación web**
4. Configura:
   - **Descripción**: "EMA Form Handler" (o lo que quieras)
   - **Ejecutar como**: "Yo" (tu cuenta)
   - **Quién tiene acceso**: "Cualquier persona"
5. Haz clic en **Implementar**
6. Autoriza los permisos cuando te lo pida
7. **COPIA LA URL** que te da (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

### Paso 4: Añadir la URL a Vercel
1. Ve a tu proyecto en Vercel
2. Ve a **Settings → Environment Variables**
3. Añade una nueva variable:
   - **Name**: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
   - **Value**: La URL que copiaste en el paso anterior
4. Guarda y redeploy tu proyecto

### Resultado
El script creará automáticamente dos hojas en tu Google Sheet:
- **Usuarios**: Para formularios de personas individuales
- **Organizaciones**: Para formularios de residencias, entidades y fundaciones

---

## 2. Google Analytics

Para activar Google Analytics:

### Paso 1: Obtener el Measurement ID
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad para tu sitio web (si no la tienes)
3. Copia tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

### Paso 2: Añadir a Vercel
1. Ve a tu proyecto en Vercel
2. Ve a **Settings → Environment Variables**
3. Añade una nueva variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Tu Measurement ID (ej: `G-ABC123XYZ`)
4. Guarda y redeploy tu proyecto

---

## 3. Desarrollo Local

Si quieres probar en local:

1. Copia `.env.local.example` a `.env.local`
2. Añade tus variables de entorno en `.env.local`
3. Ejecuta `npm install` (o `pnpm install`)
4. Ejecuta `npm run dev` (o `pnpm dev`)

---

## Soporte

Si tienes problemas:
- Revisa que las URLs no tengan espacios al principio o final
- Verifica que los permisos de Google Apps Script estén correctos
- Comprueba la consola del navegador para ver errores
- Contacta: ema.tech.help@gmail.com

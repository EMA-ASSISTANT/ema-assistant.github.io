/**
 * GOOGLE APPS SCRIPT - EMA FORM HANDLER
 *
 * IMPORTANTE: Este archivo NO es JavaScript normal.
 * Es código de Google Apps Script que se ejecuta en los servidores de Google.
 *
 * Las variables como SpreadsheetApp y ContentService son globales de Google Apps Script
 * y están disponibles automáticamente en ese entorno.
 *
 * NO intentes ejecutar este archivo localmente - solo funciona en Google Apps Script.
 *
 * ============================================================================
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * ============================================================================
 *
 * 1. Abre tu Google Sheet donde quieres recibir los datos
 * 2. Ve a Extensiones → Apps Script
 * 3. Borra todo el código que aparece por defecto
 * 4. Copia y pega este código completo
 * 5. Guarda el proyecto (Ctrl+S o Cmd+S)
 * 6. Haz clic en "Implementar" → "Nueva implementación"
 * 7. Selecciona tipo: "Aplicación web"
 * 8. Configuración:
 *    - Ejecutar como: "Yo"
 *    - Quién tiene acceso: "Cualquier persona"
 * 9. Haz clic en "Implementar"
 * 10. Copia la URL que te da (algo como: https://script.google.com/macros/s/ABC123.../exec)
 * 11. Añade esa URL como variable de entorno en Vercel:
 *     NEXT_PUBLIC_GOOGLE_SHEETS_URL=tu_url_aqui
 *
 * El script creará automáticamente dos hojas:
 * - "Usuarios" para formularios individuales
 * - "Organizaciones" para formularios de organizaciones
 */

// Declare global variables
var SpreadsheetApp
var ContentService
var Logger

/**
 * Maneja las peticiones POST del formulario
 * @param {Object} e - Objeto de evento de Google Apps Script
 * @returns {ContentService.TextOutput} Respuesta JSON
 */
function doPost(e) {
  try {
    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents)

    // Obtener la hoja de cálculo activa
    const ss = SpreadsheetApp.getActiveSpreadsheet()

    // Determinar qué hoja usar según el tipo de usuario
    let sheet
    if (data.userType === "individual") {
      sheet = ss.getSheetByName("Usuarios")
      if (!sheet) {
        sheet = ss.insertSheet("Usuarios")
        // Crear encabezados para usuarios individuales
        sheet.appendRow([
          "Fecha",
          "Nombre",
          "Email",
          "Idioma Preferido",
          "Rango de Edad",
          "Dificultades",
          "Frecuencia de Pago",
          "Cantidad Dispuesta a Pagar (€)",
          "Mensaje",
        ])
        // Formatear encabezados
        sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#4A5568").setFontColor("#FFFFFF")
      }

      // Añadir fila con datos del usuario individual
      sheet.appendRow([
        new Date(),
        data.name || "",
        data.email || "",
        data.preferredLanguage || "",
        data.ageRange || "",
        data.difficulties ? data.difficulties.join(", ") : "",
        data.paymentFrequency || "",
        data.paymentAmount || "",
        data.message || "",
      ])
    } else if (data.userType === "organization") {
      sheet = ss.getSheetByName("Organizaciones")
      if (!sheet) {
        sheet = ss.insertSheet("Organizaciones")
        // Crear encabezados para organizaciones
        sheet.appendRow(["Fecha", "Nombre de Contacto", "Email", "Nombre de Organización", "Mensaje"])
        // Formatear encabezados
        sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#4A5568").setFontColor("#FFFFFF")
      }

      // Añadir fila con datos de la organización
      sheet.appendRow([new Date(), data.name || "", data.email || "", data.organizationName || "", data.message || ""])
    }

    // Ajustar ancho de columnas automáticamente
    sheet.autoResizeColumns(1, sheet.getLastColumn())

    // Respuesta exitosa
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Datos guardados correctamente",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Respuesta de error
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

/**
 * Función de prueba (opcional)
 * Ejecuta esta función desde el editor de Apps Script para probar el script
 */
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        userType: "individual",
        name: "Test User",
        email: "test@example.com",
        preferredLanguage: "ca",
        ageRange: "65-69",
        difficulties: ["hearing", "vision"],
        paymentFrequency: "monthly",
        paymentAmount: 50,
        message: "Este es un mensaje de prueba",
      }),
    },
  }

  const result = doPost(testData)
  Logger.log(result.getContent())
}

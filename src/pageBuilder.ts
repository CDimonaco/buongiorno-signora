export const pageBuilder = (imageUrl: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Buongiorno signora</title>
    </head>
    <body>
        <img src="${imageUrl}" />
    </body>
    </html>`;
}
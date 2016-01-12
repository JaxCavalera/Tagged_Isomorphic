//  =====  HTML Template  =====
let indexTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Tagged</title>
            <!-- Add Favicons -->
            <link rel="icon" sizes="192x192" href="images/android-icon.png">
            <link rel="manifest" href="images/manifest.json">

            <!-- Check if viewed on a Mobile -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>

        <body>
            <div id='container'>__REACT_APP__</div>
            <script src='bundle.js'></script>
        </body>
    </html>
`;

export default indexTemplate;

//  =====  HTML Template  =====
let indexTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Tagged</title>
            <!-- Check if viewed on a Mobile -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>

        <body>
            <div class='container'>
                __REACT_APP__
            </div>
            <script src='bundle.js'></script>
        </body>
    </html>
`;

export default indexTemplate;
